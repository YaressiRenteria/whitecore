import { motion } from "framer-motion";
import PrimaryButton from "../ui/PrimaryButton";

function Hero() {
  return (
    <section
      id="inicio"
      style={{
        background:
          "linear-gradient(135deg,#020617 0%,#08111F 45%,#030712 100%)",
      }}
      className="min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 pt-28 md:pt-32 pb-16">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* TEXTO */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >

            <p className="uppercase tracking-[5px] md:tracking-[8px] text-blue-500 font-semibold mb-5">
              WhiteCore
            </p>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">

              Tecnología

              <br />

              <span className="text-blue-500">
                Premium
              </span>

            </h1>

            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-8 mt-8 max-w-xl mx-auto lg:mx-0">

              Accesorios OEM de excelente calidad para dispositivos Apple.

              <br />

              Entregas en Ciudad Universitaria UANL y Mitras Poniente.

              <br />

              Garantía de{" "}
              <span className="text-blue-400 font-bold">
                3 días
              </span>{" "}
              en todos los productos.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

              <PrimaryButton
                text="Ver Catálogo"
                href="#catalogo"
              />

              <PrimaryButton
                text="WhatsApp"
                href="https://wa.me/528129301783"
              />

            </div>

          </motion.div>

          {/* IMAGEN */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="flex-1 flex justify-center"
          >

            <img
              src="/products/hero-productos.jpg"
              alt="Productos WhiteCore"
              className="
                w-full
                max-w-[300px]
                sm:max-w-[420px]
                lg:max-w-[650px]
                object-contain
              "
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
