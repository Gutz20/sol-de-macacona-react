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
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RiBox2Line } from "react-icons/ri";
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
  } = useForm<FormSchemaCategory>({
    resolver: zodResolver(formCategorySchema),
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

  const onSubmit: SubmitHandler<FormSchemaCategory> = async (data) => {
    try {
      if (params.id) {
        updateCorreoRequest(Number(params.id), {
          name: data.name,
          id: Number(params.id),
          creationDate: null,
        });
      } else {
        createCorreoRequest({
          name: data.name,
          id: null,
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

export default FormsActions;
