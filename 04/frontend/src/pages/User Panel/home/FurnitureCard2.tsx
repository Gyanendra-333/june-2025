import { useNavigate } from "react-router-dom";
import { categories2 } from "../../data/Card2";


function FurnitureCard2() {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {categories2.map((cat) => (
                <div
                    key={cat.id}
                    className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between"
                >
                    <h2 className="text-lg font-bold mb-3">{cat.title}</h2>
                    <div className="grid grid-cols-2 gap-3 flex-grow">
                        {cat.items.map((item, i) => (
                            <div
                                key={i}
                                className="cursor-pointer"
                                onClick={() => navigate(`/category/${cat.id}/item/${i}`)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-24 object-cover rounded"
                                />
                                <p className="text-xs mt-1">{item.name}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => navigate(`/category/${cat.id}`)}
                        className="text-blue-600 text-sm mt-3 hover:underline self-start"
                    >
                        {cat.linkText}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default FurnitureCard2;
