import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface HeroTitleProps extends ComponentPropsWithoutRef<'div'> {}

export const HeroTitle = ({ className, ...props }: HeroTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-3xl font-bold text-accent-green">$</span>
        <h1 className="font-mono text-3xl font-bold text-text-primary">
          paste your code. get roasted.
        </h1>
      </div>
      <p className="font-mono text-sm text-text-secondary">
        {"// drop your code below and we'll rate it — brutally honest or full roast mode"}
      </p>
    </div>
  );
};
