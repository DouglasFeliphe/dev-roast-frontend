import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface ActionsBarProps extends ComponentPropsWithoutRef<'div'> {
  left?: ReactNode;
  right?: ReactNode;
}

export const ActionsBar = ({ left, right, className, ...props }: ActionsBarProps) => {
  return (
    <div className={cn('flex items-center justify-between w-full', className)} {...props}>
      <div className="flex items-center">{left}</div>
      <div className="flex items-center">{right}</div>
    </div>
  );
};
