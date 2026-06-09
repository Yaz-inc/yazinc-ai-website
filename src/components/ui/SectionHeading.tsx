'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'default' | 'cyan' | 'purple';
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  badgeVariant = 'default',
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? 'text-center mb-16' : 'mb-16'}
    >
      {badge && (
        <span
          className={`tag-badge${
            badgeVariant !== 'default' ? ` tag-badge-${badgeVariant}` : ''
          } mb-4`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4 font-heading">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
