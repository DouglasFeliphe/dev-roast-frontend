import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { Logo } from './Logo';

export interface NavbarProps extends ComponentPropsWithoutRef<'nav'> {
  logoText?: string;
  links?: { label: string; href: string }[];
}

export const Navbar = ({
  logoText = 'devroast',
  links = [{ label: 'leaderboard', href: '#' }],
  className,
  ...props
}: NavbarProps) => {
  return (
    <nav
      className={`flex h-14 items-center border-b border-border-primary bg-bg-page px-6 ${className ?? ''}`}
      {...props}
    >
      <Logo size="sm" text={logoText} />
      <div className="flex-1" />
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-mono text-sm text-text-secondary hover:text-text-primary"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
