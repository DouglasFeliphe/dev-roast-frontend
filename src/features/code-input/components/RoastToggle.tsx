'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { Toggle } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface RoastToggleProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const RoastToggle = ({
  checked = false,
  onChange,
  className,
  ...props
}: RoastToggleProps) => {
  return (
    <div className={cn('flex items-center gap-4', className)} {...props}>
      <Toggle checked={checked} onChange={onChange} label="roast mode" />
      <span className="font-mono text-xs text-text-tertiary">{'// maximum sarcasm enabled'}</span>
    </div>
  );
};
