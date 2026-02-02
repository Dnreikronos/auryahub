import type { Metadata, Viewport } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurya Hub | Estratégia de negócio para quem quer crescer com direção",
  description:
    "A Aurya Hub ajuda negócios a tomarem decisões certas antes de executar, unindo visão estratégica, posicionamento e organização para gerar resultados reais.",
  keywords: [
    "consultoria estratégica",
    "negócios",
    "crescimento",
    "estratégia",
    "marketing",
    "fiscal",
    "Aurya Hub",
  ],
  authors: [{ name: "Aurya Hub", url: "https://auryahub.com" }],
  openGraph: {
    title: "Aurya Hub | Estratégia de negócio para quem quer crescer",
    description:
      "Crescer sem estratégia custa caro. Estratégia vem antes da execução.",
    type: "website",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d1c5c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cinzel.variable}>
      <body className="min-h-screen flex flex-col bg-surface">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
