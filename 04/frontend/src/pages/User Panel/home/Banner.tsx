import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banner1 from "../../../../public/assets/banner1.webp"
import banner2 from "../../../../public/assets/banner2.webp"
import banner3 from "../../../../public/assets/banner3.webp"



function Banner() {
    return (
        <div className="w-full h-[300px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-[36vh]"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <img
                        src={banner1}
                        alt="Banner 1"
                        className="w-full object-cover"
                    />
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <img
                        src={banner2}
                        alt="Banner 2"
                        className="w-full object-cover"
                    />
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <img
                        src={banner3}
                        alt="Banner 3"
                        className="w-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
