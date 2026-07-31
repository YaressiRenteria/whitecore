import {
  MessageCircle,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-blue-900/30">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <img
              src="/logo.png"
              alt="WhiteCore"
              className="w-20 mb-6"
            />

            <h2 className="text-white text-3xl font-bold">
              WhiteCore
            </h2>

            <p className="text-gray-400 mt-5 leading-8">

              Tecnología OEM de excelente calidad.

              <br />

              AirPods, cargadores y accesorios.

            </p>

          </div>

          {/* Enlaces */}

          <div>

            <h3 className="text-white text-xl font-bold">

              Navegación

            </h3>

            <div className="flex flex-col gap-4 mt-6">

              <a href="#inicio" className="text-gray-400 hover:text-blue-400">

                Inicio

              </a>

              <a href="#catalogo" className="text-gray-400 hover:text-blue-400">

                Catálogo

              </a>

              <a href="#entregas" className="text-gray-400 hover:text-blue-400">

                Entregas

              </a>

            </div>

          </div>

          {/* Información */}

          <div>

            <h3 className="text-white text-xl font-bold">

              Información

            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">

                <ShieldCheck
                  className="text-blue-500"
                  size={20}
                />

                <span className="text-gray-400">

                  Garantía de 3 días.

                </span>

              </div>

              <div className="flex gap-3">

                <MapPin
                  className="text-blue-500"
                  size={20}
                />

                <span className="text-gray-400">

                  Entregas en UANL y Mitras Poniente.

                </span>

              </div>

            </div>

          </div>

          {/* Redes */}

          <div>

            <h3 className="text-white text-xl font-bold">

              Contáctanos

            </h3>

            <div className="flex gap-5 mt-6">

              <a
                href="https://wa.me/528129301783"
                target="_blank"
                rel="noreferrer"
                className="bg-[#111827] p-4 rounded-full hover:bg-blue-600 transition"
              >

                <MessageCircle color="white"/>

              </a>

              <a
                href="https://www.instagram.com/white_c0re?igsh=Ynd4cnRwaGViOHkw"
                target="_blank"
                rel="noreferrer"
                className="bg-[#111827] p-4 rounded-full hover:bg-blue-600 transition"
              >

                <FaInstagram
                  className="text-white"
                  size={22}
                />

              </a>

              <a
                href="https://www.facebook.com/share/198dY4BSt7/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#111827] p-4 rounded-full hover:bg-blue-600 transition"
              >

                <FaFacebookF
                  className="text-white"
                  size={22}
                />

              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-blue-900/20 mt-16 pt-8 text-center">

          <p className="text-gray-500">

            © 2026 WhiteCore · Todos los derechos reservados.

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;