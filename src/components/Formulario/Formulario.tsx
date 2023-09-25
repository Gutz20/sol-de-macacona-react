import { addEmailToExcel } from "@/api/form";
import { FormSchema, formValidationSchema } from "@/types";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "@mui/icons-material";
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
import { SubmitHandler, useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formValidationSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    await addEmailToExcel(data);
    reset();
  };

  return (
    <section
      className="bg-form-pattern h-[750px] bg-cover bg-bottom bg-no-repeat relative p-4
                          max-sm:h-[750px] max-sm:flex-col"
    >
      <img
        src="./img-person-form.png"
        alt="person"
        className="absolute bottom-0 left-1/2 transform -translate-x-80 object-cover max-sm:left-0 max-sm:translate-x-0 max-sm:w-96 max-sm:hidden max-lg:hidden"
      />
      <div
        className="container mx-auto h-full flex items-center gap-4
                        max-sm:flex-col"
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold text-white text-center max-sm:text-xl">
            ¿QUÉ ESPERAS?
            <span className="block">SEPARA TU LOTE</span>
            <span className="block">YA!</span>
          </h2>
        </div>
        <div className="w-full max-sm:w-[350px] max-sm:p-10 max-sm:rounded-3xl bg-white rounded-lg p-8 bg-opacity-70">
          <h3 className="text-3xl font-bold text-black max-sm:text-xl max-sm:ml-4 uppercase">
            Separa tu lote ya!!!
          </h3>
          <p className="text-gray-800 text-xl max-sm:text-xs max-sm:ml-4 font-semibold">
            ¿Deseas agendar una cita o solicitar más información? Déjanos tus
            datos para que uno de nuestros asesores te contacte.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 mt-10 max-sm:mt-2 max-sm:gap-1 max-sm:text-xs max-sm:flex-col max-sm:grid-cols- max-sm:grid"
          >
            <div className="col-span-1">
              <TextField
                label="Nombre completo"
                variant="filled"
                size="small"
                className="w-full"
                autoComplete="off"
                {...register("name")}
                error={errors.name ? true : false}
              />
              {errors.name && (
                <p className="text-red-800 text-xs font-semibold">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="col-span-1">
              <TextField
                label="DNI"
                variant="filled"
                className="w-full"
                size="small"
                autoComplete="off"
                type="tel"
                {...register("dni")}
                error={errors.dni ? true : false}
              />
              {errors.dni && (
                <p className="text-red-800 text-xs font-semibold">
                  {errors.dni.message}
                </p>
              )}
            </div>
            <div className="col-span-1">
              <TextField
                label="Correo"
                variant="filled"
                className="w-full"
                size="small"
                autoComplete="off"
                {...register("email")}
                error={errors.email ? true : false}
              />
              {errors.email && (
                <p className="text-red-800 text-xs font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="col-span-1">
              <TextField
                label="Telefono"
                variant="filled"
                className="w-full"
                type="number"
                size="small"
                autoComplete="off"
                error={errors.phone ? true : false}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-800 text-xs font-semibold">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <TextField
                label="Déjanos tu opinión"
                variant="filled"
                className="w-full"
                size="small"
                rows={3}
                multiline
                error={errors.message ? true : false}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-800 text-xs font-semibold">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <div className="flex flex-col gap-4">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Terminos y Condiciones"
                    {...register("terms")}
                  />
                  {/* {errors.terms && (
                    <p className="text-red-800 text-sm font-semibold">
                      {errors.terms.message}
                    </p>
                  )} */}
                </FormGroup>
                <FormControl>
                  <FormLabel>Deseo recibir promociones</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel
                      value="si"
                      control={<Radio />}
                      label="Si"
                      {...register("promotions")}
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                      {...register("promotions")}
                    />
                    {errors.promotions && (
                      <p className="text-red-800 text-sm font-semibold">
                        {errors.promotions.message}
                      </p>
                    )}
                  </RadioGroup>
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<Send />}
                >
                  Enviar
                </Button>
              </div>
            </div>
            {/* <Checkbox aria-label="temrs and conditions" /> */}
          </form>
        </div>
      </div>
      <DevTool control={control} />
    </section>
  );
};

export default Formulario;
