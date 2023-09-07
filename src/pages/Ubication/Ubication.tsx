import { Button } from "@mui/material";

const Ubication = () => {
  return (
    <>
      <div className="bg-fondoUbication h-fit bg-cover pt-48 pb-4">
        <div className="container mx-auto">
          <p className="text-center text-3xl  font-bold text-red-800">
            ENCUÉNTRANOS!
          </p>
          <div className="relative flex flex-col items-center gap-4 justify-center my-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6510.515057456789!2d-75.76780395015354!3d-14.007610931001263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110fcfa29c2bdbd%3A0xfa68265d505ec359!2sSol%20de%20Macacona%20-%20Condominios!5e0!3m2!1ses!2spe!4v1694035481978!5m2!1ses!2spe"
              width="800"
              height="450"
              loading="lazy"
            ></iframe>
            <a
              href="https://www.google.com/maps/place/Sol+de+Macacona+-+Condominios/@-14.0108648,-75.76806,15z/data=!4m6!3m5!1s0x9110fcfa29c2bdbd:0xfa68265d505ec359!8m2!3d-14.006482!4d-75.7695841!16s%2Fg%2F11b7wc65f6?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 4 }}
                className="w-64"
              >
                Llevame
              </Button>
            </a>
            <div className="flex flex-col items-center justify-center gap-2 my-4">
              <h3 className="text-3xl font-bold">
                Condominios - Sol de Macacona
              </h3>
              <span className="text-xl text-center font-normal">
                Condominios Sol de Macacona es un condominio que se encuentra en
                su Etapa Inicial con lotes al 50% de su ejecucion para
                desarrollar casas de campo y/o similares.
              </span>
              <span className="text-xl text-center font-normal">
                Con lotes de 261.69m2 a 352.14m2, con instalacion de agua y
                energia electrica individual. Cuenta con areas verdes, zonas de
                entretenimiento y deportes comunes. Contando tambien con
                vigilancia continua y seguridad.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ubication;
