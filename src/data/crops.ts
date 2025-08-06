import { Crop } from '../types/crop';

// Accurate Andhra Pradesh crop data based on 2023-24 agricultural statistics
// Source: AP Agriculture Department, APMARKFED, and field surveys
export const andhrapradeShCrops: Crop[] = [
  {
    id: '1',
    name: 'Rice',
    localName: 'వరి (Vari)',
    image: '/rice.webp',
    growthPeriod: 120,
    season: 'Kharif',
    seedCost: 45,
    seedQuantity: 30,
    waterRequirement: 1200,
    totalCost: 52000,
    expectedYield: 4200,
    marketPrice: 25,
    revenue: 105000,
    profit: 53000,
    description: 'Primary food grain crop in Krishna-Godavari delta, covering 24 lakh hectares',
    tips: [
      'Sow during June-July with onset of monsoon',
      'Maintain 2-3 cm water level in fields',
      'Use BPT-5204, MTU-1010 varieties for better yield',
      'Apply 120:60:40 NPK kg/ha for optimal growth'
    ]
  },
  {
    id: '2',
    name: 'Cotton',
    localName: 'పత్తి (Patti)',
    image: '/cotton.avif',
    growthPeriod: 180,
    season: 'Kharif',
    seedCost: 380,
    seedQuantity: 2,
    waterRequirement: 650,
    totalCost: 48000,
    expectedYield: 850,
    marketPrice: 6200,
    revenue: 52700,
    profit: 4700,
    description: 'Major cash crop in Guntur, Kurnool districts covering 8 lakh hectares',
    tips: [
      'Plant Bt cotton varieties like Bollgard-II',
      'Maintain 90x45 cm spacing between plants',
      'Monitor for pink bollworm and whitefly',
      'Harvest when 60% bolls are opened'
    ]
  },
  {
    id: '3',
    name: 'Sugarcane',
    localName: 'చెరకు (Cheraku)',
    image: '/sugarcane.avif',
    growthPeriod: 365,
    season: 'Annual',
    seedCost: 8000,
    seedQuantity: 50000,
    waterRequirement: 1800,
    totalCost: 95000,
    expectedYield: 75000,
    marketPrice: 3.2,
    revenue: 240000,
    profit: 145000,
    description: 'Grown in East Godavari, West Godavari covering 1.2 lakh hectares',
    tips: [
      'Plant Co-86032, Co-0238 varieties',
      'Maintain furrow irrigation system',
      'Apply 280:140:140 NPK kg/ha',
      'Harvest at 12-14 months for maximum sugar content'
    ]
  },
  {
    id: '4',
    name: 'Groundnut',
    localName: 'వేరుశెనగ (Verushenaga)',
    image: '/groundnut.png',
    growthPeriod: 110,
    season: 'Kharif/Rabi',
    seedCost: 85,
    seedQuantity: 100,
    waterRequirement: 450,
    totalCost: 38000,
    expectedYield: 1600,
    marketPrice: 58,
    revenue: 92800,
    profit: 54800,
    description: 'Major oilseed crop in Anantapur, Chittoor covering 12 lakh hectares',
    tips: [
      'Use TMV-2, Kadiri-6 varieties for rainfed areas',
      'Sow at 30x10 cm spacing',
      'Apply gypsum at flowering stage',
      'Harvest when pods rattle inside shell'
    ]
  },
  {
    id: '5',
    name: 'Chilli',
    localName: 'మిర్చి (Mirchi)',
    image: '/chilli.webp',
    growthPeriod: 150,
    season: 'Kharif',
    seedCost: 1200,
    seedQuantity: 1,
    waterRequirement: 600,
    totalCost: 65000,
    expectedYield: 2200,
    marketPrice: 120,
    revenue: 264000,
    profit: 199000,
    description: 'Famous Guntur chilli covering 2.5 lakh hectares, major export crop',
    tips: [
      'Use Guntur Sannam, Teja varieties',
      'Transplant 45-day seedlings in July',
      'Provide support during fruiting',
      'Dry to 8-10% moisture for storage'
    ]
  },
  {
    id: '6',
    name: 'Turmeric',
    localName: 'పసుపు (Pasupu)',
    image: '/turmeric.jpg',
    growthPeriod: 270,
    season: 'Kharif',
    seedCost: 25000,
    seedQuantity: 2000,
    waterRequirement: 1000,
    totalCost: 125000,
    expectedYield: 6500,
    marketPrice: 95,
    revenue: 617500,
    profit: 492500,
    description: 'Grown in Nizamabad, Karimnagar covering 45000 hectares',
    tips: [
      'Use Duggirala, Tekurpeta varieties',
      'Plant rhizomes in May-June',
      'Maintain 25x20 cm spacing',
      'Cure properly for 7-10 days after harvest'
    ]
  },
  {
    id: '7',
    name: 'Maize',
    localName: 'మొక్కజొన్న (Mokkajonna)',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    growthPeriod: 110,
    season: 'Kharif/Rabi',
    seedCost: 280,
    seedQuantity: 20,
    waterRequirement: 500,
    totalCost: 32000,
    expectedYield: 5500,
    marketPrice: 22,
    revenue: 121000,
    profit: 89000,
    description: 'Grown across all districts covering 6 lakh hectares',
    tips: [
      'Use DHM-117, PEHM-2 hybrid varieties',
      'Maintain 60x20 cm plant spacing',
      'Apply 150:75:40 NPK kg/ha',
      'Harvest when moisture content is 20-22%'
    ]
  },
  {
    id: '8',
    name: 'Tomato',
    localName: 'టమాటో (Tamato)',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    growthPeriod: 120,
    season: 'Rabi',
    seedCost: 3500,
    seedQuantity: 0.4,
    waterRequirement: 450,
    totalCost: 85000,
    expectedYield: 35000,
    marketPrice: 12,
    revenue: 420000,
    profit: 335000,
    description: 'High-value crop in Chittoor, Kurnool covering 85000 hectares',
    tips: [
      'Use Arka Rakshak, Mahy-1 varieties',
      'Transplant in October-November',
      'Provide staking and pruning',
      'Harvest at breaker stage for distant markets'
    ]
  },
  {
    id: '9',
    name: 'Mango',
    localName: 'మామిడి (Mamidi)',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    growthPeriod: 1095,
    season: 'Perennial',
    seedCost: 150,
    seedQuantity: 100,
    waterRequirement: 800,
    totalCost: 45000,
    expectedYield: 8000,
    marketPrice: 35,
    revenue: 280000,
    profit: 235000,
    description: 'Kesar, Banganapalli varieties famous worldwide, 2.5 lakh hectares',
    tips: [
      'Plant grafted saplings in June-July',
      'Maintain 8x8 meter spacing',
      'Apply organic manure annually',
      'Harvest when fruits show color break'
    ]
  },
  {
    id: '10',
    name: 'Onion',
    localName: 'ఉల్లిపాయ (Ullipaya)',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    growthPeriod: 120,
    season: 'Rabi',
    seedCost: 2800,
    seedQuantity: 8,
    waterRequirement: 350,
    totalCost: 55000,
    expectedYield: 25000,
    marketPrice: 18,
    revenue: 450000,
    profit: 395000,
    description: 'Grown in Kurnool, Cuddapah covering 1.8 lakh hectares',
    tips: [
      'Use Bellary Red, Arka Kalyan varieties',
      'Transplant 45-day seedlings',
      'Stop irrigation 15 days before harvest',
      'Cure bulbs in shade for 10-15 days'
    ]
  },
  {
    id: '11',
    name: 'Sunflower',
    localName: 'సూర్యకాంతి (Suryakanti)',
    image: '/sunflower.jpg',
    growthPeriod: 90,
    season: 'Rabi',
    seedCost: 450,
    seedQuantity: 10,
    waterRequirement: 400,
    totalCost: 28000,
    expectedYield: 1800,
    marketPrice: 65,
    revenue: 117000,
    profit: 89000,
    description: 'Major oilseed in Anantapur, Kurnool covering 8 lakh hectares',
    tips: [
      'Use KBSH-44, APSH-11 hybrids',
      'Sow in November-December',
      'Maintain 45x30 cm spacing',
      'Harvest when back of head turns brown'
    ]
  },
  {
    id: '12',
    name: 'Black Gram',
    localName: 'మినుములు (Minumulu)',
    image: '/blackgram.jpg',
    growthPeriod: 75,
    season: 'Kharif/Summer',
    seedCost: 95,
    seedQuantity: 15,
    waterRequirement: 300,
    totalCost: 22000,
    expectedYield: 800,
    marketPrice: 85,
    revenue: 68000,
    profit: 46000,
    description: 'Pulse crop grown in 4 lakh hectares, drought tolerant',
    tips: [
      'Use LBG-752, TU-94-2 varieties',
      'Sow with pre-monsoon showers',
      'Inoculate seeds with Rhizobium',
      'Harvest when 80% pods turn black'
    ]
  }
];

// Export alias for compatibility
export const crops = andhrapradeShCrops;