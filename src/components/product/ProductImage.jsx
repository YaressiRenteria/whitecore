import { motion } from "framer-motion";

function ProductImage({ product, onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="
        relative
        h-64
        sm:h-72
        lg:h-80
        overflow-hidden
        cursor-pointer
        bg-[#08111F]
        flex
        items-center
        justify-center
        group
      "
    >
      {product.featured && (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            absolute
            top-4
            left-4
            z-20
            bg-yellow-400
            text-black
            px-4
            py-2
            rounded-full
            text-xs
            font-bold
            shadow-lg
          "
        >
          ⭐ Más vendido
        </motion.div>
      )}

      <motion.img
        src={product.image}
        alt={product.name}
        loading="lazy"
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          select-none
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#08111F]/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export default ProductImage;