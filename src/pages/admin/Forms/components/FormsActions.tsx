import {
  createCorreoRequest,
  getCorreoRequest,
  updateCorreoRequest,
} from "@/api/form";
import { FormSchemaCorreo, formCorreoSchema } from "@/types/SchemaCorreo";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  RiBox2Line,
  RiMailLine,
  RiMessage2Line,
  RiPhoneLine,
  RiProductHuntLine,
  RiQuoteText,
} from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";

const FormsActions = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm<FormSchemaCorreo>({
    resolver: zodResolver(formCorreoSchema),
    mode: "onChange",
  });

  useEffect(() => {
    const loadCategory = async () => {
      if (params.id) {
        const category = await getCorreoRequest(Number(params.id));
        setValue("name", category.name);
      }
    };
    loadCategory();
  }, [params.id]);

  const onSubmit: SubmitHandler<FormSchemaCorreo> = async (data) => {
    try {
      if (params.id) {
        updateCorreoRequest(Number(params.id), {
          id: Number(params.id),
          name: data.name,
          creationDate: null,
        });
      } else {
        createCorreoRequest({
          id: null,
          name: data.name,
          creationDate: null,
        });
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="bg-gray-100 p-4" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-4xl font-bold tracking-widest mb-4">Datos</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.name ? true : false}>
                Nombres
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiBox2Line />
                  </InputAdornment>
                }
                {...register("name")}
                error={errors.name ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.name ? true : false}>
              {errors.name && (
                <span className="text-red-500">⚠ {errors.name.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.email ? true : false}>Email</InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiMailLine />
                  </InputAdornment>
                }
                {...register("email")}
                error={errors.email ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.email ? true : false}>
              {errors.email && (
                <span className="text-red-500">⚠ {errors.email.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.dni ? true : false}>DNI</InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiMailLine />
                  </InputAdornment>
                }
                {...register("dni")}
                error={errors.dni ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.dni ? true : false}>
              {errors.dni && (
                <span className="text-red-500">⚠ {errors.dni.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.phone ? true : false}>
                Telefono
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiPhoneLine />
                  </InputAdornment>
                }
                {...register("phone")}
                error={errors.phone ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.phone ? true : false}>
              {errors.phone && (
                <span className="text-red-500">⚠ {errors.phone.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.message ? true : false}>
                Mensaje
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiMessage2Line />
                  </InputAdornment>
                }
                {...register("message")}
                error={errors.message ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.message ? true : false}>
              {errors.message && (
                <span className="text-red-500">⚠ {errors.message.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.terms ? true : false}>
                Terminos
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiQuoteText />
                  </InputAdornment>
                }
                {...register("terms")}
                error={errors.terms ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.terms ? true : false}>
              {errors.terms && (
                <span className="text-red-500">⚠ {errors.terms.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.promotions ? true : false}>
                Promociones
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiProductHuntLine />
                  </InputAdornment>
                }
                {...register("promotions")}
                error={errors.promotions ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.promotions ? true : false}>
              {errors.promotions && (
                <span className="text-red-500">
                  ⚠ {errors.promotions.message}
                </span>
              )}
            </FormHelperText>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link relative="path" to="../..">
            <Button
              variant="outlined"
              color="error"
              className="w-full"
              type="button"
            >
              Cancelar
            </Button>
          </Link>
          <Button variant="outlined" color="success" type="submit">
            Guardar
          </Button>
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default FormsActions;
