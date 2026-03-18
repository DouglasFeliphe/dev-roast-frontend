import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface TableRowCellProps extends ComponentPropsWithoutRef<'span'> {
  width?: string;
}

export const TableRowCell = ({ width, className, ...props }: TableRowCellProps) => {
  return <span className={cn('shrink-0 font-mono text-xs', width, className)} {...props} />;
};
