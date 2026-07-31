import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Headphones,
  MessageCircle,
} from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "3 días",
    title: "Garantía",
    description: "Todos nuestros productos cuentan con garantía.",
  },
  {
    icon: Truck,
    value: "UANL",
    title: "Entregas",
    description: "Ciudad Universitaria y Mitras Poniente.",
  },
  {
    icon: Headphones,
    value: "OEM",
    title: "Calidad",
    description: "Excelente calidad en todos nuestros productos.",
  },
  {
    icon: MessageCircle,
    value: "24/7",
    title: "WhatsApp",
    description: "Respondemos lo más rápido posible.",
  },
];

function Stats() {
  return (
    <section className="bg-[#050816] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-[#08111F] border border-blue-900/30 rounded-3xl p-8 text-center hover:border-blue-500 transition-all duration-300"
              >

                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-6">

                  <Icon size={36} color="white" />

                </div>

                <h2 className="text-blue-400 text-5xl font-black">

                  {item.value}

                </h2>

                <h3 className="text-white text-2xl font-bold mt-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-7">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Stats;