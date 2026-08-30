
import { motion } from "framer-motion";
import products from "../../data/products";

function RelatedProducts({
  currentProduct,
  onSelectProduct,
}) {

  // Primero busca productos de la misma categoría
  const sameCategory = products.filter(
    (item) =>
      item.id !== currentProduct.id &&
      item.category === currentProduct.category
  );

  // Si no hay suficientes de la misma categoría,
  // completa con otros productos
  const otherProducts = products.filter(
    (item) =>
      item.id !== currentProduct.id &&
      item.category !== currentProduct.category
  );

  const related = [
    ...sameCategory,
    ...otherProducts,
  ].slice(0, 3);

  return (

    <div className="mt-14">

      <h3 className="text-white text-2xl font-bold mb-6">
        También te puede interesar
      </h3>

      <div className="grid md:grid-cols-3 gap-5">

        {related.map((item) => (

          <motion.div
            key={item.id}

            whileHover={{
              y: -6,
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.98,
            }}

            onClick={() => onSelectProduct(item)}

            className="
              cursor-pointer
              bg-[#111827]
              rounded-2xl
              overflow-hidden
              border
              border-blue-900/30
              hover:border-blue-500
              transition
            "
          >

            <div className="w-full h-36 bg-[#08111F] flex items-center justify-center overflow-hidden">

              <motion.img
                src={item.image}
                alt={item.name}
                loading="lazy"

                whileHover={{
                  scale: 1.08,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="
                  w-full
                  h-full
                  object-contain
                  p-3
                "
              />

            </div>

            <div className="p-4">

              <h4 className="text-white font-semibold min-h-[48px]">
                {item.name}
              </h4>

              <p className="text-blue-400 font-bold mt-2">
                ${item.price}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Ver producto →
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );

}

export default RelatedProducts;
