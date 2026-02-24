export interface Product {
    id: string;
    name: string;
    price: number;
    discountPrice?: number; // New: For sale display
    tag: string;
    description: string;
    image?: string;
    specs?: string;
    stock?: number;
    rating?: number; // New: Float 0-5
    reviews?: number; // New: Count of reviews
    isNew?: boolean; // New: Badge
    isTrending?: boolean; // New: Badge
}

export const products: Product[] = [
    {
        id: "p1",
        name: "CYBERBANK 20K",
        price: 89.00,
        discountPrice: 69.99,
        tag: "POWER",
        description: "20,000mAh Transparent Power Bank. IPS Display. 130W Output.",
        image: "https://placehold.co/600x600/101010/ffffff/png?text=CYBERBANK",
        rating: 4.8,
        reviews: 124,
        isTrending: true
    },
    {
        id: "p2",
        name: "MECHA BUDS PRO",
        price: 149.00,
        tag: "AUDIO",
        description: "Transparent ANC Earbuds. 45dB Noise Cancellation. RGB Case.",
        image: "https://placehold.co/600x600/101010/ffffff/png?text=MECHA+BUDS",
        rating: 4.6,
        reviews: 89,
        isNew: true
    },
    {
        id: "p3",
        name: "GRAVITY MOUNT",
        price: 49.00,
        tag: "ACCESSORY",
        description: "Magnetic Floating Phone Mount. Zinc Alloy. Cyberpunk Finish.",
        image: "https://placehold.co/600x600/101010/ffffff/png?text=GRAVITY+MOUNT",
        rating: 4.9,
        reviews: 210
    },
    {
        id: "p4",
        name: "FLUX CABLE",
        price: 29.00,
        discountPrice: 19.50,
        tag: "CONNECT",
        description: "LED Power Display Cable. USB-C to USB-C. 100W PD.",
        image: "https://placehold.co/600x600/101010/ffffff/png?text=FLUX+CABLE",
        rating: 4.7,
        reviews: 342,
        isTrending: true
    },
    {
        id: "p5",
        name: "QUANTUM GAUNTLET",
        price: 299.00,
        tag: "WEARABLE",
        description: "Programmable LED Wrist Display. Health Tracking. Haptic Feedback.",
        image: "https://placehold.co/600x600/101010/ffffff/png?text=QUANTUM",
        rating: 4.5,
        reviews: 56
    },
    {
        id: "p6",
        name: "NEON MAT",
        price: 39.00,
        tag: "WORKSPACE",
        description: "RGB Edge Lit Desk Mat. Micro-textured Surface. Anti-slip Base.",
        image: "https://placehold.co/600x600/101010/ffffff/png?text=NEON+MAT",
        rating: 4.8,
        reviews: 156
    }
];
