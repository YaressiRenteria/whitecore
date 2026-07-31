import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

const locations = [
  {
    title: "Ciudad Universitaria UANL",
    schedule: "Lunes a Viernes • 5:00 PM - 9:30 PM",
    description:
      "Realizamos entregas en todas las facultades de Ciudad Universitaria UANL.",
    maps:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7188.702073613057!2d-100.311689!3d25.72590245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662945396f6d5fb%3A0x3c1bded18c161920!2sNi%C3%B1os%20H%C3%A9roes%2C%20Ciudad%20Universitaria%2C%20San%20Nicol%C3%A1s%20de%20los%20Garza%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1785357286645!5m2!1ses-419!2smx",
    link:
      "https://maps.app.goo.gl/mLh9mufPyZD4J5iNA",
  },

  {
    title: "Mitras Poniente",
    schedule: "Todos los días",
    description:
      "Entregamos en Villas del Poniente y Mitras Poniente.",
    maps:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14370.553884641638!2d-100.43066114999996!3d25.782502350000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866290a2591b5299%3A0xa0572f762f3b69b3!2sVillas%20del%20Poniente%2C%20Mitras%20Poniente%2C%2066023%20Villas%20del%20Poniente%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1785382608088!5m2!1ses-419!2smx",
    link:
      "https://maps.app.goo.gl/KQstdhRT2qTnVjhq9",
  },
];


function DeliveryPoints() {

  return (

    <section
      id="entregas"
      className="pt-12 pb-32 px-6 bg-[#050816]"
    >

      <div className="max-w-6xl mx-auto">


        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="
          text-center
          text-4xl
          md:text-5xl
          font-black
          text-white
          "
        >

          Puntos de{" "}
          <span className="text-blue-500">
            Entrega
          </span>

        </motion.h2>



        <p
        className="
        text-center
        text-gray-400
        mt-6
        text-lg
        "
        >

          Encuentra nuestros puntos de entrega y llega fácilmente con Google Maps.

        </p>



        <div className="grid lg:grid-cols-2 gap-10 mt-14">


        {locations.map((location,index)=>(


          <motion.div

          key={index}

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{once:true}}

          className="
          bg-[#08111F]
          rounded-3xl
          overflow-hidden
          border
          border-blue-900/40
          shadow-xl
          "

          >


            {/* MAPA */}

            <iframe

            src={location.maps}

            className="
            w-full
            h-[260px]
            "

            style={{
              border:0
            }}

            loading="lazy"

            allowFullScreen

            title={location.title}

            />



            {/* INFORMACION ABAJO */}


            <div className="p-7">


              <div
              className="
              flex
              items-center
              gap-4
              "
              >


                <div
                className="
                w-12
                h-12
                rounded-full
                bg-blue-600
                flex
                items-center
                justify-center
                "
                >

                  <MapPin
                  color="white"
                  />

                </div>


                <div>

                  <h3
                  className="
                  text-white
                  text-xl
                  font-bold
                  "
                  >

                    {location.title}

                  </h3>


                  <div
                  className="
                  flex
                  gap-2
                  items-center
                  text-gray-400
                  "
                  >

                    <Clock size={16}/>

                    {location.schedule}


                  </div>


                </div>


              </div>



              <p
              className="
              text-gray-400
              mt-5
              "
              >

                {location.description}

              </p>



              <a

              href={location.link}

              target="_blank"

              rel="noreferrer"

              className="
              mt-6
              inline-flex
              items-center
              gap-3
              bg-blue-600
              hover:bg-blue-700
              px-6
              py-3
              rounded-xl
              text-white
              font-bold
              transition
              "

              >

                <Navigation size={20}/>

                Abrir Google Maps

              </a>


            </div>



          </motion.div>


        ))}


        </div>



      </div>


    </section>

  );

}


export default DeliveryPoints;