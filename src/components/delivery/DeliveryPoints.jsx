import { Clock, MapPin, Navigation } from "lucide-react";
import deliveryPoints from "../../data/delivery";
import { wa } from "../../data/site";

export default function DeliveryPoints() {
  return (
    <section id="entregas" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <h2 className="text-center font-display text-4xl font-extrabold tracking-[-0.035em] md:text-6xl">
        Puntos de entrega.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-graphite">
        Encuentra tu punto de entrega y llega fácil con Google Maps. Confirma tu pedido por WhatsApp.
      </p>

      <ul className="mt-14 grid gap-5 lg:grid-cols-2">
        {deliveryPoints.map((d) => (
          <li key={d.id} className="overflow-hidden rounded-[2rem] bg-white">
            <iframe
              src={d.embed}
              title={`Mapa: ${d.name}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />

            <div className="p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-porcelain text-cobalt">
                  <MapPin size={22} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">{d.name}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-graphite">
                    <Clock size={15} className="shrink-0" />
                    {d.schedule}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-graphite">{d.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={wa(`Hola White Core, quiero coordinar una entrega en: ${d.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cobalt px-6 py-2.5 text-sm font-medium text-white transition hover:bg-ink"
                >
                  Coordinar entrega
                </a>
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cobalt hover:underline"
                >
                  <Navigation size={16} />
                  Abrir Google Maps
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}