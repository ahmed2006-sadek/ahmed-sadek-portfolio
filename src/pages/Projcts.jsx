import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Slide from "../components/swiper"

function Projcts() {
    return (

        <>
        
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                loop={true}
                pagination={{clickable: true,}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className="num">
                    <Slide src="https://via.placeholder.com/250X140" alt="first" name="projct1" word="first projct" />
                </SwiperSlide>

                <SwiperSlide className="num">
                    <Slide src="https://via.placeholder.com/250X140" alt="socund" name="projct2" word="socund projct" />
                </SwiperSlide>

                <SwiperSlide className="num">
                    <Slide src="https://via.placeholder.com/250X140" alt="therd" name="projct3" word="therd projct" />
                </SwiperSlide>

                <SwiperSlide className="num">
                    <Slide src="https://via.placeholder.com/250X140" alt="first" name="projct1" word="first projct" />
                </SwiperSlide>

                <SwiperSlide className="num">
                    <Slide src="https://via.placeholder.com/250X140" alt="socund" name="projct2" word="socund projct" />
                </SwiperSlide>

                <SwiperSlide className="num">
                    <Slide src="https://via.placeholder.com/250X140" alt="therd" name="projct3" word="therd projct" />
                </SwiperSlide>
            </Swiper>
            </>
    );

}

export default Projcts;