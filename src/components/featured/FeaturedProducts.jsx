import SmartImg from "../common/SmartImg";
import products from "../../data/products";
import { pickFeatured, trackClick } from "../../data/popularity";
import { formatPrice, wa } from "../../data/site";

// Se calcula una vez al cargar la página, así no cambian mientras navegas
const featured = pickFeatured(products, 3);

export default function FeaturedProducts() {
  return (
    <section id="destacados" className="mx-auto max-w-6xl scroll-mt-16 px-6 pb-24">
      <h2 className="text-center font-display text-4xl font-extrabold tracking-[-0.035em] md:text-6xl">
        Destacados.
      </h2>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {featured.map((p, i) => {
          const big = i === 0;
          return (
            <article
              key={p.id}
              className={`overflow-hidden rounded-[2rem] px-8 pt-12 text-center ${
                big ? "bg-ink text-porcelain md:col-span-2" : "bg-white"
              }`}
            >
              <h3 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">{p.name}</h3>
              <p className={`mx-auto mt-3 max-w-md ${big ? "text-porcelain/70" : "text-graphite"}`}>
                {p.description}
              </p>
              <p className="mt-5 text-xl font-semibold">
                {formatPrice(p.price)} <span className="text-sm font-normal opacity-60">MXN</span>
              </p>
              <a
                href={wa(`Hola White Core, me interesa: ${p.name} (${formatPrice(p.price)})`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick(p.id)}
                className="mt-5 inline-block rounded-full bg-cobalt px-6 py-2.5 text-sm font-medium text-white transition hover:bg-amber hover:text-ink"
              >
                Pedir por WhatsApp
              </a>

              <div
                className={`mx-auto mt-10 overflow-hidden rounded-t-[1.5rem] ${
                  big ? "max-w-2xl" : "max-w-xs"
                }`}
              >
                <SmartImg
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover ${
                    big ? "aspect-[16/10] object-[50%_60%]" : "aspect-[4/5]"
                  }`}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}