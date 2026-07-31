import { motion } from "framer-motion";
import products from "../../data/products";

function RelatedProducts({
  currentProduct,
  onSelectProduct,
}) {

  const related = products
    .filter(
      (item) => item.id !== currentProduct.id
    )
    .slice(0,3);

  return (

    <div className="mt-14">

      <h3 className="text-white text-2xl font-bold mb-6">
        También te puede interesar
      </h3>

      <div className="grid md:grid-cols-3 gap-5">

        {related.map((item)=>(

          <motion.div

            key={item.id}

            whileHover={{
              y:-6,
              scale:1.03
            }}

            whileTap={{
              scale:.98
            }}

            onClick={()=>onSelectProduct(item)}

            className="cursor-pointer bg-[#111827] rounded-2xl overflow-hidden border border-blue-900/30 hover:border-blue-500 transition"

          >

            <img

              src={item.image}

              alt={item.name}

              className="w-full h-36 object-cover"

            />

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