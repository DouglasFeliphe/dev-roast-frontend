'use client';

import type { ComponentPropsWithoutRef } from 'react';
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ToggleProps extends Omit<ComponentPropsWithoutRef<'button'>, 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const Toggle = ({ checked = false, onChange, label, className, ...props }: ToggleProps) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={cn(
        'flex items-center gap-3 cursor-pointer',
        isChecked ? 'text-accent-green' : 'text-text-secondary',
        className ?? ''
      )}
    >
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        onClick={handleChange}
        className={cn(
          'relative h-[22px] w-[40px] cursor-pointer rounded-full p-[3px] transition-colors',
          isChecked ? 'bg-accent-green' : 'bg-border-primary'
        )}
        {...props}
      >
        <span
          className={cn(
            'block h-4 w-4 rounded-full shadow-sm transition-transform duration-200',
            isChecked ? 'bg-bg-page translate-x-[18px]' : 'translate-x-0 bg-text-tertiary'
          )}
        />
      </button>
      {label && <span className="font-mono text-xs">{label}</span>}
    </div>
  );
};
