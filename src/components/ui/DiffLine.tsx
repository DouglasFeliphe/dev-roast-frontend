import type { ComponentPropsWithoutRef } from 'react';

export type DiffType = 'removed' | 'added' | 'context';

export interface DiffLineProps extends ComponentPropsWithoutRef<'div'> {
  type: DiffType;
  prefix: string;
  code: string;
}

const typeStyles: Record<DiffType, string> = {
  removed: 'bg-[#1A0A0A] text-accent-red',
  added: 'bg-[#0A1A0F] text-accent-green',
  context: 'bg-transparent text-text-secondary',
};

export const DiffLine = ({ type, prefix, code, className, ...props }: DiffLineProps) => {
  return (
    <div
      className={`flex gap-2 px-4 py-2 font-mono text-sm ${typeStyles[type]} ${className ?? ''}`}
      {...props}
    >
      <span className="w-4 shrink-0">{prefix}</span>
      <span className="flex-1">{code}</span>
    </div>
  );
};
