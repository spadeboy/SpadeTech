import { NextResponse } from 'next/server';

// Simulating a database/supplier feed (CJ Dropshipping / Option A)
const products = [
    {
        id: "cj-p001",
        name: "CYBERBANK 20000mAh",
        price: 189.00,
        tag: "POWER",
        specs: "130W Output / IPS Display / Transparent Shell",
        description: "The ultimate portable power solution. Features a fully transparent design revealing the precision engineering within. Equipped with an IPS screen displaying real-time voltage, current, and remaining capacity. 130W PD output charges laptops and phones simultaneously.",
        image: "/images/products/powerbank.png",
        stock: 12,
        rating: 4.9
    },
    {
        id: "cj-a002",
        name: "CRYSTAL BUDS PRO",
        price: 89.00,
        tag: "AUDIO",
        specs: "ANC / Bluetooth 5.3 / 40hr Battery",
        description: "Active Noise Cancellation housed in a crystal-clear chassis. 10mm dynamic drivers deliver deep bass and crisp highs. The charging case features ambient RGB breathing lights that sync with battery status.",
        stock: 45,
        rating: 4.7
    },
    {
        id: "cj-m003",
        name: "GRAVITY MAG-COOLER",
        price: 45.00,
        tag: "GAMING",
        specs: "Semiconductor Cooling / RGB / MagSafe",
        description: "Keep your device generally cool under heavy load. Magnetic snap-on semiconductor cooling fan with transparent housing. rapid heat dissipation technology ensures peak performance during gaming marathons.",
        stock: 8,
        rating: 4.8
    },
    {
        id: "cj-c004",
        name: "NIXIE TUBE CLOCK",
        price: 349.00,
        tag: "DECOR",
        specs: "IPS Simulation / WiFi / Aluminum Base",
        description: "A modern homage to retro aesthetics. 6 IPS screens simulate the glow of vintage Nixie tubes. Fully programmable via app to display time, weather, or custom stock tickers.",
        stock: 3,
        rating: 5.0
    },
    {
        id: "cj-w005",
        name: "HAPTIC VEST",
        price: 499.00,
        tag: "VR/AR",
        specs: "40 Feedback Points / Wireless / 12hr Battery",
        description: "Feel the digital world. Lightweight haptic feedback vest for VR immersion. Transparent back panel shows the vibration motor array working in real-time.",
        stock: 0, // Out of stock example
        rating: 4.9
    },
    {
        id: "cj-k006",
        name: "GHOST KEYBOARD",
        price: 159.00,
        tag: "PERIPHERAL",
        specs: "Mechanical / Hot-Swap / Clear Keycaps",
        description: "Type on air. Fully transparent chassis and keycaps with south-facing RGB per-key lighting. Gasket mounted structure for a premium acoustic typing experience.",
        stock: 22,
        rating: 4.6
    }
];

export async function GET() {
    // Simulate network latency for "Realistic" feel
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json(products);
}
