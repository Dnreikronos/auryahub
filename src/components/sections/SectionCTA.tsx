const WHATSAPP_URL = "https://wa.link/egrcws";

export function SectionCTA() {
  return (
    <section
      id="cta"
      className="bg-primary px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="cta-heading"
          className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Vamos dar direção ao seu negócio
        </h2>
        <p className="mt-6 text-lg opacity-95 sm:text-xl">
          Se você quer crescer com clareza, estratégia e acompanhamento, a Aurya
          Hub pode te ajudar.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale com a Aurya Hub no WhatsApp"
          className="mt-10 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-white px-8 py-4 font-heading text-lg font-bold text-primary shadow-lg outline-none transition-all duration-200 hover:scale-[1.02] hover:shadow-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
        >
          👉 Fale com a Aurya Hub
        </a>
      </div>
    </section>
  );
}
