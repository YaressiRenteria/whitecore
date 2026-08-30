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
              bg-[#08111F]
              rounded-3xl
              overflow-hidden
              border
              border-blue-900/30
              hover:border-blue-500
              transition-all
              duration-500
              shadow-xl
              hover:shadow-[0_25px_60px_rgba(59,130,246,.35)]
            "
          >

            {/* Imagen del producto */}
            <div
              className="
                relative
                h-72
                sm:h-80
                lg:h-96
                w-full
                overflow-hidden
                bg-[#08111F]
                flex
                items-center
                justify-center
                group
              "
            >

              <motion.img
                src={item.image}
                alt={item.name}
                loading="lazy"

                whileHover={{
                  scale: 1.15,
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

              {/* Degradado */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#08111F]/30
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

            </div>

            {/* Información del producto */}
            <div className="p-6">

              <h4
                className="
                  text-white
                  font-semibold
                  text-lg
                  min-h-[48px]
                "
              >
                {item.name}
              </h4>

              <p
                className="
                  text-blue-400
                  font-bold
                  text-lg
                  mt-2
                "
              >
                ${item.price}
              </p>

              <p
                className="
                  text-gray-500
                  text-sm
                  mt-2
                "
              >
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

