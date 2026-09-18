'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Terminal } from '@/components/features/terminal/Terminal';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-24">
      {/* Ambient Light */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/10 text-brand-blue text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            SISTEMA OPERACIONAL: LINHA ZERO v1.0
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            Seu primeiro código <br />
            <span className="text-brand-blue">começa aqui.</span>
          </h1>

          <p className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Conteúdo, projetos e materiais para quem quer <span className="text-brand-blue font-semibold">começar a programar do zero</span>.
            Aprenda de forma progressiva: do conceito ao <span className="text-brand-blue font-semibold">projeto real</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="group">
              Começar agora
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg">
              Ver conteúdos
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-30 pointer-events-none" />
          <Terminal className="relative z-10" />
        </motion.div>
      </div>
    </section>
  );
};
