import Reveal from "../common/Reveal";

const steps = [
  {
    n: "01",
    title: "Elige tu producto.",
    text: "Explora la tienda y abre cualquier producto para ver sus detalles y su precio.",
  },
  {
    n: "02",
    title: "Escríbenos por WhatsApp.",
    text: "Toca «Pedir» y se abre un mensaje listo con el producto y el precio.",
  },
  {
    n: "03",
    title: "Recíbelo en persona.",
    text: "Confirmamos contigo el punto y la hora de entrega.",
  },
];

export default function Steps() {
  return (
    <section id="como-comprar" className="scroll-mt-12 bg-white px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div>
          <Reveal className="md:sticky md:top-32">
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Comprar es <span className="text-gradient">así de fácil.</span>
            </h2>
            <p className="mt-5 max-w-sm text-lg text-graphite">
              Sin registros, sin carritos y sin pagos en línea. Solo tres pasos.
            </p>
          </Reveal>
        </div>

        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.08} className="rounded-[2rem] bg-porcelain p-8 md:p-10">
                <span className="text-gradient text-5xl font-semibold tracking-[-0.04em] md:text-6xl">{s.n}</span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">{s.title}</h3>
                <p className="mt-2 text-graphite">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
