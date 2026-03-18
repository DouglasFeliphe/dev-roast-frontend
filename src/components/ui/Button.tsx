import type { ComponentPropsWithoutRef } from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'link';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
}

const button = tv({
  base: 'font-mono inline-flex items-center justify-center transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-accent-green text-bg-page font-medium px-6 py-2.5',
      secondary: 'border border-border-primary text-text-primary px-4 py-2',
      link: 'border border-border-primary text-text-secondary px-3 py-1.5',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  return <button className={cn(button({ variant }), className)} {...props} />;
};
