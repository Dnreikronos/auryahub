"use client";

import { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          <p className="mt-6 text-lg font-medium text-secondary">
            Porque crescimento não acontece no improviso.
          </p>
          <ul className="mt-12 space-y-3" role="list">
            {BENEFITS.map(({ title, description }, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={title}>
                  <article className="overflow-hidden rounded-xl border border-primary/15 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex((prev) => (prev === index ? null : index))
                      }
                      className="flex w-full min-h-[44px] items-center justify-between gap-4 px-6 py-4 text-left outline-none transition-colors hover:bg-surface-alt/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                      aria-expanded={isOpen}
                      aria-controls={`por-que-desc-${index}`}
                      id={`por-que-trigger-${index}`}
                    >
                      <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-primary">
                        {title}
                      </h3>
                      <span
                        className="flex shrink-0 text-primary transition-transform duration-300 ease-out"
                        aria-hidden
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`por-que-desc-${index}`}
                      role="region"
                      aria-labelledby={`por-que-trigger-${index}`}
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="border-t border-primary/10 px-6 py-4 text-base text-text-primary">
                          {description}
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
