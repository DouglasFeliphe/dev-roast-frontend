import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LeaderboardEntryCode } from './Code';
import { LeaderboardEntryLanguage } from './Language';
import { LeaderboardEntryRank } from './Rank';
import { LeaderboardEntryScore } from './Score';

export interface LeaderboardEntryProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const LeaderboardEntry = ({ children, className, ...props }: LeaderboardEntryProps) => {
  return (
    <div
      className={cn('flex items-center gap-6 border-b border-border-primary px-5 py-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};

LeaderboardEntry.Rank = LeaderboardEntryRank;
LeaderboardEntry.Score = LeaderboardEntryScore;
LeaderboardEntry.Code = LeaderboardEntryCode;
LeaderboardEntry.Language = LeaderboardEntryLanguage;
