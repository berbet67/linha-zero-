import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export const SectionHeader = ({
  number,
  title,
  subtitle,
  className,
  center = false,
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      'mb-12',
      center && 'text-center flex flex-col items-center',
      className
    )}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-brand-blue font-mono text-sm font-bold">{number}</span>
        <span className="text-border font-mono text-sm">//</span>
        <span className="text-muted font-mono text-xs uppercase tracking-widest">{title}</span>
      </div>
      {subtitle && (
        <p className="text-2xl md:text-4xl font-bold text-foreground max-w-3xl leading-tight">
          {subtitle}
        </p>
      )}
    </div>
  );
};
