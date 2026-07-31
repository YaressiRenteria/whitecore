import { useState } from "react";
import { motion } from "framer-motion";
import products from "../../data/products";
import ProductCard from "../product/ProductCard";
import SectionTitle from "../ui/SectionTitle";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function Catalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "Todos" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="catalogo"
      className="py-32 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Nuestro Catálogo"
          subtitle="Encuentra el accesorio perfecto para tu dispositivo."
        />

        {/* Buscador */}
        <div className="mt-24 mb-16">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* Categorías */}
        <div className="flex justify-center mb-24">
          <CategoryFilter
            category={category}
            setCategory={setCategory}
          />
        </div>

        {/* Espacio extra para que el hover nunca tape los botones */}
        <div className="h-10"></div>

        {/* Productos */}
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-400 text-xl py-24">
            No se encontraron productos.
          </div>
        ) : (
          <div
            className="
              grid
              gap-x-10
              gap-y-12
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                <ProductCard
                  product={product}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalog;