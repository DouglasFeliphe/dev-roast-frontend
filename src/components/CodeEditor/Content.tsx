import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface CodeEditorContentProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const CodeEditorContent = ({ className, ...props }: CodeEditorContentProps) => {
  return (
    <textarea
      className={cn(
        'flex-1 resize-none bg-transparent px-4 py-4 font-mono text-sm text-text-primary outline-none',
        className
      )}
      {...props}
    />
  );
};
