import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const FOOTER_LINKS = [
  {
    title: 'Navegação',
    links: [
      { name: 'Início', href: '/' },
      { name: 'Sobre', href: '/sobre' },
      { name: 'Conheça', href: '/conheca' },
      { name: 'Conteúdo', href: '/conteudo' },
      { name: 'Produtos', href: '/produtos' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'Instagram', href: 'https://www.instagram.com/linhazero.dev/' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-dark-950 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <span className="text-foreground">LINHA</span>
              <span className="text-brand-blue">ZERO</span>
            </Link>
            <p className="text-muted max-w-sm mb-6">
              Programação do zero, sem complicação. <br />
              Construindo a base para a sua jornada no desenvolvimento de software.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              SYSTEM STATUS: ONLINE
            </div>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-brand-blue transition-colors text-sm"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            © 2026 Linha Zero. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted hover:text-foreground text-xs transition-colors">Privacidade</Link>
            <Link href="#" className="text-muted hover:text-foreground text-xs transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
