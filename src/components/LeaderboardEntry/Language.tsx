import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface LeaderboardEntryLanguageProps extends ComponentPropsWithoutRef<'span'> {
  children: React.ReactNode;
}

export const LeaderboardEntryLanguage = ({
  children,
  className,
  ...props
}: LeaderboardEntryLanguageProps) => {
  return (
    <span
      className={cn('w-24 shrink-0 text-right font-mono text-xs text-text-tertiary', className)}
      {...props}
    >
      {children}
    </span>
  );
};
