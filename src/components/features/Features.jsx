import { ShieldCheck, Truck, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Garantía de 3 días",
    description:
      "Todos nuestros productos cuentan con garantía para tu tranquilidad.",
  },
  {
    icon: Truck,
    title: "Entrega Personal",
    description:
      "Entregamos en Ciudad Universitaria UANL y Mitras Poniente.",
  },
  {
    icon: MessageCircle,
    title: "Atención Rápida",
    description:
      "Respondemos tus mensajes por WhatsApp lo más rápido posible.",
  },
  {
    icon: Sparkles,
    title: "OEM Premium",
    description:
      "Productos OEM de excelente calidad con excelente rendimiento.",
  },
];

function Features() {
  return (
    <section className="bg-[#08111F] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-5xl font-black">
            ¿Por qué elegir
            <span className="text-blue-500"> White Core?</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Calidad, confianza y atención personalizada.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-[#0B1120] rounded-3xl p-8 border border-blue-900/30 shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">

                  <Icon color="white" size={30} />

                </div>

                <h3 className="text-white text-2xl font-bold">
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

export default Features;