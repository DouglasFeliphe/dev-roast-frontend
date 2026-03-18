import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface WindowButtonsProps extends ComponentPropsWithoutRef<'div'> {}

export const WindowButtons = ({ className, ...props }: WindowButtonsProps) => {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <span className="h-3 w-3 rounded-full bg-accent-red" />
      <span className="h-3 w-3 rounded-full bg-accent-amber" />
      <span className="h-3 w-3 rounded-full bg-accent-green" />
    </div>
  );
};
