import type { ComponentPropsWithoutRef } from 'react';

export interface CodeProps extends ComponentPropsWithoutRef<'code'> {}

export const Code = ({ className, ...props }: CodeProps) => {
  return <code className={`font-mono text-sm ${className ?? ''}`} {...props} />;
};
