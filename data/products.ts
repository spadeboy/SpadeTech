export interface Product {
    id: string;
    name: string;
    price: number;
    tag: string;
    description: string;
    image?: string;
    specs?: string;
    stock?: number;
    rating?: number;
}

export const products: Product[] = [
    {
        id: "p1",
        name: "CYBERBANK 20K",
        price: 89.00,
        tag: "POWER",
        description: "20,000mAh Transparent Power Bank. IPS Display. 130W Output.",
    },
    {
        id: "p2",
        name: "MECHA BUDS PRO",
        price: 149.00,
        tag: "AUDIO",
        description: "Transparent ANC Earbuds. 45dB Noise Cancellation. RGB Case.",
    },
    {
        id: "p3",
        name: "GRAVITY MOUNT",
        price: 49.00,
        tag: "ACCESSORY",
        description: "Magnetic Floating Phone Mount. Zinc Alloy. Cyberpunk Finish.",
    },
    {
        id: "p4",
        name: "FLUX CABLE",
        price: 29.00,
        tag: "CONNECT",
        description: "LED Power Display Cable. USB-C to USB-C. 100W PD.",
    },
    {
        id: "p5",
        name: "QUANTUM GAUNTLET",
        price: 299.00,
        tag: "WEARABLE",
        description: "Programmable LED Wrist Display. Health Tracking. Haptic Feedback.",
    },
    {
        id: "p6",
        name: "NEON MAT",
        price: 39.00,
        tag: "WORKSPACE",
        description: "RGB Edge Lit Desk Mat. Micro-textured Surface. Anti-slip Base.",
    }
];
