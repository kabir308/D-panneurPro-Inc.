/**
 * EcoDelivery Modes Configuration
 * Defines all transport modes, economics, and specs
 */

export const ecoModes = [
  {
    id: 'walk',
    name: 'À Pied',
    emoji: '🚶‍♂️',
    icon: 'Footprints',
    description: 'Livraison dans les quartiers denses, courtes distances',
    maxDistance: 1. 5,
    maxWeight: 5,
    deliveryTime: '15-30 min',
    costPerDelivery: 0.50,
    carbonPerDelivery: 0,
    profitPerDelivery: 3.49,
    avgOrdersPerHour: 8,
    avSpeedKmh: 1.4,
    range: [0, 1.5],
    targetRecruits: 300,
    baseHourlyRate: 12,
    maxHourlyRate: 15,
    advantages: [
      'CO2 zéro',
      'Coût minimal',
      'Santé/fitness',
      'Parking facile',
      'Proximité client',
      'Flexible'
    ],
    limitations: [
      'Météo dépendant',
      'Distance max 1.5km',
      'Fatigue physique',
      'Capacité limitée',
      'Hiver problématique'
    ],
    equipment: ['Backpack', 'Badge', 'Phone', 'Weather gear'],
    equipmentCost: 50,
    maintenanceCost: 0,
    trainingHours: 2,
    idealWeather: ['sunny', 'cloudy', 'light_rain'],
    idealTimeOfDay: ['morning', 'afternoon'],
    yearlyPayroll: 500000,
    scaling: {
      year1: 50,
      year2: 150,
      year3: 300
    }
  },

  {
    id: 'ebike',
    name: 'Vélo Électrique',
    emoji: '🚴‍♂️',
    icon: 'Bike',
    description: 'Livraison urbaine rapide, écologique, distances intermédiaires',
    maxDistance: 5,
    maxWeight: 15,
    deliveryTime: '12-20 min',
    costPerDelivery: 1.50,
    carbonPerDelivery: 0. 2,
    profitPerDelivery: 2.49,
    avgOrdersPerHour: 12,
    avgSpeedKmh: 20,
    range: [1. 5, 5],
    targetRecruits: 200,
    baseHourlyRate: 18,
    maxHourlyRate: 25,
    advantages: [
      'Quasi CO2 zéro',
      'Rapide',
      'Flexible',
      'Santé',
      'Parking facile',
      'Scalable',
      'Fun to ride'
    ],
    limitations: [
      'Météo limite',
      'Distance max 5km',
      'Batterie recharge',
      'Maintenance',
      'Weather sensitive',
      'Hiver difficile'
    ],
    equipment: ['E-bike', 'Cargo box', 'Badge', 'Phone', 'Helmet'],
    equipmentCost: 2500,
    maintenanceCost: 120,
    batteryReplacementCost: 400,
    trainingHours: 4,
    idealWeather: ['sunny', 'cloudy'],
    idealTimeOfDay: ['all'],
    yearlyPayroll: 1200000,
    scaling: {
      year1: 30,
      year2: 100,
      year3: 200
    },
    bikeSpecs: {
      model: 'Cargo E-bike (2-3 wheel)',
      cost: 2500,
      range: '50-60 km per charge',
      batteryLife: '8-10 hour delivery',
      warranty: '2 years',
      lifespan: 5
    }
  },

  {
    id: 'car',
    name: 'Voiture/Van',
    emoji: '🚗',
    icon: 'Car',
    description: 'Livraison longue distance, gros volumes, tous temps',
    maxDistance: 20,
    maxWeight: 50,
    deliveryTime: '8-15 min',
    costPerDelivery: 3.50,
    carbonPerDelivery: 2.5,
    profitPerDelivery: 0.49,
    avgOrdersPerHour: 5,
    avgSpeedKmh: 40,
    range: [5, 20],
    targetRecruits: 50,
    baseHourlyRate: 18,
    maxHourlyRate: 40,
    advantages: [
      'Distance max',
      'Capacité grande',
      'Tous temps',
      'Rapide',
      'Routier possible',
      'Professionnel'
    ],
    limitations: [
      'CO2 élevé',
      'Cher',
      'Parking',
      'Essence',
      'Maintenance',
      'Traffic dependent'
    ],
    equipment: ['Van', 'Insurance', 'GPS', 'Phone'],
    equipmentCost: 15000,
    maintenanceCost: 1000,
    fuelCost: 3500,
    insuranceCost: 1200,
    trainingHours: 8,
    idealWeather: ['all'],
    idealTimeOfDay: ['all'],
    yearlyPayroll: 2500000,
    scaling: {
      year1: 10,
      year2: 30,
      year3: 50
    },
    vanSpecs: {
      model: 'Used mini van / cargo van',
      cost: 15000,
      lifespan: 5,
      annualDepreciation: 3000,
      kmPerYear: 12000,
      fuelEfficiency: 0.15 // $ per km
    }
  }
];

export const modeRanges = {
  walk: { min: 0, max: 1.5 },
  ebike: { min: 1. 5, max: 5 },
  car: { min: 5, max: 20 }
};

export const totalTargetRecruits = {
  year1: { walk: 50, ebike: 30, car: 10, total: 90 },
  year2: { walk: 150, ebike: 100, car: 30, total: 280 },
  year3: { walk: 300, ebike: 200, car: 50, total: 550 }
};

export const profitComparison = {
  before: {
    scenario: 'Current (100% Voiture)',
    costPerDelivery: 3. 50,
    revenuePerDelivery: 3.99,
    profitPerDelivery: 0.49,
    utilization: 0.60,
    description: 'All deliveries by car'
  },
  after: {
    scenario: 'Multi-modal (Eco)',
    costPerDelivery: 1.77,
    revenuePerDelivery: 3.99,
    profitPerDelivery: 2.22,
    utilization: 0.95,
    description: '35% walk + 45% ebike + 20% car'
  },
  optimized: {
    scenario: 'Fully Optimized (Best)',
    costPerDelivery: 1.45,
    revenuePerDelivery: 4.50,
    profitPerDelivery: 3.05,
    utilization: 0.98,
    description: 'With surge pricing + volume discounts'
  }
};

export const environmentalImpact = {
  year1: {
    deliveries: 5000,
    avgCO2: 2.0,
    totalCO2: 10000,
    treesNeeded: 100
  },
  year2: {
    deliveries: 500000,
    avgCO2: 1.1,
    totalCO2: 550000,
    treesNeeded: 5500
  },
  year3: {
    deliveries: 6000000,
    avgCO2: 0.85,
    totalCO2: 5100000,
    treesNeeded: 51000
  }
};