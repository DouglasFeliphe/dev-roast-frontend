import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface LeaderboardEntryScoreProps extends ComponentPropsWithoutRef<'span'> {
  children: React.ReactNode;
}

export const LeaderboardEntryScore = ({
  children,
  className,
  ...props
}: LeaderboardEntryScoreProps) => {
  return (
    <span
      className={cn('w-14 shrink-0 font-mono text-sm font-bold text-accent-red', className)}
      {...props}
    >
      {children}
    </span>
  );
};
