import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface LeaderboardEntryCodeProps extends ComponentPropsWithoutRef<'span'> {
  children: React.ReactNode;
}

export const LeaderboardEntryCode = ({
  children,
  className,
  ...props
}: LeaderboardEntryCodeProps) => {
  return (
    <span
      className={cn('flex-1 truncate font-mono text-xs text-text-secondary', className)}
      {...props}
    >
      {children}
    </span>
  );
};
