import React from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Share2 } from 'lucide-react';

export const FreeContent = () => {
  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-30" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <SectionHeader
          number="04"
          title="GRATUITO"
          subtitle="Aprenda sem custo"
          center
        />

        <div className="max-w-2xl mx-auto mt-12">
          <p className="text-lg text-muted mb-10 leading-relaxed">
            Produzimos conteúdo diário para ajudar você a dar os primeiros passos.
            Dicas rápidas, conceitos explicados e roadmap de estudos.
          </p>

          <div className="bg-dark-900 border border-border p-8 rounded-2xl inline-block w-full max-w-md">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Share2 className="text-brand-blue" size={32} />
              <span className="text-xl font-bold">@linhazero.dev</span>
            </div>
            <a href="https://www.instagram.com/linhazero.dev/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="w-full">
                Conheça o Instagram
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
