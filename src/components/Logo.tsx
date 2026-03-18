import type { ComponentPropsWithoutRef } from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '@/lib/utils';

export type LogoSize = 'sm' | 'md' | 'lg';

export interface LogoProps extends ComponentPropsWithoutRef<'div'> {
  prompt?: string;
  text?: string;
  size?: LogoSize;
}

const logo = tv({
  base: 'flex items-center gap-2',
  variants: {
    size: {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const promptSize = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-2xl',
};

export const Logo = ({
  prompt = '>',
  text = 'devroast',
  size = 'md',
  className,
  ...props
}: LogoProps) => {
  return (
    <div className={cn(logo({ size }), className)} {...props}>
      <span className={cn('font-mono font-bold text-accent-green', promptSize[size])}>
        {prompt}
      </span>
      <span className="font-mono font-medium text-text-primary">{text}</span>
    </div>
  );
};
