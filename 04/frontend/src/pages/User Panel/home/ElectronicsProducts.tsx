import { useParams } from "react-router-dom";
import monitor from "../../../../public/assets/monitor.webp";
import watches from "../../../../public/assets/watches.webp";
import projectors from "../../../../public/assets/projectors.webp";
import cctv from "../../../../public/assets/cctv.webp";

type Product = {
    id: number;
    name: string;
    image: string;
    price: string;
    slug: string;
};

//  Same static products (later backend se fetch karenge)
const allProducts: Product[] = [
    {
        id: 1,
        name: "Monitor",
        image: monitor,
        price: "₹79,999",
        slug: "mobiles",
    },
    {
        id: 2,
        name: "Watches",
        image: watches,
        price: "₹7,499",
        slug: "headphones",
    },
    {
        id: 3,
        name: "Projectors",
        image: projectors,
        price: "₹1,05,999",
        slug: "laptops",
    },
    {
        id: 4,
        name: "CCTV",
        image: cctv,
        price: "₹54,999",
        slug: "cameras",
    },
];

function ElectronicsProducts() {
    const { slug } = useParams<{ slug: string }>();

    const filteredProducts = allProducts.filter(
        (p) => p.slug === slug || slug === "electronics"
    );

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6 capitalize">
                {slug === "electronics" ? "All Electronics" : slug}
            </h1>

            {filteredProducts?.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredProducts?.map((p) => (
                        <div
                            key={p.id}
                            className="p-4 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-40 object-contain mb-2"
                            />
                            <h2 className="font-semibold">{p.name}</h2>
                            <p className="text-[#388E3C] font-bold">{p.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ElectronicsProducts;
