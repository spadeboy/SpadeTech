export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  trending: boolean;
  description: string;
}

export const generatedProducts: Product[] = [
  {
    id: "prod_1",
    name: "Aura LED Desk Lamp",
    price: 49.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1534086438349-14a5ae9ec1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    trending: true,
    description: "Sleek and minimalist LED desk lamp with adjustable brightness and color temperature."
  },
  {
    id: "prod_2",
    name: "Lumina Smart Watch Pro",
    price: 129.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tech",
    trending: true,
    description: "Track your fitness, heart rate, and notifications with this premium smartwatch."
  },
  {
    id: "prod_3",
    name: "Minimalist Leather Backpack",
    price: 79.99,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Fashion",
    trending: false,
    description: "Premium vegan leather backpack ideal for daily commute or weekend getaways."
  },
  {
    id: "prod_4",
    name: "Ceramic Pour-Over Coffee Maker",
    price: 34.50,
    originalPrice: 50.00,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    trending: true,
    description: "Brew the perfect cup every morning with this elegant ceramic dripper."
  },
  {
    id: "prod_5",
    name: "Noir Wireless Earbuds",
    price: 59.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3eae891ea20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tech",
    trending: true,
    description: "Active noise cancellation and 24-hour battery life."
  },
  {
    id: "prod_6",
    name: "Silk Sleep Mask & Pillowcase Set",
    price: 45.00,
    originalPrice: 65.00,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Beauty",
    trending: false,
    description: "100% pure mulberry silk for the best beauty sleep."
  },
  {
    id: "prod_7",
    name: "Ergonomic Laptop Stand",
    price: 42.99,
    originalPrice: 60.00,
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tech",
    trending: true,
    description: "Adjustable aluminum stand for better posture and cooling."
  },
  {
    id: "prod_8",
    name: "Essential Oil Diffuser",
    price: 29.99,
    originalPrice: 45.00,
    image: "https://images.unsplash.com/photo-1608528577891-eb055740fbee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    trending: false,
    description: "Ultrasonic humidifier and aromatherapy diffuser with ambient lighting."
  },
  {
    id: "prod_9",
    name: "Adjustable Dumbbell Set",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    trending: true,
    description: "Space-saving design that replaces 15 sets of weights."
  },
  {
    id: "prod_10",
    name: "Vitamin C Sunrise Serum",
    price: 38.00,
    originalPrice: 55.00,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Beauty",
    trending: true,
    description: "Brightening antioxidant serum for glowing skin."
  },
  {
    id: "prod_11",
    name: "Polarized Aviator Sunglasses",
    price: 24.99,
    originalPrice: 40.00,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Fashion",
    trending: false,
    description: "Classic design with UV400 protection."
  },
  {
    id: "prod_12",
    name: "Portable Power Bank 20000mAh",
    price: 49.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tech",
    trending: true,
    description: "Fast-charging high capacity battery pack."
  },
  {
    id: "prod_13",
    name: "Luxury Thread Count Sheets",
    price: 89.99,
    originalPrice: 150.00,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    trending: false,
    description: "Breathable, hotel-quality cotton sateen sheet set."
  },
  {
    id: "prod_14",
    name: "Smart Body Fat Scale",
    price: 35.99,
    originalPrice: 60.00,
    image: "https://images.unsplash.com/photo-1579483320299-fb9279add91c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    trending: true,
    description: "Bluetooth scale with smartphone app integration."
  },
  {
    id: "prod_15",
    name: "Matte Black Mechanical Keyboard",
    price: 110.00,
    originalPrice: 160.00,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tech",
    trending: true,
    description: "Wireless mechanical keyboard with tactile switches."
  },
  {
    id: "prod_16",
    name: "Rose Quartz Face Roller",
    price: 18.50,
    originalPrice: 30.00,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Beauty",
    trending: false,
    description: "Natural cooling stone roller for daily massage."
  }
];

export const featuredProducts = generatedProducts.slice(0, 8);

export function generateProducts(count: number): Product[] {
  // Return the static catalog instead of generating random ones.
  // If count is larger than generatedProducts, just repeat them to satisfy the API.
  let results: Product[] = [];
  while (results.length < count) {
    results = [...results, ...generatedProducts];
  }
  return results.slice(0, count);
}

