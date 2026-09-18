import React from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ProductCard } from '@/components/features/store/ProductCard';
import { PRODUCTS } from '@/constants/products';
import { Badge } from '@/components/ui/Badge';

export const FeaturedProduct = () => {
  const product = PRODUCTS[0]; // Python do Zero

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          number="03"
          title="DESTAQUE"
          subtitle="Aprenda além do conteúdo gratuito"
          center
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-12">
          <div className="w-full lg:w-1/2">
            <ProductCard product={product} className="max-w-md mx-auto" />
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="blue">Produto Premium</Badge>
              <span className="text-xs font-mono text-muted">Sugerido para Iniciantes</span>
            </div>
            <h3 className="text-4xl font-bold leading-tight">
              {product.title}
            </h3>
            <p className="text-lg text-muted leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map(feature => (
                <div key={feature} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
