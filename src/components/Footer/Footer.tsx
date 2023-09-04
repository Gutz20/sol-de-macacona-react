import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="bg-slate-800 relative">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-5 gap-8 pt-2 max-lg:gap-2">
          <div className="col-span-2 max-sm:col-span-5 max-lg:col-span-5">
            <div className="flex max-sm:flex-col max-sm:items-center max-lg:flex-col">
              <div>
                <img
                  src="./logo-sin-fondo.png"
                  alt="Logo"
                  className="max-sm:h-[150px] max-lg:mx-auto max-lg:h-[150px]"
                />

                <h2 className="uppercase text-sm text-center text-white font-bold max-lg:text-lg">
                  Contamos con financieamiento bancario
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-white text-sm font-semibold max-sm:text-xs max-lg:text-lg">
                  ¡Bienvenidos a Sol de Macacona! Tu socio confiable en la
                  búsqueda del hogar perfecto. Donde cada propiedad es una
                  oportunidad única y cada inversión es un paso hacia un futuro
                  brillante.
                </p>
              </div>
              <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
            </div>
          </div>
          <div className="col-span-1 max-sm:col-span-5 max-lg:col-span-5">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl text-white font-bold">Menu</h2>
              <ul>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  Inicio
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  Sobre Nosotros
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  Ubicación
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  Proyectos en Venta
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  Lotes
                </li>
              </ul>
            </div>
            <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
          </div>
          <div className="col-span-1 max-sm:col-span-5 max-lg:col-span-5">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl text-white font-bold">Redes Sociales</h2>
              <ul>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <FacebookIcon /> Facebook
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <InstagramIcon /> Instagram
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <WhatsAppIcon/> Whatsapp
                </li>
              </ul>
            </div>
            <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
          </div>
          <div className="col-span-1 max-sm:col-span-5 max-lg:col-span-5">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl text-white font-bold">Otros</h2>
              <ul>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <LocationOnIcon /> Panamericana Sur Km 295 Subtanjalla - Ica
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <EmailIcon /> alguncorreo@gmail.com
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <PhoneIcon /> +51 905 452 633
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-400 h-[0.5px] my-2"></div>
        <div className="container mx-auto flex justify-between items-center text-white max-sm:flex-col">
          <h3>© 2023 NoMercy.Dev. Todos los derechos reservados.</h3>
          <p>Terminos y condiciones | Politicas de Privacidad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
