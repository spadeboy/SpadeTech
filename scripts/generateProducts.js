const fs = require('fs');

const categories = ['AI LIFESTYLE', 'NEURAL APPAREL', 'SPATIAL COMPUTE', 'SMART HABITAT', 'BIOMETRIC GEAR'];
const adjectives = ['Quantum', 'Neural', 'Haptic', 'Spatial', 'Aero', 'Synapse', 'Omni', 'Void', 'Apex', 'Nexus', 'Echo', 'Flux', 'Aether', 'Kinetic', 'Lumina'];
const nouns = ['Visor', 'Weave', 'Cortex', 'Node', 'Drive', 'Exo-Shell', 'Prism', 'Matrix', 'Loom', 'Cipher', 'Vanguard', 'Specter', 'Pulse', 'Core', 'Link'];

const images = [
    'https://images.unsplash.com/photo-1550009158-9effb64fda70?q=80&w=600&auto=format&fit=crop', // VR Tech
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop', // Camera
    'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=600&auto=format&fit=crop', // Watch
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop', // Headphones
    'https://images.unsplash.com/photo-1606220588913-b3cec07fbb0b?q=80&w=600&auto=format&fit=crop', // Sneaker
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop', // Earbuds
];

const externalUrls = [
    'https://www.apple.com/store',
    'https://store.google.com',
    'https://www.sony.com/electronics/store',
    'https://www.nothing.tech',
    'https://www.samsung.com',
];

const generateProducts = (count) => {
    const products = [];
    for (let i = 1; i <= count; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const name = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
        const price = Math.floor(Math.random() * (900 - 40 + 1)) + 40; // $40 to $900
        const hasExternal = Math.random() > 0.3; // 70% chance of being an affiliate drop

        products.push({
            id: i.toString(),
            name: name.toUpperCase(),
            category: category,
            price: price,
            image: images[Math.floor(Math.random() * images.length)],
            description: `ARCHIVAL ENTRY [${i.toString().padStart(4, '0')}]: PRECISION-ENGINEERED FOR THE ${category.split(' ')[0]} PROTOCOL. DESIGNED WITH ENHANCED TACTILE FEEDBACK AND SEAMLESS NETWORK INTEGRATION. SPECIFICATIONS EXCEED 2026 BASELINE STANDARDS.`,
            externalUrl: hasExternal ? externalUrls[Math.floor(Math.random() * externalUrls.length)] : null,
            stock: Math.floor(Math.random() * 50) + 1
        });
    }
    return products;
};

const products = generateProducts(300);

fs.writeFileSync('data/products.json', JSON.stringify(products, null, 2));
console.log('Successfully generated 300 products in data/products.json');
