import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Slide from "../components/swiper"
import rock from "../img/rock.png"
import space from "../img/space.png"

function Projcts() {
    return (

        <>
        
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{clickable: true,}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className="num">
                    <Slide src={rock} alt="Rockai Dev" name="Rockai Dev" word="worked at Rockai Dev portfolio" lenk="https://rockai-dev.herokuapp.com/" />
                </SwiperSlide>

                <SwiperSlide className="num">
                    <Slide src={space} alt="space youth fotum" name="space youth forum" word="worked at space youth forum" lenk="https://space-youth-forum.herokuapp.com/Home" />
                </SwiperSlide>

            </Swiper>
            </>
    );

}

export default Projcts;