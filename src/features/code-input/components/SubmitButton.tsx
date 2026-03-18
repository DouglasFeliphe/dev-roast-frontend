import type { ComponentPropsWithoutRef } from 'react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface SubmitButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'type'> {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const SubmitButton = ({
  onClick,
  disabled = false,
  loading = false,
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={cn('gap-2 bg-accent-green text-bg-page hover:bg-accent-green/90', className)}
      {...props}
    >
      {loading ? 'roasting...' : '$ roast_my_code'}
    </Button>
  );
};
