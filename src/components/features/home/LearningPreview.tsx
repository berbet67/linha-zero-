import React from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SKILLS = {
  frontend: [
    'HTML', 'CSS', 'JavaScript', 'Interfaces', 'Responsividade', 'APIs', 'Git/GitHub'
  ],
  backend: [
    'Python', 'Lógica de Programação', 'APIs', 'Banco de Dados', 'Git/GitHub', 'Automação'
  ]
};

export const LearningPreview = () => {
  return (
    <section className="py-24 bg-dark-900/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          number="02"
          title="CURRÍCULO"
          subtitle="O que você vai aprender"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Front-end Card */}
          <div className="p-8 rounded-2xl border border-border bg-dark-950 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className="text-6xl font-bold font-mono text-brand-blue">FE</div>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="blue">FRONT-END</Badge>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {SKILLS.frontend.map(skill => (
                <span key={skill} className="text-sm text-muted border border-border px-3 py-1 rounded-md hover:border-brand-blue/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
            <Link href="/conteudo">
              <Button variant="secondary" size="sm" className="group/btn">
                Explorar Front-end
                <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Back-end Card */}
          <div className="p-8 rounded-2xl border border-border bg-dark-950 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className="text-6xl font-bold font-mono text-brand-blue">BE</div>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="blue">BACK-END</Badge>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {SKILLS.backend.map(skill => (
                <span key={skill} className="text-sm text-muted border border-border px-3 py-1 rounded-md hover:border-brand-blue/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
            <Link href="/conteudo">
              <Button variant="secondary" size="sm" className="group/btn">
                Explorar Back-end
                <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
