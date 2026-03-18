import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface CodeEditorLineNumbersProps extends ComponentPropsWithoutRef<'div'> {
  count?: number;
}

export const CodeEditorLineNumbers = ({
  count = 10,
  className,
  ...props
}: CodeEditorLineNumbersProps) => {
  const lines = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div
      className={cn(
        'flex w-12 shrink-0 flex-col gap-2 border-r border-border-primary bg-bg-surface px-3 py-4 font-mono text-xs text-text-tertiary',
        className
      )}
      {...props}
    >
      {lines.map((num) => (
        <span key={num} className="text-right">
          {num}
        </span>
      ))}
    </div>
  );
};
