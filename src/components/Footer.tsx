import Link from "next/link";

const WHATSAPP_URL = "https://wa.link/egrcws";
const INSTAGRAM_URL = "https://www.instagram.com/auryahub/";
const PHONE = "(51) 9238-6077";
const EMAIL = "auryahub@gmail.com";

export function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-white/10 bg-primary-dark text-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-bold">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-90">
              <li>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-block rounded outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                >
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-block rounded outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold">WhatsApp</h3>
            <p className="mt-4 text-sm opacity-90">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded font-medium outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
              >
                Fale com a Aurya Hub
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold">Instagram</h3>
            <p className="mt-4 text-sm opacity-90">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
              >
                @auryahub
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold">Aurya Hub</h3>
            <p className="mt-4 text-sm opacity-90">
              Estratégia de negócio para quem quer crescer com direção.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Aurya Hub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
