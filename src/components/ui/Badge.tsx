import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'blue';
  className?: string;
}

export const Badge = ({ children, variant = 'default', className }: BadgeProps) => {
  const variants = {
    default: 'bg-muted text-foreground',
    outline: 'border border-border text-muted-foreground',
    blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
  };

  return (
    <span className={cn(
      'px-2 py-0.5 rounded-full text-xs font-medium inline-flex items-center',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
