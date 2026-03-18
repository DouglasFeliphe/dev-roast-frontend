import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface CodeEditorHeaderProps extends ComponentPropsWithoutRef<'div'> {
  filename?: string;
}

export const CodeEditorHeader = ({ filename, className, ...props }: CodeEditorHeaderProps) => {
  return (
    <div
      className={cn('flex h-10 items-center gap-3 border-b border-border-primary px-4', className)}
      {...props}
    >
      <span className="h-3 w-3 rounded-full bg-accent-red" />
      <span className="h-3 w-3 rounded-full bg-accent-amber" />
      <span className="h-3 w-3 rounded-full bg-accent-green" />
      <div className="flex-1" />
      {filename && <span className="font-mono text-xs text-text-tertiary">{filename}</span>}
    </div>
  );
};
