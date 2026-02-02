import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function SectionQuemSomos() {
  return (
    <section
      id="quem-somos"
      className="relative overflow-hidden bg-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="quem-somos-heading"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-4xl">
          <h2
            id="quem-somos-heading"
            className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            QUEM SOMOS
          </h2>
          <p className="mt-6 font-heading text-2xl font-semibold text-primary sm:text-3xl">
            Estratégia de negócio para quem quer crescer com direção
          </p>
          <p className="mt-3 text-lg font-medium text-secondary sm:text-xl">
            Crescer sem estratégia custa caro.
          </p>
          <div className="mt-8 space-y-4 text-base text-text-primary sm:text-lg">
            <p>
              A Aurya Hub ajuda negócios a tomarem decisões certas antes de
              executar, unindo visão estratégica, posicionamento e organização
              para gerar resultados reais.
            </p>
            <p>
              Trabalhamos com quem presta serviço e com pequenas empresas que
              precisam de clareza, direção e acompanhamento para crescer de forma
              inteligente.
            </p>
            <p className="font-medium text-primary">
              Aqui, estratégia vem antes da execução.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
