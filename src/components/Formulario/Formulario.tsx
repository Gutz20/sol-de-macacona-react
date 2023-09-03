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
  } = useForm<FormSchema>({
    resolver: zodResolver(formValidationSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
  };

  return (
    <div>
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
          <div className="w-full bg-white rounded-lg p-8 bg-opacity-40">
            <h3 className="text-3xl font-bold text-white">Regala un lote!!!</h3>
            <p className="text-gray-800 text-xl font-semibold">
              ¿Deseas agendar una cita o solicitar más información? Déjanos tus
              datos para que uno de nuestros asesores te contacte.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4 mt-10"
            >
              <div>
                <TextField
                  label="Nombre completo"
                  variant="filled"
                  className="w-full"
                  {...register("name")}
                  error={errors.name ? true : false}
                />
                {errors.name && (
                  <span className="text-red-800 text-xs font-semibold">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <TextField
                  label="DNI"
                  variant="filled"
                  className="w-full"
                  {...register("dni", { valueAsNumber: true })}
                  error={errors.dni ? true : false}
                />
                {errors.dni && (
                  <p className="text-red-800 text-xs font-semibold">
                    {errors.dni.message}
                  </p>
                )}
              </div>
              <div>
                <TextField
                  label="Correo"
                  variant="filled"
                  className="w-full"
                  {...register("mail")}
                  error={errors.mail ? true : false}
                />
                {errors.mail && (
                  <p className="text-red-800 text-xs font-semibold">
                    {errors.mail.message}
                  </p>
                )}
              </div>
              <div>
                <TextField
                  label="Telefono"
                  variant="filled"
                  className="w-full"
                  error={errors.mail ? true : false}
                  {...register("phone", {
                    valueAsNumber: true,
                    setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
                  })}
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
                  multiline
                  error={errors.mail ? true : false}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-800 text-xs font-semibold">
                    {errors.message.message}
                  </p>
                )}
              </div>

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
              {/* <Checkbox aria-label="temrs and conditions" /> */}
            </form>
          </div>
        </div>
      </section>

      <DevTool control={control} />
    </div>
  );
};

export default Formulario;
