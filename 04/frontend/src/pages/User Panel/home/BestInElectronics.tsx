import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type Product = {
    id: number;
    name: string;
    image: string;
    price: string;
    slug: string; // category slug
};

const products: Product[] = [
    {
        id: 1,
        name: "Samsung Galaxy S23",
        image: "/electronics/samsung.jpg",
        price: "₹79,999",
        slug: "mobiles",
    },
    {
        id: 2,
        name: "Sony Headphones",
        image: "/electronics/sony.jpg",
        price: "₹7,499",
        slug: "headphones",
    },
    {
        id: 3,
        name: "Apple MacBook Air",
        image: "/electronics/macbook.jpg",
        price: "₹1,05,999",
        slug: "laptops",
    },
    {
        id: 4,
        name: "Canon DSLR Camera",
        image: "/electronics/canon.jpg",
        price: "₹54,999",
        slug: "cameras",
    },
];

function BestInElectronics() {
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow rounded-lg p-4 mt-6">
            {/* 🔹 Section Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    Best in <span className="text-[#FF9F00]">Electronics</span>
                </h2>
                <button
                    onClick={() => navigate("/category/electronics")}
                    className="text-sm text-[#2874F0] font-medium hover:underline"
                >
                    View All
                </button>
            </div>

            {/* 🔹 Product Slider */}
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={16}
                slidesPerView={4}
                className="pb-6"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div
                            onClick={() => navigate(`/category/${product.slug}`)}
                            className="flex flex-col items-center p-3 border rounded-lg hover:shadow-md transition cursor-pointer"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-32 w-32 object-contain mb-2"
                            />
                            <p className="text-sm font-medium text-gray-700">{product.name}</p>
                            <p className="text-[#388E3C] font-semibold">{product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BestInElectronics;
