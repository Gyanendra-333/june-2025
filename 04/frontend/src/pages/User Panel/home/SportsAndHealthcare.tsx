import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { sportsAndHealthcareProductsData } from "../../data/sportsAndHealthcareProductsData";

function SportsAndHealthcare() {
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Sports & Healthcare</h2>

            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                navigation={true}
                modules={[Navigation]}
            >
                {sportsAndHealthcareProductsData.map((product) => (
                    <SwiperSlide
                        key={product.id}
                        onClick={() => navigate(`/sports-healthcare-products/${product.id}`)}
                        className="cursor-pointer"
                    >
                        <div className="p-4 rounded-lg hover:shadow-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-contain"
                            />
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-gray-600">{product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
}

export default SportsAndHealthcare;
