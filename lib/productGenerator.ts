import { Product } from "@/data/products";

const ADJECTIVES = ["Quantum", "Cyber", "Neural", "Haptic", "Plasma", "Zero-G", "Flux", "Neon", "Stealth", "Hyper", "Sonic", "Glitch", "Vortex", "Orbital", "Kinetic", "Prism", "Echo", "Titan", "Solar", "Lunar"];
const NOUNS = ["Drone", "Headset", "Module", "Interface", "Gauntlet", "Hub", "Core", "Node", "Link", "Array", "Shell", "Deck", "Grid", "Matrix", "Sphere", "Unit", "System", "Drive", "Blade", "Lens"];
const DESCRIPTORS = [
    "High-fidelity audio with active noise cancellation.",
    "Military-grade encryption for secure comms.",
    "Next-gen haptics for immersive feedback.",
    "Ultra-low latency connection.",
    "Bio-compatible materials for all-day wear.",
    "Solar-powered with infinite standby time.",
    "Voice-activated AI assistant integrated.",
    "Transparent chassis revealing internal components.",
    "Modular design for easy upgrades.",
    "Waterproof to 50 meters."
];

const CATEGORIES = ["POWER", "AUDIO", "GAMING", "DECOR", "WEARABLE", "PERIPHERAL"];

// Unsplash Image Collections (Curated for Tech/Cyberpunk feel)
const IMAGES = {
    POWER: [
        "https://images.unsplash.com/photo-1609592424369-637dc4e39b78?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=600"
    ],
    AUDIO: [
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1625249568913-7a98ce118742?auto=format&fit=crop&q=80&w=600"
    ],
    GAMING: [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1593305841991-05c2e439ee60?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1612287230217-969e4331dc8f?auto=format&fit=crop&q=80&w=600"
    ],
    DECOR: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=600"
    ],
    WEARABLE: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=600"
    ],
    PERIPHERAL: [
        "https://images.unsplash.com/photo-1587829741301-30c0066e520c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=600"
    ]
};

const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const generateProducts = (count: number): Product[] => {
    return Array.from({ length: count }).map((_, i) => {
        const category = getRandom(CATEGORIES);
        const adj = getRandom(ADJECTIVES);
        const noun = getRandom(NOUNS);
        const name = `${adj} ${noun} ${Math.floor(Math.random() * 1000)}`;
        const price = Math.floor(Math.random() * 400) + 20;
        const discountPrice = Math.random() > 0.6 ? Math.floor(price * 0.8) : undefined;
        const imageCollection = IMAGES[category as keyof typeof IMAGES] || IMAGES.POWER;

        return {
            id: `gen-${i}`,
            name,
            price,
            discountPrice,
            tag: category,
            description: getRandom(DESCRIPTORS),
            image: getRandom(imageCollection),
            stock: Math.floor(Math.random() * 100),
            rating: Number((3 + Math.random() * 2).toFixed(1)),
            reviews: Math.floor(Math.random() * 500),
            isNew: Math.random() > 0.8,
            isTrending: Math.random() > 0.8,
            specs: `${category} // ${Math.floor(Math.random() * 100)}h Battery`
        };
    });
};
