import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface LeaderboardEntryRankProps extends ComponentPropsWithoutRef<'span'> {
  children: React.ReactNode;
}

export const LeaderboardEntryRank = ({
  children,
  className,
  ...props
}: LeaderboardEntryRankProps) => {
  return (
    <span
      className={cn('w-10 shrink-0 font-mono text-sm text-text-tertiary', className)}
      {...props}
    >
      {children}
    </span>
  );
};
