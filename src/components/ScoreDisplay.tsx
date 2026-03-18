import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface ScoreDisplayProps extends ComponentPropsWithoutRef<'div'> {
  score: number;
  maxScore?: number;
}

export const ScoreDisplay = ({ score, maxScore = 10, className, ...props }: ScoreDisplayProps) => {
  return (
    <div className={cn('flex items-baseline gap-1 font-mono', className)} {...props}>
      <span
        className={cn(
          'font-bold',
          score <= 3 ? 'text-accent-red' : score <= 6 ? 'text-accent-amber' : 'text-accent-green'
        )}
      >
        {score}
      </span>
      <span className="text-base text-text-tertiary">/{maxScore}</span>
    </div>
  );
};
