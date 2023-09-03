import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeCarrusel = () => {
  return (
    <section className=" bg-neutral-700 py-20">
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
              <img src="./casa1.jpg" />
            </SwiperSlide>
          </Swiper>
          <div className="flex gap-8 justify-center mx-5 max-sm:gap-2 ">
            <div className="text-slate-50 text-center">
              <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
              <h3 className="text-3xl font-bold max-sm:text-xs max-sm:font-bold">
                +10 años
              </h3>
              <p className="font-semibold text-xl max-sm:text-xs">
                de experiencia en el sector
              </p>
            </div>
            <div className="w-[0.50px] bg-white"></div>
            <div className="text-slate-50 text-center">
              <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
              <h3 className="text-3xl font-bold max-sm:text-xs max-sm:font-bold">
                +100 departamentos
              </h3>
              <p className="font-semibold text-xl max-sm:text-xs">
                de experiencia en el sector
              </p>
            </div>
            <div className="w-[0.50px] bg-white"></div>
            <div className="text-slate-50 text-center">
              <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
              <h3 className="text-3xl font-bold max-sm:text-xs max-sm:font-bold">
                +20 aliados
              </h3>
              <p className="font-semibold text-xl max-sm:text-xs">
                trabajando con nosotros
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCarrusel;
