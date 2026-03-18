import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface RoastQuoteProps extends ComponentPropsWithoutRef<'blockquote'> {
  quote: string;
  maxWidth?: string;
}

export const RoastQuote = ({ quote, maxWidth, className, ...props }: RoastQuoteProps) => {
  return (
    <blockquote
      className={cn('font-mono text-lg text-text-primary leading-relaxed', className)}
      style={{ maxWidth: maxWidth ?? '100%' }}
      {...props}
    >
      "{quote}"
    </blockquote>
  );
};
