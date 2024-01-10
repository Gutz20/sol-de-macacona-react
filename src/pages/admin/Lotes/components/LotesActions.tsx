import {
  createLoteRequest,
  getLoteRequest,
  getLotesRequest,
  updateLoteRequest,
} from "@/api/lotes";
import { FormSchemaLote, formLoteSchema } from "@/types/SchemaLote";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RiBox2Line, RiChatNewLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const LotesActions = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const { data: lotes } = useQuery({
    queryFn: async () => await getLotesRequest(),
    queryKey: ["lotes"],
  });

  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
    watch,
  } = useForm<FormSchemaLote>({
    resolver: zodResolver(formLoteSchema),
    mode: "onChange",
  });

  useEffect(() => {
    const loadLote = async () => {
      if (params.id) {
        const lote = await getLoteRequest(Number(params.id));
        setValue("name", lote.name);
        setValue("state", lote.state);
        setValue("area", lote.area);
        setValue("adjacentAreas", lote.adjacentAreas);
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
          state: data.state,
        });
      } else {
        createLoteRequest({
          id: null,
          name: data.name,
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
        <h2 className="text-4xl font-bold tracking-widest mb-4">Lotes</h2>
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
            <FormControl variant="filled" fullWidth>
              <InputLabel id="state-label">Estado</InputLabel>
              <Select
                labelId="state-label"
                value={watch("state") || ""}
                variant="filled"
                {...register("state")}
                startAdornment={
                  <InputAdornment position="start">
                    <RiBox2Line />
                  </InputAdornment>
                }
              >
                <MenuItem value="Libre">
                  <em>Libre</em>
                </MenuItem>
                <MenuItem value="Separado">
                  <em>Separado</em>
                </MenuItem>
                <MenuItem value="Vendido">
                  <em>Vendido</em>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.area ? true : false}>Area</InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiChatNewLine />
                  </InputAdornment>
                }
                {...register("area")}
                error={errors.area ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.area ? true : false}>
              {errors.area && (
                <span className="text-red-500">⚠ {errors.area.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <Controller
              control={control}
              name="adjacentAreas"
              rules={{ required: true }}
              render={({ field: { ref, onChange } }) => {
                return (
                  <FormControl variant="filled">
                    <InputLabel id="roles-selected">Adjacent Areas</InputLabel>
                    <Select
                      labelId="roles-selected"
                      variant="filled"
                      value={selectedAreas}
                      multiple
                      inputRef={ref}
                      input={<FilledInput />}
                      onChange={(e) => {
                        const {
                          target: { value },
                        } = e;

                        setSelectedAreas(
                          typeof value === "string" ? value.split(",") : value
                        );
                        onChange(value);
                      }}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {lotes?.map((lote) => (
                        <MenuItem value={lote.name}>
                          <Checkbox
                            checked={selectedAreas.includes(`${lote.name}`)}
                          />
                          <ListItemText primary={lote.name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              }}
            />
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
