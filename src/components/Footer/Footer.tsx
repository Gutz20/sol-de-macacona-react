const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="flex items-center justify-center">
              <div className="flex flex-col">
                <img
                  src="/logo-sin-fondo.png"
                  alt="Logo"
                  className="w-[250px] h-[150px]"
                />
                <h2 className="text-white uppercase text-center">
                  Contamos con financieamiento bancario
                </h2>
              </div>
              <div className="flex items-center">
                <p className="text-white text-justify">
                  ¡Bienvenidos a Sol de Macacona! Tu socio confiable en la
                  búsqueda del hogar perfecto. Donde cada propiedad es una
                  oportunidad única y cada inversión es un paso hacia un futuro
                  brillante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center text-white">
        <h3>© 2023 NoMercy.Dev. Todos los derechos reservados.</h3>
        <p>Terminos y condiciones | Politicas de Privacidad</p>
      </div>
    </footer>
  );
};

export default Footer;
