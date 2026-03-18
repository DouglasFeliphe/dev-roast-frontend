'use client';

import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { CodeEditorContent } from './Content';
import { CodeEditorHeader } from './Header';
import { CodeEditorLineNumbers } from './LineNumbers';

export type CodeEditorState = 'default' | 'focus' | 'error' | 'disabled';

export interface CodeEditorProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  children?: ReactNode;
  filename?: string;
  lineCount?: number;
  showLineNumbers?: boolean;
  state?: CodeEditorState;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const editor = tv({
  base: 'flex flex-col overflow-hidden rounded-none border border-border-primary bg-bg-input',
  variants: {
    state: {
      default: '',
      focus: 'border-border-focus ring-1 ring-border-focus',
      error: 'border-accent-red',
      disabled: 'opacity-50',
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

export const CodeEditor = ({
  children,
  filename,
  lineCount = 10,
  showLineNumbers = true,
  state = 'default',
  value,
  onChange,
  placeholder,
  className,
  ...props
}: CodeEditorProps) => {
  return (
    <div className={cn(editor({ state }), className)} {...props}>
      <CodeEditorHeader filename={filename} />
      <div className="flex flex-1 overflow-auto">
        {showLineNumbers && <CodeEditorLineNumbers count={lineCount} />}
        {children ? (
          <div className="flex-1 overflow-auto p-4">{children}</div>
        ) : (
          <CodeEditorContent
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

CodeEditor.Header = CodeEditorHeader;
CodeEditor.LineNumbers = CodeEditorLineNumbers;
CodeEditor.Content = CodeEditorContent;
