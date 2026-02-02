"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#quem-somos" },
  { label: "O que fazemos", href: "#o-que-fazemos" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-primary/15 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#quem-somos"
          className="focus-ring flex shrink-0 items-center gap-2 rounded transition-opacity hover:opacity-90"
          aria-label="Aurya Hub - Ir para início"
        >
          <Image
            src="/logo.png"
            alt="Aurya Hub - Logo"
            width={44}
            height={44}
            priority
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />
          <span className="font-heading text-lg font-bold text-primary sm:text-xl">
            Aurya Hub
          </span>
        </Link>

        <nav
          className="hidden md:flex md:items-center md:gap-8"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="focus-ring text-sm font-medium text-text-primary transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">{menuOpen ? "Fechar" : "Menu"}</span>
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${menuOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-label="Menu mobile"
      >
        <div className="border-t border-primary/15 bg-surface px-4 py-4">
          <nav className="flex flex-col gap-2" aria-label="Navegação mobile">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="focus-ring rounded-lg px-4 py-3 text-base font-medium text-text-primary transition-colors hover:bg-surface-alt hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
