import { 
  cake2, 
  plainCake, 
  cakeSlices, 
  meatPie, 
  samuso, 
  plainScones,
  decoratedCupcakes,
  // plainCupcakes,
  smokedFish,
  sevenInchCake,
  plainCake2,
  plainCupcakesOriginal
} from './assets';

// Helper to handle image formats (prefer webp if available in future)
const getOptimizedImage = (img) => img;

export const allProducts = [
  {
    name: "Decorated Cakes (6 Inch)",
    category: "Cakes",
    price: "From K230",
    image: getOptimizedImage(sevenInchCake),
    description: "Creamed cakes: 1 Layer K230, 2 Layers K330, 3 Layers K430. Perfect for small celebrations.",
    color: "from-pink-100 to-rose-50"
  },
  {
    name: "Decorated Cakes (7 Inch)",
    category: "Cakes",
    price: "From K250",
    image: getOptimizedImage(cake2),
    description: "Creamed cakes: 1 Layer K250, 2 Layers K350, 3 Layers K450. The standard size for parties.",
    color: "from-yellow-100 to-amber-50"
  },
  {
    name: "Decorated Cakes (8 Inch)",
    category: "Cakes",
    price: "From K450",
    image: getOptimizedImage(cake3),
    description: "Creamed cakes: 2 Layers K450, 3 Layers K550. Large cakes for grand occasions.",
    color: "from-blue-100 to-indigo-50"
  },
  {
    name: "Plain Cakes (6 Inch)",
    category: "Cakes",
    price: "K150",
    image: getOptimizedImage(plainCake),
    description: "Classic 6-inch cake without cream. Simple yet divine.",
    color: "from-orange-100 to-amber-50"
  },
  {
    name: "Plain Cakes (7 Inch)",
    category: "Cakes",
    price: "K170",
    image: getOptimizedImage(plainCake2),
    description: "Classic 7-inch cake without cream. Perfect for tea time.",
    color: "from-orange-100 to-amber-50"
  },
  {
    name: "Cake Slices",
    category: "Treats",
    price: "K60/slice",
    image: getOptimizedImage(cakeSlices),
    description: "Perfect for a quick sweet fix. Available in various flavors daily.",
    color: "from-yellow-100 to-orange-50"
  },
  {
    name: "Decorated Cupcakes",
    category: "Cupcakes",
    price: "K150 (Box of 6)",
    image: getOptimizedImage(decoratedCupcakes),
    description: "Stunning designs in a box. Box of 6 for K150, Box of 12 for K300.",
    color: "from-purple-100 to-fuchsia-50"
  },
  {
    name: "Plain Cupcakes",
    category: "Cupcakes",
    price: "K8/each",
    image: getOptimizedImage(plainCupcakesOriginal),
    description: "Soft, fluffy cupcakes that melt in your mouth.",
    color: "from-blue-100 to-sky-50"
  },
  {
    name: "Meat Pies",
    category: "Savory",
    price: "K20 - K35",
    image: getOptimizedImage(meatPie),
    description: "Golden flaky pastry. Mini pies K20, Big pies K35.",
    color: "from-red-100 to-orange-50"
  },
  {
    name: "Samosas",
    category: "Savory",
    price: "K80 (for 10)",
    image: getOptimizedImage(samuso),
    description: "Crispy triangular pockets of spicy goodness. Sold in packs of 10.",
    color: "from-emerald-100 to-teal-50"
  },
  {
    name: "Milk Scones",
    category: "Scones",
    price: "K5",
    image: getOptimizedImage(plainScones),
    description: "Rich, buttery scones perfect for tea time.",
    color: "from-amber-100 to-yellow-50"
  },
  {
    name: "Smoked Fish",
    category: "Smoked",
    price: "K100 (Labor)",
    image: getOptimizedImage(smokedFish),
    description: "Expertly smoked fish. Price is for labor per batch of 4.",
    color: "from-stone-200 to-gray-100"
  }
];
