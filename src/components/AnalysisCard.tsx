import type { ComponentPropsWithoutRef } from 'react';
import type { BadgeVariant } from '@/components/ui';
import { Badge } from '@/components/ui';

export interface AnalysisCardProps extends ComponentPropsWithoutRef<'div'> {
  variant?: BadgeVariant;
  title: string;
  description: string;
}

export const AnalysisCard = ({
  variant = 'critical',
  title,
  description,
  className,
  ...props
}: AnalysisCardProps) => {
  return (
    <div
      className={`flex flex-col gap-3 rounded-none border border-border-primary p-5 ${className ?? ''}`}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Badge variant={variant}>{variant}</Badge>
      </div>
      <p className="font-mono text-sm font-normal text-text-primary">{title}</p>
      <p className="font-mono text-xs font-normal text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
};
