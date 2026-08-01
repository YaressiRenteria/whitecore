import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ShieldCheck,
  Truck,
  MessageCircle,
  Star,
  Flame,
} from "lucide-react";
import RelatedProducts from "./RelatedProducts";

function ProductModal({ product, open, onClose }) {
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelectedProduct(product);
    setQuantity(1);
  }, [product]);

  if (!selectedProduct) return null;

  const total = selectedProduct.price * quantity;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-[999] p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative bg-[#08111F] rounded-3xl border border-blue-900/30 overflow-hidden max-w-6xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#111827] hover:bg-blue-600 transition flex justify-center items-center z-50"
            >
              <X size={22} color="white" />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Imagen */}
              <div className="bg-[#111827] flex justify-center items-center p-12">
                <motion.img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="w-full max-w-lg object-contain"
                />
              </div>

              {/* Información */}
              <div className="p-10 flex flex-col">
                <div className="flex gap-3 flex-wrap">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedProduct.category}
                  </span>

                  {selectedProduct.featured && (
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Flame size={16} />
                      Más vendido
                    </span>
                  )}
                </div>

                <h2 className="text-white text-5xl font-black mt-6 leading-tight">
                  {selectedProduct.name}
                </h2>

                <div className="flex items-center gap-1 mt-5">
                  <Star fill="#FFD700" color="#FFD700" size={20} />
                  <Star fill="#FFD700" color="#FFD700" size={20} />
                  <Star fill="#FFD700" color="#FFD700" size={20} />
                  <Star fill="#FFD700" color="#FFD700" size={20} />
                  <Star fill="#FFD700" color="#FFD700" size={20} />

                  <span className="ml-3 text-gray-400">
                    OEM Premium
                  </span>
                </div>

                <h3 className="text-blue-400 text-5xl font-black mt-8">
                  ${selectedProduct.price}
                </h3>

                <p className="text-gray-400 text-lg leading-8 mt-8">
                  {selectedProduct.description}
                </p>

                <div className="space-y-5 mt-10">
                  <div className="flex items-center gap-3 text-white">
                    <ShieldCheck color="#3B82F6" />
                    Garantía de {selectedProduct.warranty}
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <Truck color="#3B82F6" />
                    Entrega en Ciudad Universitaria UANL y Mitras Poniente
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <MessageCircle color="#3B82F6" />
                    Atención rápida por WhatsApp
                  </div>
                </div>

                {/* Cantidad */}
                <div className="mt-10">
                  <p className="text-gray-400 mb-4">
                    Cantidad
                  </p>

                  <div className="flex items-center gap-5">
                    <button
                      onClick={() =>
                        quantity > 1 && setQuantity(quantity - 1)
                      }
                      className="w-12 h-12 rounded-xl bg-[#111827] hover:bg-blue-600 text-white text-2xl transition"
                    >
                      -
                    </button>

                    <span className="text-white text-3xl font-bold">
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 rounded-xl bg-[#111827] hover:bg-blue-600 text-white text-2xl transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="mt-10 bg-[#111827] rounded-2xl p-6 border border-blue-900/30">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-lg">
                      Total
                    </span>

                    <span className="text-white text-4xl font-black">
                      ${total}
                    </span>
                  </div>
                </div>

                {/* Botón WhatsApp */}
                <button
                  onClick={() => {
                    const message = encodeURIComponent(
`Hola WhiteCore 👋

Me interesa comprar el siguiente producto:

📦 Producto: ${selectedProduct.name}

🔢 Cantidad: ${quantity}

💲 Total: $${total}

¿Está disponible?
Me gustaría recibir información sobre la entrega.`
                    );

                    window.open(
                      `https://wa.me/528129301783?text=${message}`,
                      "_blank"
                    );
                  }}
                  className="
                    mt-8
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    py-5
                    rounded-2xl
                    font-black
                    text-lg
                    flex
                    items-center
                    justify-center
                    gap-3
                    transition
                    shadow-lg
                    shadow-blue-600/20
                  "
                >
                  <MessageCircle size={24} />
                  Comprar por WhatsApp
                </button>

                {/* Productos relacionados */}
                <div className="mt-12">
                  <h3 className="text-white text-2xl font-bold mb-6">
                    Productos relacionados
                  </h3>

                  <RelatedProducts
                    currentProduct={selectedProduct}
                    onSelectProduct={(newProduct) => {
                      setSelectedProduct(newProduct);
                      setQuantity(1);
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProductModal;