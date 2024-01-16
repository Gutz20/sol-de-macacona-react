import { createCorreoRequest } from "@/api/form";
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
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
    await createCorreoRequest(data);
    reset();
    toast.success(`El formulario se envió con éxito`, {
      theme: "light",
      position: "bottom-left",
    });
  };

  const onError: SubmitErrorHandler<FormSchema> = async (_) => {
    toast.error(`Error al enviar el formulario`, {
      theme: "light",
      position: "bottom-left",
    });
  };

  return (
    <section className="bg-form-pattern h-[750px] bg-cover bg-bottom bg-no-repeat relative p-4 max-sm:h-auto ">
      <img
        src="./img-person-form.png"
        alt="person"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 object-cover w-full h-auto max-w-[300px] max-sm:hidden max-lg:hidden"
      />

      <div className="container mx-auto flex items-center gap-4 max-sm:flex-col ">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-white text-center max-sm:text-xl">
            ¿QUÉ ESPERAS?
            <span className="block">SEPARA TU LOTE</span>
            <span className="block">YA!</span>
          </h2>
        </div>
        <div className="w-full mt-4 max-sm:mt-2 hover:opacity-100">
          <div className="w-full bg-white rounded-lg p-4 opacity-0 hover:opacity-70 mt-32 max-sm:mt-0">
            <h3 className="text-xl font-bold text-black uppercase">
              Separa tu lote ya!!!
            </h3>
            <p className="text-gray-800 text-sm font-semibold mt-2">
              ¿Deseas agendar una cita o solicitar más información? Déjanos tus
              datos para que uno de nuestros asesores te contacte.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="grid gap-4 mt-4 max-sm:grid-cols-1 max-lg:grid-cols-2"
            >
              <div>
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
              <div>
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
              <div>
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
              <div>
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
                  rows={2}
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
            </form>
          </div>
        </div>
      </div>
      <DevTool control={control} />
    </section>
  );
};

export default Formulario;
