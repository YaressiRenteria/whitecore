import { Clock, MapPin, Navigation } from "lucide-react";
import Reveal from "../common/Reveal";
import deliveryPoints from "../../data/delivery";
import { wa } from "../../data/site";

export default function DeliveryPoints() {
  return (
    <section id="entregas" className="scroll-mt-12 bg-white px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Puntos de entrega. <span className="text-graphite">Llega fácil con Google Maps.</span>
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 lg:grid-cols-2">
          {deliveryPoints.map((d, i) => (
            <li key={d.id}>
              <Reveal delay={i * 0.1} className="group h-full overflow-hidden rounded-[2rem] bg-porcelain">
                <div className="overflow-hidden">
                  <iframe
                    src={d.embed}
                    title={`Mapa: ${d.name}`}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full border-0 grayscale transition duration-700 group-hover:grayscale-0"
                  />
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-cobalt">
                      <MapPin size={22} />
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{d.name}</h3>
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
                      className="btn-primary px-5 py-2.5 text-[15px]"
                    >
                      Coordinar entrega
                    </a>
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[15px] text-cobalt hover:underline"
                    >
                      <Navigation size={16} />
                      Abrir Google Maps
                    </a>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
