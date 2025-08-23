import { useParams } from "react-router-dom";
import { beautyFoodMoreProducts } from "../../data/beautyFoodMoreProducts";

function BeautyFoodMoreProducts() {
    const { slug } = useParams<{ slug: string }>();

    const product = beautyFoodMoreProducts.find((p) => p.slug === slug);

    if (!product) {
        return <div className="p-4 text-red-500">Product not found</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">{product.name}</h2>
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/3 object-contain border rounded-lg"
                />
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">{product.price}</p>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default BeautyFoodMoreProducts;
