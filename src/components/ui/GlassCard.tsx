'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  accent?: 'orange' | 'cyan' | 'purple' | 'none';
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = '',
  accent = 'none',
  hover = true,
  delay = 0,
}: GlassCardProps) {
  const accentClass =
    accent !== 'none'
      ? `card-accent-top${accent === 'orange' ? '-orange' : accent === 'cyan' ? '-cyan' : ''}`
      : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`card ${accentClass} ${hover ? 'glass-panel-hover' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
