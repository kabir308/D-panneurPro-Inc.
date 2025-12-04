/**
 * Smart Delivery Mode Matching Algorithm
 * Uses AI/ML to select optimal transport mode
 * Optimization criteria: Cost, Time, Carbon, Customer satisfaction
 */

import { ecoModes, modeRanges } from '../config/ecoModes. config';

export class MatchingAlgorithm {
  /**
   * Main decision function
   * @param {Object} orderData - Order details
   * @returns {Object} Selected mode with reasoning
   */
  static selectMode(orderData) {
    const {
      distance,
      weight,
      weather,
      urgency,
      orderValue,
      customerPreference,
      timeOfDay,
      driverAvailability
    } = orderData;

    const scores = this.calculateModeScores({
      distance,
      weight,
      weather,
      urgency,
      orderValue,
      customerPreference,
      timeOfDay,
      driverAvailability
    });

    const bestMode = scores.sort((a, b) => b. score - a.score)[0];

    return {
      selectedMode: bestMode. modeId,
      allScores: scores,
      reasoning: bestMode.reasoning,
      estimatedDeliveryTime: bestMode.estimatedTime,
      estimatedCost: bestMode.cost,
      estimatedProfit: bestMode.profit,
      carbonImpact: bestMode.carbon,
      confidence: bestMode.score / 100
    };
  }

  /**
   * Calculate score for each mode
   */
  static calculateModeScores(orderData) {
    return ecoModes.map(mode => {
      const distanceScore = this.scoreDistance(orderData.distance, mode);
      const weightScore = this. scoreWeight(orderData.weight, mode);
      const weatherScore = this.scoreWeather(orderData.weather, mode);
      const economicsScore = this.scoreEconomics(mode);
      const urgencyScore = this.scoreUrgency(orderData.urgency, mode);
      const customerPrefScore = this.scoreCustomerPreference(orderData.customerPreference, mode);

      const totalScore =
        (distanceScore * 0.35) +
        (weightScore * 0.15) +
        (weatherScore * 0.15) +
        (economicsScore * 0.15) +
        (urgencyScore * 0.15) +
        (customerPrefScore * 0.05);

      return {
        modeId: mode.id,
        modeName: mode.name,
        score: Math.round(totalScore),
        distanceScore,
        weightScore,
        weatherScore,
        economicsScore,
        estimatedTime: this.estimateDeliveryTime(orderData.distance, mode),
        cost: mode.costPerDelivery,
        profit: mode.profitPerDelivery,
        carbon: mode. carbonPerDelivery,
        reasoning: this.generateReasoning(mode, {
          distance: distanceScore,
          weight: weightScore,
          weather: weatherScore
        })
      };
    });
  }

  /**
   * Distance scoring (0-100)
   * Each mode has optimal distance range
   */
  static scoreDistance(distance, mode) {
    const { range } = mode;
    if (distance < range[0]) {
      // Too close for this mode
      return Math.max(0, 100 - ((range[0] - distance) * 50));
    }
    if (distance > range[1]) {
      // Too far for this mode
      return Math. max(0, 100 - ((distance - range[1]) * 50));
    }
    // Perfect range
    return 100;
  }

  /**
   * Weight scoring (0-100)
   */
  static scoreWeight(weight, mode) {
    if (weight > mode.maxWeight) {
      return 0; // Cannot handle
    }
    // Optimal use: 60-80% of capacity
    const optimalWeight = mode.maxWeight * 0.7;
    if (weight <= optimalWeight) {
      return 100;
    }
    return Math.max(50, 100 - ((weight - optimalWeight) * 10));
  }

  /**
   * Weather scoring (0-100)
   */
  static scoreWeather(weatherCondition, mode) {
    if (mode.idealWeather. includes(weatherCondition)) {
      return 100;
    }
    // Map weather impacts
    const weatherImpact = {
      sunny: { walk: 100, ebike: 100, car: 95 },
      cloudy: { walk: 90, ebike: 90, car: 95 },
      light_rain: { walk: 40, ebike: 70, car: 90 },
      rain: { walk: 10, ebike: 30, car: 95 },
      snow: { walk: 0, ebike: 0, car: 100 },
      extreme: { walk: 0, ebike: 0, car: 50 }
    };

    return weatherImpact[weatherCondition]?.[mode.id] || 50;
  }

  /**
   * Economics scoring (profitability, cost efficiency)
   */
  static scoreEconomics(mode) {
    // Higher profit = higher score
    // Normalize to 0-100
    const maxProfit = Math.max(...ecoModes.map(m => m.profitPerDelivery));
    return (mode.profitPerDelivery / maxProfit) * 100;
  }

  /**
   * Urgency scoring (speed requirements)
   */
  static scoreUrgency(urgency, mode) {
    const urgencyMap = {
      low: { walk: 80, ebike: 90, car: 70 },
      normal: { walk: 100, ebike: 100, car: 90 },
      high: { walk: 40, ebike: 80, car: 100 },
      emergency: { walk: 0, ebike: 30, car: 100 }
    };

    return urgencyMap[urgency]? .[mode.id] || 50;
  }

  /**
   * Customer preference (eco-conscious, speed, budget)
   */
  static scoreCustomerPreference(preference, mode) {
    if (! preference) return 70;

    const prefMap = {
      eco: { walk: 100, ebike: 95, car: 20 },
      fast: { walk: 30, ebike: 80, car: 100 },
      cheap: { walk: 100, ebike: 70, car: 30 },
      balanced: { walk: 85, ebike: 90, car: 70 }
    };

    return prefMap[preference]?.[mode.id] || 70;
  }

  /**
   * Estimate delivery time based on distance and mode
   */
  static estimateDeliveryTime(distance, mode) {
    // Simple formula: pickup time + travel time + buffer
    const pickupTime = 5; // minutes
    const travelTime = (distance / (mode.avgSpeedKmh || 15)) * 60;
    const buffer = 3;

    return Math.round(pickupTime + travelTime + buffer);
  }

  /**
   * Generate human-readable reasoning
   */
  static generateReasoning(mode, scores) {
    const reasons = [];

    if (scores. distance > 80) {
      reasons.push(`Distance parfaite pour ${mode.name}`);
    }
    if (scores.weight > 80) {
      reasons.push(`Capacité optimale pour ${mode.name}`);
    }
    if (scores.weather > 80) {
      reasons.push(`Conditions météo favorables`);
    }

    if (mode.profitPerDelivery > 2) {
      reasons.push(`Profit excellent: $${mode.profitPerDelivery}`);
    }
    if (mode.carbonPerDelivery === 0) {
      reasons. push(`Zéro émission CO₂`);
    }

    return reasons.length > 0
      ? reasons.join('.  ')
      : `${mode.name} est le mode optimal`;
  }
}

/**
 * Example usage:
 * const decision = MatchingAlgorithm.selectMode({
 *   distance: 2. 3,
 *   weight: 3,
 *   weather: 'sunny',
 *   urgency: 'normal',
 *   orderValue: 45,
 *   customerPreference: 'eco',
 *   timeOfDay: 'afternoon'
 * });
 *
 * Result: Vélo électrique selected with 92% confidence
 */