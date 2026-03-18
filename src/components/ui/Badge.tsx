import type { ComponentPropsWithoutRef } from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'critical' | 'warning' | 'good' | 'needs_serious_help';

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  variant?: BadgeVariant;
}

const badge = tv({
  base: 'inline-flex items-center gap-2 font-mono text-xs',
  variants: {
    variant: {
      critical: 'text-accent-red',
      warning: 'text-accent-amber',
      good: 'text-accent-green',
      needs_serious_help: 'text-accent-red',
    },
  },
  defaultVariants: {
    variant: 'good',
  },
});

const dotColor: Record<BadgeVariant, string> = {
  critical: 'bg-accent-red',
  warning: 'bg-accent-amber',
  good: 'bg-accent-green',
  needs_serious_help: 'bg-accent-red',
};

export const Badge = ({ variant = 'good', className, children, ...props }: BadgeProps) => {
  return (
    <span className={cn(badge({ variant }), className)} {...props}>
      <span className={cn('h-2 w-2 rounded-full', dotColor[variant])} />
      {children}
    </span>
  );
};
