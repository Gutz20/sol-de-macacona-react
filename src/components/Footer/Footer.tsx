import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-5 gap-8 pt-2">
          <div className="col-span-2">
            <div className="flex">
              <div>
                <img
                  src="./logo-sin-fondo.png"
                  alt="Logo"
                  className=""
                />
                <h2 className="uppercase text-sm text-center text-white font-bold">
                  Contamos con financieamiento bancario
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-white text-sm font-semibold">
                  ¡Bienvenidos a Sol de Macacona! Tu socio confiable en la
                  búsqueda del hogar perfecto. Donde cada propiedad es una
                  oportunidad única y cada inversión es un paso hacia un futuro
                  brillante.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl text-white font-bold">Menu</h2>
            <ul>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                Inicio
              </li>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                Sobre Nosotros
              </li>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                Ubicación
              </li>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                Proyectos en Venta
              </li>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                Lotes
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl text-white font-bold">Redes Sociales</h2>
            <ul>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                <FacebookIcon /> Facebook
              </li>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                <InstagramIcon /> Instagram
              </li>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                <WhatsAppIcon /> Whatsapp
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl text-white font-bold">Otros</h2>
            <ul>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                <LocationOnIcon /> Panamericana Sur Km 295 Subtanjalla - Ica
              </li>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                <EmailIcon /> alguncorreo@gmail.com
              </li>
              <li className="text-gray-400 hover:underline hover:cursor-pointer">
                <PhoneIcon /> +51 905 452 633
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-gray-400 h-[0.5px] my-2"></div>
        <div className="container mx-auto flex justify-between items-center text-white">
          <h3>© 2023 NoMercy.Dev. Todos los derechos reservados.</h3>
          <p>Terminos y condiciones | Politicas de Privacidad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
