import { Send } from "@mui/icons-material";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";

const Formulario = () => {
  return (
    <div>
      <section
        className="bg-form-pattern h-[750px] bg-cover bg-bottom bg-no-repeat relative
                          max-sm:h-[550px] max-sm:flex-col"
      >
        <img
          src="./img-person-form.png"
          alt="person"
          className="absolute bottom-0 left-1/2 transform -translate-x-80 object-cover max-sm:left-0 max-sm:translate-x-0 max-sm:w-96"
        />
        <div
          className="container mx-auto h-full flex items-center gap-4
                        max-sm:flex-col"
        >
          <div className="w-full">
            <h2 className="text-4xl font-bold text-white text-center max-sm:text-xl">
              ¿QUÉ ESPERAS?
              <span className="block">COMPRA TU LOTE</span>
              <span className="block">YA!</span>
            </h2>
          </div>
          <div className="w-full max-sm:w-[350px] max-sm:h-[400px] max-sm:bg-slate-400 max-sm:p-9 max-sm:bg-opacity-40 max-sm:rounded-3xl">
            <h3 className="text-3xl font-bold text-white max-sm:text-xl max-sm:ml-4">
              Regala un lote!!!
            </h3>
            <p className="text-white text-xl max-sm:text-xs max-sm:ml-4">
              ¿Deseas agendar una cita o solicitar más información? Déjanos tus
              datos para que uno de nuestros asesores te contacte.
            </p>
            <form className="grid grid-cols-2 gap-4 mt-10 max-sm:gap-1 max-sm:text-xs max-sm:flex-col max-sm:grid-cols- max-sm:grid">
              <div>
                <TextField
                  label="Nombre completo"
                  required
                  variant="filled"
                  className="w-full max-sm:h-1 max-sm:text-xs "
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
};

export default Formulario;
