'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface PathStep {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked';
}

const STEPS: PathStep[] = [
  { id: 1, title: 'Fundamentos', description: 'O começo de tudo: lógica, variáveis e tipos.', status: 'completed' },
  { id: 2, title: 'Primeiros códigos', description: 'Criando seus primeiros scripts funcionais.', status: 'completed' },
  { id: 3, title: 'Projetos', description: 'Aplicando a teoria em projetos reais.', status: 'current' },
  { id: 4, title: 'Git & GitHub', description: 'Versionamento e colaboração profissional.', status: 'locked' },
  { id: 5, title: 'APIs', description: 'Conectando seu software com o mundo.', status: 'locked' },
  { id: 6, title: 'Banco de Dados', description: 'Persistindo dados de forma eficiente.', status: 'locked' },
  { id: 7, title: 'Projetos Completos', description: 'Construindo aplicações robustas do zero.', status: 'locked' },
];

export const LearningPath = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-12 px-4">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

      <div className="space-y-12">
        {STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              'relative flex items-center gap-8',
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            )}
          >
            {/* Node */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
              <div className={cn(
                'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500',
                step.status === 'completed' ? 'bg-brand-blue border-brand-blue scale-110' :
                step.status === 'current' ? 'bg-dark-950 border-brand-blue animate-pulse' :
                'bg-dark-950 border-border'
              )}>
                {step.status === 'completed' && <CheckCircle2 size={12} className="text-white" />}
              </div>
            </div>

            {/* Content */}
            <div className="pl-16 md:pl-0 md:w-1/2 px-4">
              <div className={cn(
                'p-6 rounded-xl border transition-all duration-300',
                step.status === 'current' ? 'bg-dark-900 border-brand-blue/50 shadow-[0_0_20px_rgba(4,152,244,0.1)]' :
                'bg-dark-950 border-border'
              )}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-brand-blue font-mono text-xs font-bold">0{step.id}</span>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
