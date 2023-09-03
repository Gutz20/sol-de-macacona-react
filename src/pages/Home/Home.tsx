import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Divider
} from "@mui/material";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Formulario } from "@/components";

const Home = () => {
  return (
    <>
      <div className="bg-cover bg-fondo1 h-[800px] bg-center relative flex items-center justify-center opacity-80">
        <div className="w-auto text-center bg-white text-orange-950 py-20 px-20 grid opacity-60 absolute text-5xl font-Itim drop-shadow-2xl">
          <h2>Descubre el Placer de vivir</h2>
          <h2> en el entorno perfecto</h2>
        </div>
      </div>
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto flex justify-center gap-4">
          <div className="mx-40 flex gap-4">
            <img
              className="bg-cover bg-fam h-76 w-50 "
              src="/public/fam.png"
              alt="familia"
            ></img>
            <div className="inline-block">
              <h1 className=" inline-block font-Itim text-4xl text-yellow-600 mb-4">
                Explora Innovadores Espacios<br></br>
                Residenciales en Ica para Tu Nuevo <br></br>
                Hogar Familiar
              </h1>
              <Divider
                variant="inset"
                component="div"
              />
              <p className="font-Itim text-xl w-50 text-gray-500">
                Explora los conjuntos residenciales más vanguardistas en Ica,
                brindando una variedad excepcional de casas y departamentos en
                venta para encontrar el lugar perfecto donde tu familia podrá
                establecer su nuevo hogar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-700 py-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-8">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper w-full py-[50px]"
            >
              <SwiperSlide className="w-[300px] h-[300px] bg-cover bg-center">
                <img src="./casa1.jpg" />
              </SwiperSlide>
              <SwiperSlide className="w-[300px] h-[300px] bg-cover bg-center">
                <img src="./casa2.jpg" />
              </SwiperSlide>
              <SwiperSlide className="w-[300px] h-[300px] bg-cover bg-center">
                <img src="./casa3.jpg" />
              </SwiperSlide>
              <SwiperSlide className="w-[300px] h-[300px] bg-cover bg-center">
                <img src="./casa4.jpg" />
              </SwiperSlide>
            </Swiper>
            <div className="flex gap-8 justify-center">
              <div className="text-slate-50 text-center">
                <h3 className="text-3xl font-bold">+10 años</h3>
                <p className="font-semibold text-xl">
                  de experiencia en el sector
                </p>
              </div>
              <div className="w-[0.50px] bg-white"></div>
              <div className="text-slate-50 text-center">
                <h3 className="text-3xl font-bold">+100 departamentos</h3>
                <p className="font-semibold text-xl">
                  de experiencia en el sector
                </p>
              </div>
              <div className="w-[0.50px] bg-white"></div>
              <div className="text-slate-50 text-center">
                <h3 className="text-3xl font-bold">+20 aliados</h3>
                <p className="font-semibold text-xl">trabajando con nosotros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-atras h-[500px] bg-center relative flex py-10">
        <div className="bg-cover bg-Verde-0 w-96 h-44 static ">
          <div className="font-Itim text-black my-8 mx-10 text-xl">
            <p>
              Cada Lote cuenta con un area con piscina y area verde para la
              familia
            </p>
          </div>
        </div>
      </div>
      <Formulario />
    </>
  );
};

export default Home;
