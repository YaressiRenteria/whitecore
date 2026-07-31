import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/528129301783"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="fixed bottom-8 right-8 z-[9999]"
    >
      {/* Escritorio */}

      <div
        className="
          hidden
          md:flex
          items-center
          gap-4
          bg-[#08111F]/95
          backdrop-blur-lg
          border
          border-blue-700/40
          rounded-2xl
          px-6
          py-4
          shadow-[0_10px_40px_rgba(0,0,0,.45)]
          hover:border-blue-500
          transition-all
          duration-300
        "
      >
        <div
          className="
            w-14
            h-14
            rounded-full
            bg-[#25D366]
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <MessageCircle color="white" size={28} />
        </div>

        <div>
          <h3 className="text-white font-bold text-lg">
            ¿Necesitas ayuda?
          </h3>

          <p className="text-gray-400 text-sm">
            Escríbenos por WhatsApp
          </p>
        </div>
      </div>

      {/* Celular */}

      <div
        className="
          md:hidden
          w-16
          h-16
          rounded-full
          bg-[#25D366]
          flex
          items-center
          justify-center
          shadow-[0_10px_30px_rgba(0,0,0,.45)]
        "
      >
        <MessageCircle color="white" size={30} />
      </div>
    </motion.a>
  );
}

export default WhatsAppFloat;