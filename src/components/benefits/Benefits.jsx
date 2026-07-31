import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  MessageCircle,
  Headphones,
} from "lucide-react";

const benefits = [

  {
    icon: ShieldCheck,
    title: "Garantía de 3 días",
    text: "Todos nuestros productos cuentan con garantía para que compres con tranquilidad.",
  },

  {
    icon: Truck,
    title: "Entrega rápida",
    text: "Entregas en Ciudad Universitaria UANL y Mitras Poniente.",
  },

  {
    icon: MessageCircle,
    title: "Atención rápida",
    text: "Respondemos tus mensajes por WhatsApp lo más pronto posible.",
  },

  {
    icon: Headphones,
    title: "Calidad OEM Premium",
    text: "AirPods, cables y cargadores de excelente calidad.",
  },

];

function Benefits() {

  return (

    <section className="py-28 pb-44 px-6 bg-[#08111F]">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-white text-5xl font-black">

          ¿Por qué comprar en

          <span className="text-blue-500">

            {" "}WhiteCore?

          </span>

        </h2>

        <p className="text-center text-gray-400 mt-6 text-xl max-w-3xl mx-auto">

          Tecnología OEM de excelente calidad,
          garantía en todos los productos
          y atención rápida.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

          {benefits.map((item,index)=>{

            const Icon=item.icon;

            return(

              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:40,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  delay:index*.15,
                }}

                whileHover={{
                  y:-10,
                  scale:1.02,
                }}

                className="bg-[#111827] border border-blue-900/30 rounded-3xl p-8 text-center hover:border-blue-500 transition"

              >

                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-6">

                  <Icon color="white" size={36}/>

                </div>

                <h3 className="text-white text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-8 mt-5">

                  {item.text}

                </p>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>

  )

}

export default Benefits;

