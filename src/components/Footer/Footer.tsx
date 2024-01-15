import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { RiTiktokFill } from "react-icons/ri";
import { Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
                  <Link to="/">Inicio</Link>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <Link to="/about">Sobre Nosotros</Link>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <Link to="/ubication">Ubicación</Link>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <Link to="/proyects">Proyectos en Venta</Link>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <Link to="/lotes">Lotes</Link>
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
                  <FacebookIcon />
                  <a
                    href="https://www.facebook.com/profile.php?id=100089758972647"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <InstagramIcon />{" "}
                  <a
                    href="https://www.instagram.com/soldemacacona?fbclid=IwAR1x9H8-kJMTF58fXLr6QzAKedEcMFrttGvxTLvRHRDS3J_AaSJeHX6DXxI"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <Twitter />{" "}
                  <a
                    href="https://twitter.com/SoldeMacacona?fbclid=IwAR0CUpgfIuNDqhuJmqjBjlcUuxVMGKlyenal7Yb_ubV1x5QwwSNvJysoqsI"
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <WhatsAppIcon />{" "}
                  <a
                    href="https://w.app/SolDeMacacona"
                    target="_blank"
                  >
                    Whatsapp
                  </a>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-4 max-lg:justify-center">
                  <RiTiktokFill />{" "}
                  <a
                    href="https://www.tiktok.com/@soldemacacona?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                  >
                    Tiktok
                  </a>
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
                  <LocationOnIcon />{" "}
                  <a href="https://maps.app.goo.gl/rnLJGUBuf4fKUPND8">
                    Panamericana Sur Km 295 Subtanjalla - Ica
                  </a>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <EmailIcon />
                  <a href="contactanos@soldemacacona.com">
                    contactanos@soldemacacona.com
                  </a>
                </li>
                <li className="text-gray-400 hover:underline hover:cursor-pointer flex items-center gap-2 max-lg:justify-center">
                  <PhoneIcon />
                  <a href="tel:+51 905 452 633">+51 905 452 633</a>
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
