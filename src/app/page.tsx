import React from 'react';
import { Hero } from '@/components/features/home/Hero';
import { Concept } from '@/components/features/home/Concept';
import { LearningPreview } from '@/components/features/home/LearningPreview';
import { LearningPath } from '@/components/features/journey/LearningPath';
import { FeaturedProduct } from '@/components/features/home/FeaturedProduct';
import { FreeContent } from '@/components/features/home/FreeContent';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Concept />
      <LearningPreview />

      {/* Journey Section Integration */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A Jornada do Zero</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Um caminho estruturado para você evoluir de um iniciante total a um desenvolvedor capaz de criar projetos reais.
            </p>
          </div>
          <LearningPath />
        </div>
      </section>

      <FeaturedProduct />
      <FreeContent />

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-dark-900 to-dark-950 border border-border relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/20 blur-3xl rounded-full" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Pronto para escrever <br />
              <span className="text-brand-blue">sua primeira linha?</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              Não espere o momento perfeito. Comece agora com a Linha Zero e transforme sua curiosidade em habilidade técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/produtos">
                <button className="bg-brand-blue text-white px-8 py-4 rounded-md font-bold text-lg hover:shadow-[0_0_20px_rgba(4,152,244,0.4)] transition-all active:scale-95 w-full sm:w-auto">
                  Começar agora
                </button>
              </a>
              <a href="/conteudo">
                <button className="border border-border text-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-muted transition-all active:scale-95 w-full sm:w-auto">
                  Explorar conteúdos
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
