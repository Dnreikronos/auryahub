import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function SectionOQueFazemos() {
  return (
    <section
      id="o-que-fazemos"
      className="bg-surface-alt px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="o-que-fazemos-heading"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-4xl">
        <h2
          id="o-que-fazemos-heading"
          className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          O QUE FAZEMOS
        </h2>
        <div className="mt-8 space-y-4 text-base text-text-primary sm:text-lg">
          <p>
            Apoiamos negócios em decisões estratégicas que impactam crescimento,
            vendas e organização.
          </p>
          <p>Nada de ações soltas ou achismo.</p>
          <p>
            Analisamos o cenário, definimos o melhor caminho e acompanhamos a
            execução para garantir que a estratégia funcione na prática.
          </p>
        </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
