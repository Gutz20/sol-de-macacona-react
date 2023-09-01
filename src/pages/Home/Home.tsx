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
  <div>
    <h1 className="font-bold text-3xl"></h1>

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
        </div>
      </div>
    </section>
  </div>
);

export default Home;
