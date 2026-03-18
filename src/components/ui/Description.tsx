import type { ComponentPropsWithoutRef } from 'react';

export interface DescriptionProps extends ComponentPropsWithoutRef<'p'> {}

export const Description = ({ className, ...props }: DescriptionProps) => {
  return <p className={`font-mono text-sm text-text-secondary ${className ?? ''}`} {...props} />;
};
