import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { TableRowCell } from './Cell';

export interface TableRowProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const TableRow = ({ children, className, ...props }: TableRowProps) => {
  return (
    <div
      className={cn('flex items-center gap-6 border-b border-border-primary px-5 py-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};

TableRow.Cell = TableRowCell;
