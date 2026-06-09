import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'cyan' | 'purple' | 'green';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const variantClass =
    variant === 'default' ? 'tag-badge' : `tag-badge-${variant}`;
  return <span className={`${variantClass} ${className}`}>{children}</span>;
}
