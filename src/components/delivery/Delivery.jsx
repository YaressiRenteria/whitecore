import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

function DeliveryPoints() {

  const locations = [

    {
      title: "Ciudad Universitaria UANL",
      schedule: "Lunes a Viernes • 5:00 PM - 9:30 PM",
      description:
        "Entregas en las diferentes facultades de Ciudad Universitaria.",
      image: "/images/cu-map.jpg",
      link: "https://maps.google.com/",
    },

    {
      title: "Mitras Poniente",
      schedule: "Todos los días",
      description:
        "Punto de entrega en Mitras Poniente.",
      image: "/images/mitras-map.jpg",
      link: "https://maps.google.com/",
    },

  ];

  return (

    <section
      id="entregas"
      className="py-32 px-6 bg-[#08111F]"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2

          initial={{ opacity:0,y:30 }}

          whileInView={{ opacity:1,y:0 }}

          viewport={{ once:true }}

          className="text-center text-5xl font-black text-white"

        >

          Puntos de

          <span className="text-blue-500">

            {" "}Entrega

          </span>

        </motion.h2>

        <motion.p

          initial={{ opacity:0 }}

          whileInView={{ opacity:1 }}

          transition={{ delay:.2 }}

          viewport={{ once:true }}

          className="text-center text-gray-400 text-xl mt-6 max-w-3xl mx-auto"

        >

          Escoge el punto de entrega que más te convenga.

        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {locations.map((location,index)=>(

            <motion.div

              key={index}

              initial={{ opacity:0,y:40 }}

              whileInView={{ opacity:1,y:0 }}

              viewport={{ once:true }}

              transition={{ delay:index*.15 }}

              whileHover={{
                y:-8,
              }}

              className="bg-[#111827] rounded-3xl overflow-hidden border border-blue-900/30 hover:border-blue-500 shadow-xl"

            >

              <img

                src={location.image}

                alt={location.title}

                className="w-full h-72 object-cover"

              />

              <div className="p-8">

                <div className="flex items-center gap-3">

                  <MapPin
                    className="text-blue-500"
                    size={24}
                  />

                  <h3 className="text-white text-3xl font-bold">

                    {location.title}

                  </h3>

                </div>

                <div className="flex items-center gap-3 mt-6">

                  <Clock
                    className="text-blue-400"
                    size={20}
                  />

                  <p className="text-gray-300">

                    {location.schedule}

                  </p>

                </div>

                <p className="text-gray-400 leading-8 mt-6">

                  {location.description}

                </p>

                <a

                  href={location.link}

                  target="_blank"

                  rel="noreferrer"

                  className="mt-8 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl px-8 py-4 text-white font-bold"

                >

                  <Navigation size={20}/>

                  Abrir en Google Maps

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