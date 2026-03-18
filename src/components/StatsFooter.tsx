import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface StatsFooterProps extends ComponentPropsWithoutRef<'div'> {
  totalRoasted?: number;
  avgScore?: number;
}

export const StatsFooter = ({
  totalRoasted = 0,
  avgScore = 0,
  className,
  ...props
}: StatsFooterProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-6 font-mono text-xs text-text-tertiary',
        className
      )}
      {...props}
    >
      <span>{formatNumber(totalRoasted)} codes roasted</span>
      <span>·</span>
      <span>avg score: {avgScore.toFixed(1)}/10</span>
    </div>
  );
};
