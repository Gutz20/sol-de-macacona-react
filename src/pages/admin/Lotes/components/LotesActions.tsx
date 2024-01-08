import {
  createLoteRequest,
  getLoteRequest,
  updateLoteRequest,
} from "@/api/lotes";
import { FormSchemaLote, formLoteSchema } from "@/types/SchemaLote";
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
import { RiBox2Line } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";

const LotesActions = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm<FormSchemaLote>({
    resolver: zodResolver(formLoteSchema),
    mode: "onChange",
  });

  useEffect(() => {
    const loadLote = async () => {
      if (params.id) {
        const lote = await getLoteRequest(Number(params.id));
        setValue("name", lote.name);
      }
    };
    loadLote();
  }, [params.id]);

  const onSubmit: SubmitHandler<FormSchemaLote> = async (data) => {
    try {
      if (params.id) {
        updateLoteRequest(Number(params.id), {
          id: Number(params.id),
          name: data.name,
          creationDate: null,
        });
      } else {
        createLoteRequest({
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
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link relative="path" to="..">
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

export default LotesActions;
