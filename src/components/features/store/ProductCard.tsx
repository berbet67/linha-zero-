'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Product } from '@/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <div className={cn(
      'group relative bg-dark-900 border border-border rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue/50 hover:shadow-[0_0_30px_rgba(4,152,244,0.15)]',
      className
    )}>
      {/* Cover Image */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={product.cover}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="blue">{product.level}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-blue transition-colors">
          {product.title}
        </h3>
        <p className="text-muted text-sm line-clamp-2 mb-6 h-10">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold text-foreground">
            R$ {product.price.toFixed(2)}
          </span>
          <Badge variant="outline">{product.category.toUpperCase()}</Badge>
        </div>

        <Link href={`/produtos/${product.slug}`}>
          <Button variant="primary" className="w-full group/btn">
            Quero Aprender
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
