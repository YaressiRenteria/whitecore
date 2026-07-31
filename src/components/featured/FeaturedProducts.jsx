import products from "../../data/products";
import ProductCard from "../product/ProductCard";
import SectionTitle from "../ui/SectionTitle";

function FeaturedProducts() {

  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (

    <section className="py-24 px-6 bg-[#08111F]">

      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="⭐ Productos Destacados"
          subtitle="Los favoritos de nuestros clientes"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">

          {featuredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default FeaturedProducts;