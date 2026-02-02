export function SectionConteudos() {
  return (
    <section
      id="conteudos"
      className="bg-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="conteudos-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="conteudos-heading"
          className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          CONTEÚDOS
        </h2>
        <p className="mt-6 text-base text-text-muted sm:text-lg">
          Insights e conteúdos sobre estratégia, posicionamento e crescimento
          de negócios em breve. Acompanhe nossas redes para novidades.
        </p>
      </div>
    </section>
  );
}
