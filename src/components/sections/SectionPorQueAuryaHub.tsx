import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const BENEFITS = [
  {
    title: "Estratégia antes da execução",
    description: "Entendemos onde mirar antes de agir.",
  },
  {
    title: "Decisões inteligentes",
    description: "Dados, análise e visão de negócio guiam cada escolha.",
  },
  {
    title: "Visão estratégica de negócio",
    description:
      "Unimos estratégia, posicionamento e organização para gerar crescimento real.",
  },
  {
    title: "Acompanhamento próximo",
    description:
      "Não entregamos apenas planos. Caminhamos junto para garantir resultado.",
  },
] as const;

export function SectionPorQueAuryaHub() {
  return (
    <section
      id="por-que-aurya-hub"
      className="bg-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="por-que-heading"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-7xl">
        <h2
          id="por-que-heading"
          className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          POR QUE AURYA HUB
        </h2>
        <p className="mt-4 font-heading text-xl font-semibold text-primary sm:text-2xl">
          Por que a Aurya Hub?
        </p>
        <p className="mt-2 text-lg font-medium text-secondary">
          Porque crescimento não acontece no improviso.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-white/20 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-bold text-primary">
                {title}
              </h3>
              <p className="mt-3 text-base text-text-primary">{description}</p>
            </article>
          ))}
        </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
