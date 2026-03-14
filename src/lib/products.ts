export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  profitMargin: string;
  trending: boolean;
}

export function generateProducts(count: number): Product[] {
  const categories = ["Tech", "Home", "Fashion", "Beauty", "Fitness"];
  const imageKeywords = ["gadget", "watch", "perfume", "sneakers", "headphones", "lamp", "skincare", "dumbbells"];
  
  return Array.from({ length: count }).map((_, i) => {
    const costPrice = Math.floor(Math.random() * 50) + 10;
    const markup = Math.floor(Math.random() * 3) + 2; // 2x to 5x markup
    const price = costPrice * markup;
    const originalPrice = price * 1.5;
    const profit = price - costPrice;
    const keyword = imageKeywords[i % imageKeywords.length];

    return {
      id: `prod_${i + 1}`,
      name: `Premium ${keyword.charAt(0).toUpperCase() + keyword.slice(1)} ${Math.floor(Math.random() * 1000)}`,
      price: Number(price.toFixed(2)),
      originalPrice: Number(originalPrice.toFixed(2)),
      image: `https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`, // Reliable generic product image
      category: categories[Math.floor(Math.random() * categories.length)],
      profitMargin: `+$${profit.toFixed(2)} Profit`,
      trending: Math.random() > 0.5,
    };
  });
}

export const featuredProducts = generateProducts(8);
