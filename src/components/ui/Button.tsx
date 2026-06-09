'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
}: ButtonProps) {
  const sizeClasses = {
    sm: '!py-2 !px-4 text-xs',
    md: '!py-3 !px-6 text-sm',
    lg: '!py-3.5 !px-8 text-sm',
  };

  const Comp = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      <Comp
        href={href}
        onClick={onClick}
        className={`btn-premium btn-${variant} ${sizeClasses[size]} inline-flex items-center gap-2 ${className}`}
      >
        {children}
        {icon}
      </Comp>
    </motion.div>
  );
}
