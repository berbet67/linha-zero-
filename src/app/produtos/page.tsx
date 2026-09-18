import React from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ProductCard } from '@/components/features/store/ProductCard';
import { PRODUCTS } from '@/constants/products';

export default function ProdutosPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 relative overflow-hidden">
        <div className="bg-tech-grid absolute inset-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <SectionHeader
            number="01"
            title="VITRINE"
            subtitle="Aprenda além do conteúdo gratuito"
            center
          />
          <p className="text-muted text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Invista no seu conhecimento com nossos materiais premium.
            Guias completos, práticos e focados em resultados reais.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-border bg-dark-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
