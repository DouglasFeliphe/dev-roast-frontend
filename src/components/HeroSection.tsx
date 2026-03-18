import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface HeroSectionProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  subtitle?: string;
}

export const HeroSection = ({ title, subtitle, className, ...props }: HeroSectionProps) => {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      <h2 className="font-mono text-3xl font-bold text-text-primary">{title}</h2>
      {subtitle && <p className="font-mono text-sm text-text-secondary">{subtitle}</p>}
    </div>
  );
};
