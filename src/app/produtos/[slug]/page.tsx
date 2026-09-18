import React from 'react';
import { PRODUCTS } from '@/constants/products';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-12">
        <Link href="/produtos" className="flex items-center gap-2 text-muted hover:text-brand-blue transition-colors mb-12 group">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Voltar para a vitrine
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image/Cover */}
          <div className="relative rounded-3xl overflow-hidden border border-border group">
            <img
              src={product.cover}
              alt={product.title}
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <Badge variant="blue">{product.level}</Badge>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline">{product.category.toUpperCase()}</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {product.title}
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="bg-dark-900 border border-border p-8 rounded-2xl mb-10">
              <h3 className="text-xl font-bold mb-6">O que você vai aprender:</h3>
              <ul className="grid grid-cols-1 gap-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 size={18} className="text-brand-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between p-6 rounded-2xl bg-dark-950 border border-border">
              <div>
                <span className="block text-muted text-sm uppercase font-mono">Investimento</span>
                <span className="text-3xl font-bold text-foreground">R$ {product.price.toFixed(2)}</span>
              </div>
              <a href={product.checkoutUrl}>
                <Button variant="primary" size="lg">
                  Quero Aprender Agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
