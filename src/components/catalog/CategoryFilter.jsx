import { motion } from "framer-motion";

const categories = [
  "Todos",
  "Audio",
  "Cargadores",
  "Cables",
];

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-5">

      {categories.map((item) => (

        <motion.button
          key={item}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={() => setCategory(item)}
          className={`
            px-9
            py-4
            rounded-2xl
            text-[17px]
            font-bold
            transition-all
            duration-300
            shadow-lg
            ${
              category === item
                ? "bg-blue-600 text-white shadow-blue-500/40"
                : "bg-[#111827] text-gray-300 hover:bg-blue-900/40 hover:text-white"
            }
          `}
        >
          {item}
        </motion.button>

      ))}

    </div>
  );
}

export default CategoryFilter;