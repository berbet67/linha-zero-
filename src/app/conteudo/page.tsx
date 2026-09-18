'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = ['Todos', 'Python', 'Front-end', 'Back-end', 'JavaScript', 'Git/GitHub', 'Lógica', 'Projetos'];

const MOCK_CONTENT = [
  { id: '1', title: 'O que é Python?', category: 'Python', level: 'Beginner', type: 'article' },
  { id: '2', title: 'Introdução ao HTML5', category: 'Front-end', level: 'Beginner', type: 'article' },
  { id: '3', title: 'Entendendo Variáveis', category: 'Lógica', level: 'Beginner', type: 'guide' },
  { id: '4', title: 'Primeiro Repositório GitHub', category: 'Git/GitHub', level: 'Beginner', type: 'video' },
  { id: '5', title: 'CSS Grid vs Flexbox', category: 'Front-end', level: 'Intermediate', type: 'article' },
  { id: '6', title: 'Criando sua primeira API', category: 'Back-end', level: 'Intermediate', type: 'guide' },
];

export default function ConteudoPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContent = MOCK_CONTENT.filter(item => {
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      <section className="py-24 relative">
        <div className="bg-tech-grid absolute inset-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <SectionHeader
            number="01"
            title="BIBLIOTECA"
            subtitle="Aprenda gratuitamente"
            center
          />
        </div>
      </section>

      <section className="py-12 border-t border-border bg-dark-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-center">
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm transition-all duration-300 border',
                    activeCategory === cat
                      ? 'bg-brand-blue border-brand-blue text-white'
                      : 'bg-transparent border-border text-muted hover:border-brand-blue/50'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input
                type="text"
                placeholder="Buscar conteúdo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-900 border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-blue transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map(item => (
              <div key={item.id} className="p-6 rounded-xl border border-border bg-dark-900 hover:border-brand-blue/50 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="blue">{item.category}</Badge>
                  <Badge variant="outline">{item.level}</Badge>
                </div>
                <h3 className="text-lg font-bold mb-4 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted font-mono uppercase tracking-widest">{item.type}</span>
                  <Link href={`/conteudo/${item.id}`}>
                    <Button variant="secondary" size="sm" className="p-2">
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted mb-4">Nenhum conteúdo encontrado para a sua busca.</p>
              <Button variant="secondary" onClick={() => { setActiveCategory('Todos'); setSearchQuery(''); }}>
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
