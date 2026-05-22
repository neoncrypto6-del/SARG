export interface NutritionItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  image: string;
  glowColor: string;
  description: string;
  longDescription: string;
  sizes: string[];
  features: string[];
  ingredients: string[];
  nutrition: NutritionItem[];
  bestFor: string[];
}

export const products: Product[] = [
{
  id: 'table-water',
  name: 'Avina Table Water',
  shortName: 'Table Water',
  tagline: 'Pure Hydration',
  category: 'Water',
  image: "/Sarg_Water.png",

  glowColor: '#4FC3E0',
  description:
  'Crystal-clear, naturally sourced table water bottled at peak purity for everyday hydration.',
  longDescription:
  'Avina Table Water is drawn from carefully protected sources and passed through a multi-stage filtration system to deliver water that is exceptionally clean, balanced, and refreshing. Every bottle meets the highest international quality standards, giving families, restaurants, and offices a trusted choice for daily hydration.',
  sizes: ['50cl', '75cl', '1.5L'],
  features: [
  'Multi-stage filtration',
  'Balanced mineral content',
  'BPA-free bottle',
  'Sealed for freshness'],

  ingredients: ['100% Purified Water'],
  nutrition: [
  { label: 'Energy', value: '0 kcal' },
  { label: 'Sodium', value: '< 5 mg' },
  { label: 'Total Sugars', value: '0 g' },
  { label: 'pH', value: '7.0 – 7.4' }],

  bestFor: [
  'Daily hydration',
  'Sports & fitness',
  'Family meals',
  'Hospitality']

},
{
  id: 'orange-juice',
  name: 'Avina Orange Juice',
  shortName: 'Orange Juice',
  tagline: 'Vitamin Boost',
  category: 'Juice',
  image: "/sarg_7-Photoroom.png",

  glowColor: '#FF8C42',
  description:
  'Sun-ripened oranges pressed into a bright, naturally sweet juice packed with everyday vitamin C.',
  longDescription:
  'Made from carefully selected oranges, Avina Orange Juice delivers the vibrant taste of freshly squeezed fruit with a balanced sweetness. Each bottle is a refreshing source of vitamin C and natural energy — perfect for breakfast, on the go, or any moment that needs a sunny lift.',
  sizes: ['450ml', '1L'],
  features: [
  'Real orange goodness',
  'Rich in vitamin C',
  'No artificial colors',
  'Resealable carton'],

  ingredients: [
  'Water',
  'Orange Juice (10%)',
  'Sugar',
  'Citric Acid',
  'Stabilizer (Pectin)',
  'Vitamin C',
  'Natural Orange Flavor'],

  nutrition: [
  { label: 'Energy', value: '120 kcal' },
  { label: 'Total Sugars', value: '24 g' },
  { label: 'Vitamin C', value: '60% DV' },
  { label: 'Sodium', value: '15 mg' }],

  bestFor: [
  'Breakfast',
  'On-the-go energy',
  'School lunches',
  'Family fridge staple']

},
{
  id: 'orange-juice-slim',
  name: 'Avina Orange Juice (Slim)',
  shortName: 'Orange Juice Slim',
  tagline: 'Grab & Go Citrus',
  category: 'Juice',
  image: "/Sarg_8-Photoroom.png",

  glowColor: '#FFA94D',
  description:
  'The same sun-ripened orange goodness in a slim, single-serve bottle — designed for life on the move.',
  longDescription:
  'Avina Orange Juice (Slim) delivers the bright, naturally sweet taste of real oranges in a sleek, easy-to-carry bottle. Crafted for busy mornings, gym bags, and lunchboxes, it brings a refreshing burst of vitamin C wherever the day takes you — no compromise on flavor, just a smarter format.',
  sizes: ['450ml'],
  features: [
  'Slim grab-and-go bottle',
  'Rich in vitamin C',
  'No artificial colors',
  'Resealable cap'],

  ingredients: [
  'Water',
  'Orange Juice (10%)',
  'Sugar',
  'Citric Acid',
  'Stabilizer (Pectin)',
  'Vitamin C',
  'Natural Orange Flavor'],

  nutrition: [
  { label: 'Energy', value: '110 kcal' },
  { label: 'Total Sugars', value: '22 g' },
  { label: 'Vitamin C', value: '60% DV' },
  { label: 'Sodium', value: '15 mg' }],

  bestFor: ['Commuting', 'Gym bag', 'Lunchboxes', 'Quick refreshment']
},
{
  id: 'almond-coconut',
  name: 'Avina Almond Milk Coconut',
  shortName: 'Almond Coconut',
  tagline: 'Plant-Based Energy',
  category: 'Plant Milk',
  image: "/Sarg_6-Photoroom.png",

  glowColor: '#4CAF50',
  description:
  'Creamy almond milk blended with tropical coconut for a smooth, plant-powered drink with 50% more calcium.',
  longDescription:
  'A lush plant-based blend of premium almonds and tropical coconut, crafted for those who choose lighter, dairy-free nutrition without compromising on taste. Fortified with calcium and naturally lactose-free, it is perfect on its own, in coffee, or poured over breakfast bowls.',
  sizes: ['1L'],
  features: [
  '50% more calcium',
  'Dairy-free & lactose-free',
  'Plant-based protein',
  'No artificial sweeteners'],

  ingredients: [
  'Water',
  'Almond (3%)',
  'Coconut Cream (2%)',
  'Sugar',
  'Calcium Carbonate',
  'Sea Salt',
  'Natural Flavors',
  'Vitamin D & B12'],

  nutrition: [
  { label: 'Energy', value: '90 kcal' },
  { label: 'Protein', value: '2 g' },
  { label: 'Calcium', value: '450 mg' },
  { label: 'Fat', value: '3.5 g' }],

  bestFor: [
  'Vegan diets',
  'Lactose-free lifestyles',
  'Smoothies',
  'Coffee & cereals']

},
{
  id: 'almond-chocolate',
  name: 'Avina Almond Chocolate Milk',
  shortName: 'Almond Chocolate',
  tagline: 'Rich & Nourishing',
  category: 'Plant Milk',
  image: "/Sarg_5-Photoroom.png",

  glowColor: '#8B5A3C',
  description:
  'Rich cocoa swirled into creamy almond milk for an indulgent, dairy-free treat with 50% more calcium.',
  longDescription:
  'Avina Almond Chocolate Milk is a velvety blend of roasted almonds and real cocoa — a plant-based indulgence that tastes as good as it makes you feel. Naturally dairy-free and fortified with calcium, it is the perfect after-school, post-workout, or anytime treat.',
  sizes: ['1L'],
  features: [
  '50% more calcium',
  'Real cocoa',
  'Dairy-free & lactose-free',
  'No artificial colors'],

  ingredients: [
  'Water',
  'Almond (3%)',
  'Cocoa Powder (2%)',
  'Sugar',
  'Calcium Carbonate',
  'Stabilizers',
  'Sea Salt',
  'Vitamin D & B12'],

  nutrition: [
  { label: 'Energy', value: '140 kcal' },
  { label: 'Protein', value: '3 g' },
  { label: 'Calcium', value: '450 mg' },
  { label: 'Fat', value: '4 g' }],

  bestFor: [
  'After-school snacks',
  'Post-workout',
  'Plant-based diets',
  'Indulgent treats']

},
{
  id: 'chocolate-milk',
  name: 'Avina Chocolate Milk',
  shortName: 'Chocolate Milk',
  tagline: 'Indulgent Goodness',
  category: 'Dairy',
  image: "/Sarg_2-Photoroom.png",

  glowColor: '#6B4423',
  description:
  'Smooth, chilled chocolate milk made with real cocoa — pure indulgence in every sip.',
  longDescription:
  'Crafted with real cocoa and a creamy milk base, Avina Chocolate Milk delivers café-grade indulgence in a convenient, ready-to-drink bottle. A timeless favorite for kids and adults alike — perfect chilled, on the go, or as a comforting end to your day.',
  sizes: ['350ml'],
  features: [
  'Real cocoa',
  'Ready to drink',
  'Source of calcium',
  'Resealable bottle'],

  ingredients: [
  'Milk',
  'Sugar',
  'Cocoa Powder (1.5%)',
  'Stabilizers (Carrageenan)',
  'Salt',
  'Natural Flavors'],

  nutrition: [
  { label: 'Energy', value: '160 kcal' },
  { label: 'Protein', value: '6 g' },
  { label: 'Calcium', value: '280 mg' },
  { label: 'Fat', value: '5 g' }],

  bestFor: [
  'School lunchboxes',
  'Quick breakfasts',
  'On-the-go indulgence',
  'Dessert pairing']

},
{
  id: 'soya-milk',
  name: 'Avina Soya Milk',
  shortName: 'Soya Milk',
  tagline: 'Naturally Organic',
  category: 'Plant Milk',
  image: "/Sarg_3-Photoroom.png",

  glowColor: '#FFB800',
  description:
  'A 100% organic, naturally mixed soya drink — clean plant protein in a smooth, easy-drinking bottle.',
  longDescription:
  'Avina Soya Milk is made from carefully selected organic soya beans for a smooth, naturally creamy plant-based drink. Rich in plant protein and free from artificial additives, it is a wholesome choice for health-conscious lifestyles, vegans, and anyone seeking a lighter alternative to dairy.',
  sizes: ['350ml'],
  features: [
  '100% organic',
  'Plant-based protein',
  'No artificial flavors',
  'Lactose-free'],

  ingredients: [
  'Water',
  'Organic Soya Beans (8%)',
  'Sugar',
  'Calcium Carbonate',
  'Sea Salt',
  'Natural Flavors',
  'Vitamin D & B12'],

  nutrition: [
  { label: 'Energy', value: '110 kcal' },
  { label: 'Protein', value: '6 g' },
  { label: 'Calcium', value: '300 mg' },
  { label: 'Fat', value: '3 g' }],

  bestFor: [
  'Vegan diets',
  'Lactose intolerance',
  'High-protein needs',
  'Daily wellness']

},
{
  id: 'hydration-original',
  name: 'Avina Plus Hydration Original',
  shortName: 'Plus Original',
  tagline: 'Replenish & Restore',
  category: 'Hydration',
  image: "/Sarg_4-Photoroom.png",

  glowColor: '#8BA3B8',
  description:
  'Coconut water blended with natural mixed fruits and electrolytes for advanced everyday hydration.',
  longDescription:
  'Avina Plus Hydration Original combines real coconut water with a balanced blend of electrolytes and naturally mixed fruit flavors. Designed for active lifestyles, it replenishes what you lose through movement and heat — without artificial colors or excess sugar.',
  sizes: ['450ml'],
  features: [
  'Real coconut water',
  'Electrolyte blend',
  'No artificial colors',
  'Light & refreshing'],

  ingredients: [
  'Coconut Water',
  'Natural Mixed Fruit Juice',
  'Sugar',
  'Citric Acid',
  'Sodium Citrate',
  'Potassium Chloride',
  'Magnesium'],

  nutrition: [
  { label: 'Energy', value: '60 kcal' },
  { label: 'Sodium', value: '180 mg' },
  { label: 'Potassium', value: '210 mg' },
  { label: 'Total Sugars', value: '14 g' }],

  bestFor: ['Workouts', 'Outdoor activity', 'Recovery', 'Travel & flights']
},
{
  id: 'hydration-cherry',
  name: 'Avina Plus Hydration Cherry',
  shortName: 'Plus Cherry',
  tagline: 'Active Energy',
  category: 'Hydration',
  image: "/Sarg_1-Photoroom.png",

  glowColor: '#E91E63',
  description:
  'Coconut water meets bold cherry and a balanced electrolyte blend — bright, energizing hydration.',
  longDescription:
  'Avina Plus Hydration Cherry brings together hydrating coconut water, natural cherry flavor, and a precise electrolyte profile to fuel active days. Vibrant in taste and lightly sweet, it is the energizing companion for workouts, training, and busy lifestyles.',
  sizes: ['450ml'],
  features: [
  'Real coconut water',
  'Natural cherry flavor',
  'Electrolyte blend',
  'Lightly sweetened'],

  ingredients: [
  'Coconut Water',
  'Natural Cherry Flavor',
  'Sugar',
  'Citric Acid',
  'Sodium Citrate',
  'Potassium Chloride',
  'Magnesium'],

  nutrition: [
  { label: 'Energy', value: '70 kcal' },
  { label: 'Sodium', value: '180 mg' },
  { label: 'Potassium', value: '210 mg' },
  { label: 'Total Sugars', value: '16 g' }],

  bestFor: [
  'High-intensity workouts',
  'Sports recovery',
  'Bold flavor lovers',
  'Active days']

}];