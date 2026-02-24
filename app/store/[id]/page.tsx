import ProductDetails from './ProductDetails';

const products = [
    { id: '1', name: 'Minimalist Watch', price: 199, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
    { id: '2', name: 'Premium Headphones', price: 299, category: 'Tech', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' },
    { id: '3', name: 'Smart Speaker', price: 149, category: 'Tech', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=800' },
    { id: '4', name: 'Ceramic Mug', price: 24, category: 'Home', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800' },
    { id: '5', name: 'Leather Wallet', price: 65, category: 'Accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800' },
    { id: '6', name: 'Desk Organizer', price: 45, category: 'Home', image: 'https://images.unsplash.com/photo-1594953930438-fb1894dceddd?auto=format&fit=crop&q=80&w=800' },
];

export async function generateStaticParams() {
    return products.map((post) => ({
        id: post.id,
    }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const resolvedParams = await params;
    const product = products.find(p => p.id === resolvedParams.id);

    if (!product) {
        return <div className="p-20 text-center text-xl min-h-[50vh] flex items-center justify-center">Product not found.</div>;
    }

    return <ProductDetails product={product} />;
}
