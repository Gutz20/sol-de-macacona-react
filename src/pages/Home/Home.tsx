import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Send } from "@mui/icons-material";

const Home = () => (
  <>
    <div className="bg-cover bg-fondo1 h-[800px] bg-center">
      <div className=" h-50px w-auto place-items-center top-50% left-50% bg-white text-orange-950 py-20 px-20 grid opacity-60 left-80 top-80 text-5xl absolute font-Itim drop-shadow-2xl">
        <h2>Descubre el Placer de vivir</h2>
        <h2> en el entorno perfecto</h2>
      </div>
    </div>
    <div className="px-40 py-20 flex bg-amber-50">
      <img
        className="bg-cover bg-fam h-76 w-50 "
        src="/public/fam.png"
        alt="familia"
      ></img>
      <div className="inline-block ">
        <h1 className=" inline-block font-Itim  text-4xl px-10  text-yellow-600 ">
          Explora Innovadores Espacios<br></br>
          Residenciales en Ica para Tu Nuevo <br></br>
          Hogar Familiar
        </h1>
        <hr></hr>
        <br></br>
        <p className="px-10 font-Itim text-xl w-50 text-gray-500 flex h-44">
          Explora los conjuntos residenciales<br></br>
          más vanguardistas en Ica, brindando<br></br>
          una variedad excepcional de casas y <br></br>
          departamentos en venta para <br></br>
          encontrar el lugar perfecto donde tu<br></br>
          familia podrá establecer su nuevo<br></br>
          hogar.
        </p>
      </div>
    </div>
    <div className=" bg-neutral-600 px-10 py-10  flex-col h-[32rem]">
      <div className="">
        <img
          className="   h-60 w-120  "
          src="/public/terra.jpg"
          alt="terraza"
        />
      </div>
      <div className="text-slate-50 inline-block">
        <h3>+10 años</h3>
        <h3>646546</h3>
      </div>
    </div>
    <div>
      {/* Carrusel de casas */}
      {/* <Swiper
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
    </Swiper> */}

      <section className="bg-form-pattern h-[750px] bg-cover bg-bottom bg-no-repeat relative">
        <img
          src="./img-person-form.png"
          alt="person"
          className="absolute bottom-0 left-1/2 transform -translate-x-80 object-cover"
        />
        <div className="container mx-auto h-full flex items-center gap-4">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-white text-center">
              ¿QUÉ ESPERAS?
              <span className="block">COMPRA TU LOTE</span>
              <span className="block">YA!</span>
            </h2>
          </div>
          <div className="h-50 w-full">
            <img className="h-20 w-10"></img>
          </div>
          <div className="w-full">
            <h3 className="text-3xl font-bold text-white">Regala un lote!!!</h3>
            <p className="text-white text-xl">
              ¿Deseas agendar una cita o solicitar más información? Déjanos tus
              datos para que uno de nuestros asesores te contacte.
            </p>
            <form className="grid grid-cols-2 gap-4 mt-10">
              <div>
                <TextField
                  label="Nombre completo"
                  required
                  variant="filled"
                  className="w-full"
                />
              </div>

              <div>
                <TextField
                  label="DNI"
                  required
                  variant="filled"
                  className="w-full"
                />
              </div>

              <div>
                <TextField
                  label="Correo"
                  required
                  variant="filled"
                  className="w-full"
                />
              </div>

              <div>
                <TextField
                  label="Telefono"
                  required
                  variant="filled"
                  className="w-full"
                />
              </div>

              <div className="col-span-2">
                <TextField
                  label="Déjanos tu opinión"
                  required
                  variant="filled"
                  className="w-full"
                  multiline
                />
              </div>

              <div className="flex flex-col gap-4">
                <FormGroup>
                  <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="Terminos y Condiciones"
                  />
                </FormGroup>
                <FormControl>
                  <FormLabel>Deseo recibir promociones</FormLabel>
                  <RadioGroup
                    row
                    name="promociones"
                  >
                    <FormControlLabel
                      value="si"
                      control={<Radio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                <Button
                  variant="contained"
                  endIcon={<Send />}
                >
                  Enviar
                </Button>
              </div>
              {/* <Checkbox aria-label="temrs and conditions" /> */}
            </form>
            d
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Home;
