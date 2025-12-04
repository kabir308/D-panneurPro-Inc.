/**
 * Financial Analytics for EcoDelivery
 * Tracks profitability, ROI, unit economics across modes
 */

import { ecoModes, profitComparison } from '../config/ecoModes. config';

export class FinancialAnalytics {
  /**
   * Calculate year-over-year financial projections
   */
  static getFinancialProjection(year) {
    const projections = {
      1: {
        year: 'Year 1',
        monthlyDeliveries: 5000,
        avgCostPerDelivery: 2. 10,
        avgRevenuePerDelivery: 3.99,
        avgProfitPerDelivery: 1.89,
        monthlyProfit: 9450,
        annualProfit: 113400,
        costReduction: 0,
        profitMargin: 0.47
      },
      2: {
        year: 'Year 2',
        monthlyDeliveries: 50000,
        avgCostPerDelivery: 1.82,
        avgRevenuePerDelivery: 3.99,
        avgProfitPerDelivery: 2.17,
        monthlyProfit: 108500,
        annualProfit: 1302000,
        costReduction: 0. 48,
        profitMargin: 0.54
      },
      3: {
        year: 'Year 3',
        monthlyDeliveries: 500000,
        avgCostPerDelivery: 1.77,
        avgRevenuePerDelivery: 3.99,
        avgProfitPerDelivery: 2.22,
        monthlyProfit: 1110000,
        annualProfit: 13320000,
        costReduction: 0.49,
        profitMargin: 0.56
      }
    };

    return projections[year];
  }

  /**
   * Detailed mode economics
   */
  static getModeEconomics(modeId) {
    const mode = ecoModes.find(m => m.id === modeId);
    if (!mode) return null;

    return {
      modeId: mode.id,
      modeName: mode.name,
      operatingCost: mode.costPerDelivery,
      revenue: mode.revenue || 3. 99,
      profit: mode.profitPerDelivery,
      profitMargin: (mode.profitPerDelivery / 3.99) * 100,
      ordersPerHour: mode.avgOrdersPerHour,
      hourlyProfit: mode.profitPerDelivery * mode.avgOrdersPerHour,
      dailyProfit: mode.profitPerDelivery * mode.avgOrdersPerHour * 8,
      monthlyProfit: mode.profitPerDelivery * mode.avgOrdersPerHour * 8 * 22,
      annualProfit: mode.profitPerDelivery * mode.avgOrdersPerHour * 8 * 22 * 12,
      yearlyCourierPayroll: mode.yearlyPayroll,
      targetRecruits: mode.targetRecruits
    };
  }

  /**
   * Compare current vs optimized vs best case
   */
  static getComparisonAnalysis() {
    return {
      scenarios: [
        {
          ... profitComparison. before,
          monthlyProfit: 3. 99 * 2000 * 0.60 * 0.49, // 5K orders/month, 60% util
          costSavings: 0,
          improvementPct: 0
        },
        {
          ... profitComparison.after,
          monthlyProfit: 3.99 * 50000 * 0.95 * 2.22,
          costSavings: (3.50 - 1.77) * 500000 * 0.60,
          improvementPct: ((2.22 - 0.49) / 0.49) * 100
        },
        {
          ...profitComparison.optimized,
          monthlyProfit: 4.50 * 100000 * 0.98 * 3.05,
          costSavings: (3.50 - 1.45) * 500000 * 0.60,
          improvementPct: ((3.05 - 0.49) / 0.49) * 100
        }
      ]
    };
  }

  /**
   * ROI analysis for courier network investment
   */
  static getNetworkROI(year) {
    const projections = {
      1: {
        year: 1,
        courierInvestment: {
          walkers: 50 * 50, // 50 walkers × $50 equipment
          ebikes: 30 * 2500, // 30 e-bikes × $2,500
          vehicles: 10 * 15000, // 10 vans × $15,000
          training: (50 + 30 + 10) * 100, // Training hours × rate
          total: 189500
        },
        annualRevenue: 113400 * 12,
        payrollExpense: 90 * 25000, // Average $25K per courier
        otherExpense: 50000,
        netProfit: 1360800 - 2250000 - 50000,
        roi: ((1360800 - 2250000 - 50000) / 189500) * 100
      },
      2: {
        year: 2,
        courierInvestment: 280 * 5000, // Average $5K per courier (amortized)
        annualRevenue: 1302000 * 12,
        payrollExpense: 280 * 25000,
        otherExpense: 200000,
        netProfit: 15624000 - 7000000 - 200000,
        roi: ((15624000 - 7000000 - 200000) / (280 * 5000)) * 100
      },
      3: {
        year: 3,
        courierInvestment: 550 * 5000,
        annualRevenue: 13320000 * 12,
        payrollExpense: 550 * 25000,
        otherExpense: 500000,
        netProfit: 159840000 - 13750000 - 500000,
        roi: ((159840000 - 13750000 - 500000) / (550 * 5000)) * 100
      }
    };

    return projections[year];
  }

  /**
   * Break-even analysis
   */
  static getBreakEvenAnalysis() {
    return {
      fixedCosts: {
        platform: 50000,
        operations: 75000,
        marketing: 50000,
        total: 175000
      },
      perDeliveryCost: 1.77,
      revenuePerDelivery: 3.99,
      contributionMargin: 3.99 - 1.77,
      breakEvenDeliveries: 175000 / (3.99 - 1. 77),
      breakEvenMonth: Math.round((175000 / (3.99 - 1. 77)) / 5000),
      message: 'Break-even at ~87,500 deliveries (~18 days at Y1 volume)'
    };
  }
}