'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Globe,
  Workflow,
  BarChart3,
  Shield,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { capabilities } from '@/data';

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Globe,
  Workflow,
  BarChart3,
  Shield,
  Rocket,
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

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      style={{
        position: 'relative',
        padding: '5rem 0',
      }}
    >
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
            What We Do
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginTop: '0.75rem',
            }}
          >
            Our Capabilities
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
            Comprehensive digital solutions powered by cutting-edge technology and deep industry expertise.
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
          {capabilities.map((cap, index) => {
            const Icon = iconMap[cap.icon] || Brain;
            const accentColors = [
              { bg: 'var(--brand-orange-bg)', color: 'var(--brand-orange)', border: 'var(--brand-orange-border)' },
              { bg: 'var(--brand-cyan-bg)', color: 'var(--brand-cyan)', border: 'var(--brand-cyan-border)' },
              { bg: 'var(--brand-purple-bg)', color: 'var(--brand-purple)', border: 'var(--brand-purple-border)' },
            ];
            const accent = accentColors[index % 3];

            return (
              <motion.div
                key={cap.title}
                variants={cardVariants}
                className="card"
                whileHover={{ y: -4 }}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  padding: '1.5rem',
                }}
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
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={accent.color} />
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Responsive grid */}
      <style>{`
        @media (min-width: 640px) {
          #capabilities .container-custom > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          #capabilities .container-custom > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
