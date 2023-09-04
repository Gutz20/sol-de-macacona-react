const Ubication = () => {
  return (
    <>
      <div
        className="absolute opacity-30 bg-cover w-full h-[auto] bg-center flex items-center justify-center 
      max-sm:w-full max-sm:bg-covermax-sm:bg-center max-sm:relative max-sm:flex max-sm:items-center max-sm:justify-center"
      >
        <img src="/public/portico_gent.jpg" />
      </div>

      <div className="bg-cover bg-center relative flex items-center justify-center p-4 md:p-8 font-serif">
        <p
          className="text-center text-black text-lg md:text-2xl"
          style={{
            textAlign: "center",
            marginTop: "150px",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          ENCUÉNTRANOS!
        </p>
      </div>
      <div>
        <img
          src="/public/Ubicacion-Maps.jpg"
          alt="Panamericana Sur Km 295 Subtanjalla - Ica"
          style={{
            maxWidth: "60%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
        <div
          className="relative"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <a
            href="https://www.google.com/maps/place/Sol+de+Macacona+-+Condominios/@-14.0108648,-75.76806,15z/data=!4m6!3m5!1s0x9110fcfa29c2bdbd:0xfa68265d505ec359!8m2!3d-14.006482!4d-75.7695841!16s%2Fg%2F11b7wc65f6?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="relative rounded-lg px-3.5 py-2 text-white font-bold hover:text-slate-900 max-sm:py-0.5 max-sm:px-1.5 max-sm:text-xs font-serif "
              style={{
                backgroundColor: "#3498db",
                borderRadius: "5px",
                padding: "10px 30px",
                border: "none",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                fontSize: "18px",
                transition: "background-color 0.3s ease",
              }}
            >
              LLÉVAME!
            </button>
          </a>
        </div>

        <div className="bg-cover bg-center relative flex items-center justify-center p-4 md:p-8 font-serif">
          <p
            className="text-center text-black text-lg md:text-2xl "
            style={{
              textAlign: "center",
              marginTop: "30px",
              fontWeight: "bold",
            }}
          >
            Condominios - Sol de Macacona
          </p>
        </div>
        <div className="justify-center bg-center font-serif relative">
          <p
            className="text-center h-[100px] text-slate-800 "
            style={{
              marginInlineEnd: "30px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Condominios Sol de Macacona es un condominio que se encuentra en su
            Etapa Inicial con lotes al 50% de su ejecucion para desarrollar
            casas de campo y/o similares.
            <br />
            Con lotes de 261.69m2 a 352.14m2, con instalacion de agua y energia
            electrica individual.
            <br />
            Cuenta con areas verdes, zonas de entretenimiento y deportes
            comunes. Contando tambien con vigilancia continua y seguridad.
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Ubication;
