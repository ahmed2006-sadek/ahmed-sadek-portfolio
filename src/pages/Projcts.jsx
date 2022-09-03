import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Projcts(){

    return(
        <div className="swiper">
    
    <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="slides">
                    <div className="content">
                        <img src="https://via.placeholder.com/250x150/fff" alt="" srcset="" />
                        <h2>account name</h2>
                        <hr />
                        <p>content content content content content content content content </p>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="slides">
                    <div className="content">
                        <img src="https://via.placeholder.com/250x150/efff" alt="" srcset="" />
                        <h2>account name</h2>
                        <hr />
                        <p>content content content content content content content content </p>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="slides">
                    <div className="content">
                        <img src="https://via.placeholder.com/250x150/efdd" alt="" srcset="" />
                        <h2>account name</h2>
                        <hr />
                        <p>content content content content content content content content </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
export default Projcts