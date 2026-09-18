import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre a Linha Zero | Programação do Zero',
  description: 'Conheça a história, a filosofia e o propósito da Linha Zero.',
};

export default function SobrePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden border-b border-border">
        <div className="bg-tech-grid absolute inset-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Comece pelo <span className="text-brand-blue">zero.</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            A Linha Zero não é apenas sobre código, é sobre a jornada de transformar
            curiosidade em competência técnica.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <SectionHeader
                number="01"
                title="HISTÓRIA"
                subtitle="Por que a Linha Zero existe?"
              />
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>
                  Muitas pessoas querem entrar no mundo da tecnologia, mas se sentem perdidas
                  diante de tantas opções, linguagens e frameworks. A sensação de "não saber por onde começar"
                  é o maior obstáculo para novos desenvolvedores.
                </p>
                <p>
                  A Linha Zero nasceu para eliminar esse ruído. Nosso objetivo é criar um caminho
                  claro, progressivo e humano, onde o aluno não se sinta apenas mais um em um curso,
                  mas alguém em uma jornada de evolução.
                </p>
              </div>
            </div>

            <div className="bg-dark-900 border border-border p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <div className="text-6xl font-bold font-mono text-brand-blue">WHY</div>
              </div>
              <h3 className="text-2xl font-bold mb-6">Nossa Filosofia</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Prática desde o dia 1', desc: 'Teoria é importante, mas código no editor é o que ensina.' },
                  { title: 'Progressão Real', desc: 'Não pulamos etapas. Construímos a base para depois escalar.' },
                  { title: 'Linguagem Humana', desc: 'Sem jargões desnecessários. Explicamos como se fosse para um amigo.' },
                  { title: 'Foco no Projeto', desc: 'O objetivo final é sempre criar algo que funcione e seja útil.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 text-brand-blue">✓</div>
                    <div>
                      <span className="block font-bold text-foreground">{item.title}</span>
                      <span className="text-sm text-muted">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-dark-900/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              number="02"
              title="CRIADOR"
              subtitle="Vamos aprender e construir juntos"
              center
            />
            <div className="mt-12 p-8 rounded-2xl border border-border bg-dark-950 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Founder
              </div>
              <p className="text-xl text-muted italic leading-relaxed mb-8">
                "Eu também estou construindo minha jornada. Acredito que a melhor forma de
                consolidar o conhecimento é ensinando e construindo em público.
                A Linha Zero é o reflexo da minha busca constante por evolução, prática
                e curiosidade."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted border border-border" />
                <div className="text-left">
                  <span className="block font-bold text-foreground">Criador Linha Zero</span>
                  <span className="text-xs text-muted">Desenvolvedor & Educador</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Pronto para começar?</h2>
          <Link href="/conheca">
            <Button variant="primary" size="lg" className="group">
              Conhecer a Jornada
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
