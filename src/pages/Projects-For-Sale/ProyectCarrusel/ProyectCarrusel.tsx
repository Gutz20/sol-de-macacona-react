import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProyectCarrusel = () => {
  return (
    <section className=" bg-neutral-500 px-52 py-20 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col gap-8">
          <Swiper
            effect={"coverflow"}
            spaceBetween={50}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation, A11y]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./casa1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./casa2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./casa3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./casa5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img-bg-form.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./terra.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProyectCarrusel;
