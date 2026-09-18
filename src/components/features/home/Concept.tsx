import React from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Concept = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="bg-tech-grid absolute inset-0 pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          number="01"
          title="CONCEITO"
          subtitle="O que é a Linha Zero?"
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              A Linha Zero nasceu para ajudar pessoas que querem entrar no mundo da programação,
              mas não sabem por onde começar.
            </p>
            <p>
              Acreditamos que aprender a programar não deve ser intimidador.
              Por isso, nossa proposta é ensinar de forma progressiva:
            </p>

            <div className="space-y-4 py-6">
              {[
                { step: '01', text: 'Do primeiro conceito' },
                { step: '02', text: 'Ao primeiro código' },
                { step: '03', text: 'Ao primeiro projeto' },
                { step: '04', text: 'À construção de conhecimento real' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className="text-brand-blue font-mono font-bold">{item.step}</span>
                  <span className="text-border font-mono">→</span>
                  <span className="text-foreground group-hover:text-brand-blue transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-900 border border-border p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl rounded-full" />
            <h3 className="text-2xl font-bold mb-4">Filosofia de Ensino</h3>
            <p className="text-muted mb-8 leading-relaxed">
              Não focamos apenas em sintaxe, mas em como resolver problemas.
              Aprender a programar é aprender a pensar logicamente.
            </p>
            <Link href="/sobre">
              <Button variant="secondary" className="w-full md:w-auto">
                Saiba mais sobre nós
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
