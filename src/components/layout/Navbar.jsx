import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <motion.header

      initial={{ y: -100 }}

      animate={{ y: 0 }}

      transition={{ duration: .5 }}

      className={`

        fixed

        top-0

        left-0

        right-0

        z-50

        transition-all

        duration-500

        ${
          scrolled

            ? "bg-[#050816]/80 backdrop-blur-xl py-3 shadow-2xl border-b border-blue-900/30"

            : "bg-transparent py-6"

        }

      `}

    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">


        {/* Logo */}

        <a

          href="#inicio"

          className="flex items-center gap-4"

        >

          <img

            src="/logo.png"

            alt="WhiteCore"

            className={`

              object-contain

              transition-all

              duration-500

              ${
                scrolled

                  ? "w-12 h-12"

                  : "w-16 h-16"

              }

            `}

          />


          <div>

            <h2

              className="

              text-white

              font-black

              tracking-widest

              text-2xl

              "

            >

              WhiteCore

            </h2>


            <p

              className="

              text-blue-400

              text-sm

              "

            >

              Tecnología Premium

            </p>


          </div>


        </a>



        {/* Menú */}

        <nav className="hidden md:flex gap-10">


          {[

            ["Inicio","#inicio"],

            ["Catálogo","#catalogo"],

            ["Entregas","#entregas"],

            ["Contacto","#contacto"],

          ].map(([name,link])=>(


            <a

              key={name}

              href={link}

              className="

                relative

                text-gray-300

                hover:text-white

                font-medium

                transition

                after:absolute

                after:left-0

                after:-bottom-2

                after:h-[2px]

                after:w-0

                after:bg-blue-500

                after:transition-all

                hover:after:w-full

              "

            >

              {name}


            </a>


          ))}


        </nav>


      </div>


    </motion.header>


  );

}


export default Navbar;