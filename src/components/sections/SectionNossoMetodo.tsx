import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const PILLARS = [
  {
    title: "DIAGNÓSTICO",
    description:
      "Analisamos o negócio como um todo para identificar pontos fortes, falhas e oportunidades. Aqui nasce a clareza necessária para tomar decisões estratégicas.",
  },
  {
    title: "ESTRATÉGIA",
    description:
      "Definimos um caminho prático e personalizado, alinhado à realidade do negócio, com foco em crescimento e organização.",
  },
  {
    title: "ACOMPANHAMENTO",
    description:
      "Acompanhamos a execução, ajustamos rotas e otimizamos ações para garantir eficiência e resultado.",
  },
] as const;

export function SectionNossoMetodo() {
  return (
    <section
      id="nosso-metodo"
      className="bg-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="nosso-metodo-heading"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-7xl">
        <h2
          id="nosso-metodo-heading"
          className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          NOSSO MÉTODO
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ title, description }, index) => (
            <article
              key={title}
              className="group rounded-xl border border-primary/15 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
            >
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-primary">
                {title}
              </h3>
              <p className="mt-4 text-base text-text-primary">{description}</p>
            </article>
          ))}
        </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
