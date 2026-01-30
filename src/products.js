import { 
  cake2, 
  plainCake, 
  cakeSlices, 
  meatPie, 
  samuso, 
  plainScones,
  decoratedCupcakes,
  plainCupcakes,
  smokedFish,
  sevenInchCake,
  plainCake2
} from './assets';

// Helper to handle image formats (prefer webp if available in future)
const getOptimizedImage = (img) => img;

export const allProducts = [
  {
    name: "Decorated Cakes",
    category: "Cakes",
    price: "Custom",
    image: getOptimizedImage(cake2),
    description: "Exquisite designs for your special celebrations. Hand-crafted with precision.",
    color: "from-pink-100 to-rose-50"
  },
  {
    name: "Plain Cakes",
    category: "Cakes",
    price: "From K20,000",
    image: getOptimizedImage(plainCake),
    description: "Classic vanilla, chocolate, and red velvet cakes. Simple yet divine.",
    color: "from-orange-100 to-amber-50"
  },
  {
    name: "7 Inch Custom Cake",
    category: "Cakes",
    price: "K25,000",
    image: getOptimizedImage(sevenInchCake),
    description: "Perfectly sized custom cakes for small gatherings.",
    color: "from-yellow-100 to-amber-50"
  },
  {
    name: "Vanilla Dream Cake",
    category: "Cakes",
    price: "K22,000",
    image: getOptimizedImage(plainCake2),
    description: "Double layered moist vanilla cake with creamy frosting.",
    color: "from-blue-100 to-indigo-50"
  },
  {
    name: "Cake Slices",
    category: "Treats",
    price: "K5,000/slice",
    image: getOptimizedImage(cakeSlices),
    description: "Perfect for a quick sweet fix. Available in various flavors daily.",
    color: "from-yellow-100 to-orange-50"
  },
  {
    name: "Decorated Cupcakes",
    category: "Cupcakes",
    price: "K3,500",
    image: getOptimizedImage(decoratedCupcakes),
    description: "Bite-sized happiness with stunning frosting designs.",
    color: "from-purple-100 to-fuchsia-50"
  },
  {
    name: "Plain Cupcakes",
    category: "Cupcakes",
    price: "K2,500",
    image: getOptimizedImage(plainCupcakes),
    description: "Soft, fluffy cupcakes that melt in your mouth.",
    color: "from-blue-100 to-sky-50"
  },
  {
    name: "Meat Pies",
    category: "Savory",
    price: "K4,000",
    image: getOptimizedImage(meatPie),
    description: "Golden flaky pastry filled with seasoned chicken or beef.",
    color: "from-red-100 to-orange-50"
  },
  {
    name: "Samosas",
    category: "Savory",
    price: "K1,500",
    image: getOptimizedImage(samuso),
    description: "Crispy triangular pockets of spicy goodness.",
    color: "from-emerald-100 to-teal-50"
  },
  {
    name: "Milk Scones",
    category: "Scones",
    price: "K2,000",
    image: getOptimizedImage(plainScones),
    description: "Rich, buttery scones perfect for tea time.",
    color: "from-amber-100 to-yellow-50"
  },
  {
    name: "Smoked Fish",
    category: "Smoked",
    price: "K15,000",
    image: getOptimizedImage(smokedFish),
    description: "Perfectly seasoned and smoked fish, a local favorite.",
    color: "from-stone-200 to-gray-100"
  }
];
