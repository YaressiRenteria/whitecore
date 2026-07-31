import { motion } from "framer-motion";
import { useState } from "react";

import ProductModal from "../modal/ProductModal";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductButtons from "./ProductButtons";

function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.015,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="
          group
          relative
          bg-[#08111F]
          rounded-3xl
          overflow-hidden
          border
          border-blue-900/30
          hover:border-blue-500
          transition-all
          duration-500
          flex
          flex-col
          h-full
          shadow-xl
          hover:shadow-[0_25px_60px_rgba(59,130,246,.35)]
        "
      >
        {/* Reflejo */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700">
          <div className="absolute -left-44 top-0 h-full w-24 rotate-12 bg-white/10 blur-xl animate-[shine_2.5s_linear_infinite]" />
        </div>

        <ProductImage
          product={product}
          onOpen={() => setOpen(true)}
        />

        <div className="flex flex-col flex-1 p-6">
          <ProductInfo product={product} />

          <ProductButtons
            product={product}
            onOpen={() => setOpen(true)}
          />
        </div>
      </motion.div>

      <ProductModal
        product={product}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default ProductCard;