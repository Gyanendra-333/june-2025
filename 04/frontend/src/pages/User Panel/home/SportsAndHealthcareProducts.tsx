import { useParams } from "react-router-dom";
import { sportsAndHealthcareProductsData } from "../../data/sportsAndHealthcareProductsData";

function SportsAndHealthcareProducts() {
    const { id } = useParams<{ id: string }>();
    const product = sportsAndHealthcareProductsData.find(
        (p) => p.id === Number(id)
    );

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Sports & Healthcare Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sportsAndHealthcareProductsData.map((p) => (
                    <div
                        key={p.id}
                        className={`p-4 rounded-lg ${p.id === Number(id) ? "border-blue-500" : ""
                            }`}
                    >
                        <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-40 object-contain"
                        />
                        <h3 className="text-lg font-semibold mt-2 text-center">{p.name}</h3>
                        <p className="text-gray-600 text-center">{p.price}</p>
                        <p className="text-sm text-gray-500 mt-1 text-center">{p.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SportsAndHealthcareProducts;
