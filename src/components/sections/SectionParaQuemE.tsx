import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const BULLETS = [
  "Sentem que estão fazendo muito e avançando pouco",
  "Querem crescer, mas não sabem exatamente por onde começar",
  "Precisam de organização, clareza e direção",
  "Estão cansados de testar sem estratégia",
] as const;

export function SectionParaQuemE() {
  return (
    <section
      id="para-quem-e"
      className="bg-surface-alt px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="para-quem-e-heading"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-4xl">
        <h2
          id="para-quem-e-heading"
          className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          PARA QUEM É
        </h2>
        <p className="mt-6 font-heading text-xl font-semibold text-primary sm:text-2xl">
          Para quem é a Aurya Hub?
        </p>
        <p className="mt-4 text-base text-text-primary sm:text-lg">
          Para negócios que:
        </p>
        <ul className="mt-6 space-y-3 text-base text-text-primary sm:text-lg" role="list">
          {BULLETS.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base text-text-primary sm:text-lg">
          Atendemos prestadores de serviço e empresas que desejam crescer com
          inteligência e segurança.
        </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
