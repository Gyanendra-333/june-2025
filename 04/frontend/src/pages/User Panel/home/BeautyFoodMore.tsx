import { useNavigate } from "react-router-dom";
import { beautyFoodMoreProducts } from "../../data/beautyFoodMoreProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


function BeautyFoodMore() {
    const navigate = useNavigate();

    return (
        <div className="bg-white p-4 shadow-md rounded-md my-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Beauty, Food, Toys & More</h2>
                <button
                    onClick={() => navigate("/beauty-food-more-products")}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    VIEW ALL
                </button>
            </div>

            {/* Slider */}
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    640: { slidesPerView: 3, spaceBetween: 15 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 5, spaceBetween: 20 },
                }}
                className="mySwiper"
            >
                {beautyFoodMoreProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div
                            onClick={() => navigate(`/beauty-food-more-products/${product.slug}`)}
                            className="cursor-pointer rounded-lg p-2 hover:shadow-2xl flex flex-col items-center"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-32 object-contain"
                            />
                            <p className="text-sm font-medium mt-2">{product.name}</p>
                            <p className="text-gray-600 text-sm">{product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BeautyFoodMore;
