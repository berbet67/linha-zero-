import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { LearningPath } from '@/components/features/journey/LearningPath';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conheça a Linha Zero | Sua Jornada na Programação',
  description: 'Descubra como funciona o ecossistema da Linha Zero e trace seu caminho do zero ao pro.',
};

export default function ConhecaPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 relative overflow-hidden">
        <div className="bg-tech-grid absolute inset-0 opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            O Mapa da <span className="text-brand-blue">Jornada</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Entenda como funciona o ecossistema da Linha Zero e trace seu caminho
            do absoluto zero até a construção de aplicações reais.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionHeader
              number="01"
              title="CAMINHOS"
              subtitle="A estrutura de aprendizado"
              center
            />
          </div>
          <LearningPath />
        </div>
      </section>

      <section className="py-24 bg-dark-900/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Fundamentos', desc: 'A base necessária para qualquer linguagem.', link: '/conteudo' },
              { title: 'Front-end', desc: 'Construindo a parte visual e interativa.', link: '/conteudo' },
              { title: 'Back-end', desc: 'Lógica, servidores e banco de dados.', link: '/conteudo' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-dark-950 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="text-4xl font-bold font-mono text-brand-blue">0{i+1}</div>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted mb-8 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <Link href={item.link}>
                  <Button variant="secondary" size="sm" className="group/btn">
                    Explorar Trilhas
                    <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Pronto para dar o primeiro passo?</h2>
          <Link href="/produtos">
            <Button variant="primary" size="lg">
              Ver Produtos Digitais
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
