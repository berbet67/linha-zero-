'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const NAV_LINKS = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Conheça', href: '/conheca' },
  { name: 'Conteúdo', href: '/conteudo' },
  { name: 'Produtos', href: '/produtos' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      scrolled ? 'bg-dark-950/80 backdrop-blur-md border-border py-3' : 'bg-transparent border-transparent py-5'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Linha Zero Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <div className="flex gap-1">
            <span className="text-foreground">LINHA</span>
            <span className="text-brand-blue">ZERO</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-brand-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" size="sm">Começar</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-950 border-b border-border p-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted hover:text-brand-blue p-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" className="w-full py-4">Começar</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
