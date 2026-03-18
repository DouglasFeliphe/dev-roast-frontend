import type { ComponentPropsWithoutRef } from 'react';

export interface CaptionProps extends ComponentPropsWithoutRef<'span'> {}

export const Caption = ({ className, ...props }: CaptionProps) => {
  return <span className={`font-mono text-xs text-text-tertiary ${className ?? ''}`} {...props} />;
};
