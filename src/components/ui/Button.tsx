import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-brand-blue text-white hover:shadow-[0_0_20px_rgba(4,152,244,0.4)] transition-all duration-300',
    secondary: 'bg-transparent border border-border text-foreground hover:bg-muted transition-colors',
    terminal: 'bg-dark-900 text-brand-blue font-mono border border-brand-blue/30 hover:bg-brand-blue/10 transition-all',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg font-medium',
  };

  return (
    <button
      className={cn(
        'rounded-md transition-all active:scale-95 flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
