import type { ComponentPropsWithoutRef } from 'react';

export interface TableRowProps extends ComponentPropsWithoutRef<'div'> {
  rank: number;
  score: number;
  codePreview: string;
  language: string;
}

export const TableRow = ({
  rank,
  score,
  codePreview,
  language,
  className,
  ...props
}: TableRowProps) => {
  return (
    <div
      className={`flex items-center gap-6 border-b border-border-primary px-5 py-4 ${className ?? ''}`}
      {...props}
    >
      <span className="w-10 text-text-tertiary font-mono text-sm">#{rank}</span>
      <span className="w-15 text-accent-red font-mono text-sm font-bold">{score.toFixed(1)}</span>
      <span className="flex-1 truncate text-text-secondary font-mono text-xs">{codePreview}</span>
      <span className="w-25 text-right text-text-tertiary font-mono text-xs">{language}</span>
    </div>
  );
};
