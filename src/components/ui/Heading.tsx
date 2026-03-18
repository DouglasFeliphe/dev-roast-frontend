import type { ComponentPropsWithoutRef } from 'react';

export interface HeadingProps extends ComponentPropsWithoutRef<'h1'> {}

export const Heading = ({ className, ...props }: HeadingProps) => {
  return (
    <h1
      className={`font-mono text-4xl font-bold text-text-primary ${className ?? ''}`}
      {...props}
    />
  );
};
