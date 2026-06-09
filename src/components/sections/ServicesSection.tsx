'use client';

import { motion } from 'framer-motion';
import {
  Monitor,
  ShoppingCart,
  Store,
  Bot,
  Layout,
  Code2,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/data';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  ShoppingCart,
  Store,
  Bot,
  Layout,
  Code2,
};

const accentStyles: Record<string, { bg: string; color: string; border: string; topClass: string }> = {
  orange: {
    bg: 'var(--brand-orange-bg)',
    color: 'var(--brand-orange)',
    border: 'var(--brand-orange-border)',
    topClass: 'card-accent-top-orange',
  },
  cyan: {
    bg: 'var(--brand-cyan-bg)',
    color: 'var(--brand-cyan)',
    border: 'var(--brand-cyan-border)',
    topClass: 'card-accent-top-cyan',
  },
  purple: {
    bg: 'var(--brand-purple-bg)',
    color: 'var(--brand-purple)',
    border: 'var(--brand-purple-border)',
    topClass: 'card-accent-top',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        position: 'relative',
        padding: '5rem 0',
      }}
    >
      <div className="glow-spot glow-orange" style={{ top: '10%', right: '5%' }} />
      <div className="glow-spot glow-purple" style={{ bottom: '15%', left: '8%' }} />

      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span className="tag-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            Our Services
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginTop: '0.75rem',
            }}
          >
            What We Offer
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: 600,
              margin: '0.75rem auto 0',
              fontSize: '1rem',
              lineHeight: 1.7,
            }}
          >
            From custom web development to AI-powered solutions, we deliver excellence across every domain.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1.25rem',
          }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            const accent = accentStyles[service.accent] || accentStyles.orange;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`card ${accent.topClass}`}
                whileHover={{ y: -4 }}
                style={{ padding: '1.75rem' }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-md)',
                    background: accent.bg,
                    border: `1px solid ${accent.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={22} color={accent.color} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.625rem',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                  }}
                >
                  {service.description}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.2rem 0.6rem',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        borderRadius: 'var(--radius-full)',
                        background: accent.bg,
                        color: accent.color,
                        border: `1px solid ${accent.border}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (min-width: 640px) {
          #services .container-custom > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          #services .container-custom > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
