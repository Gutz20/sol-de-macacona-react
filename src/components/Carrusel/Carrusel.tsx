import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SlidesProps = {
  id: number;
  src: string;
  alt: string;
};

interface CarruselProps {
  slides: SlidesProps[];
}

const Carrusel = ({ slides }: CarruselProps) => {
  return (
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
      {slides.map(({ id, src, alt }) => (
        <SwiperSlide key={id}>
          {src.endsWith("mp4") ? (
            <video
              autoPlay
              muted
              loop
              className="mx-auto w-[76%]"
            >
              <source
                src="/public/VideoPromo.mp4"
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              src={src}
              alt={alt}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel;

{
  /* <SwiperSlide>
        <video
          autoPlay
          muted
          loop
          className="mx-auto w-[76%]"
        >
          <source
            src="/public/VideoPromo.mp4"
            type="video/mp4"
          />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./casa2.jpg"
          className="w-full h-full mx-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./casa3.jpg"
          className="w-full h-full mx-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./casa2.jpg"
          className="w-full h-full mx-auto"
        />
      </SwiperSlide> */
}
