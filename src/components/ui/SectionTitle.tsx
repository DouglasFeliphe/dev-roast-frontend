import type { ComponentPropsWithoutRef } from 'react';

export interface SectionTitleProps extends ComponentPropsWithoutRef<'div'> {
  label: string;
}

export const SectionTitle = ({ label, className, ...props }: SectionTitleProps) => {
  return (
    <div
      className={`flex items-center gap-2 font-mono text-sm font-bold ${className ?? ''}`}
      {...props}
    >
      <span className="text-accent-green">{'//'}</span>
      <span className="text-text-primary">{label}</span>
    </div>
  );
};
