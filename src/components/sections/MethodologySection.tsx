'use client';

import { motion } from 'framer-motion';
import {
  Search,
  PenTool,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import { methodologySteps } from '@/data';

const iconMap: Record<string, LucideIcon> = {
  Search,
  PenTool,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
};

export default function MethodologySection() {
  return (
    <section
      id="methodology"
      style={{
        position: 'relative',
        padding: '5rem 0',
      }}
    >
      <div className="glow-spot glow-cyan" style={{ top: '20%', right: '5%' }} />

      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="tag-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            Our Methodology
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginTop: '0.75rem',
            }}
          >
            How We Work
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
            A proven, systematic approach that ensures every project is delivered on time, on budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '23px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, var(--brand-orange), var(--brand-cyan), var(--brand-purple))',
              borderRadius: 'var(--radius-full)',
            }}
          />

          {methodologySteps.map((step, index) => {
            const Icon = iconMap[step.icon] || Code2;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1] as const,
                  delay: index * 0.1,
                }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  marginBottom: index < methodologySteps.length - 1 ? '2.5rem' : 0,
                  paddingLeft: 0,
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    flexShrink: 0,
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--bg-body)',
                    border: '2px solid var(--brand-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(255, 105, 0, 0.2)',
                  }}
                >
                  <Icon size={20} color="var(--brand-orange)" />
                </div>

                {/* Content card */}
                <motion.div
                  className="card"
                  whileHover={{ y: -2 }}
                  style={{
                    flex: 1,
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'var(--brand-orange-bg)',
                        color: 'var(--brand-orange)',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                      }}
                    >
                      {step.step}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop alternating layout */}
      <style>{`
        @media (min-width: 768px) {
          #methodology .container-custom > div:last-child > div > div {
            padding-left: 50%;
          }
          #methodology .container-custom > div:last-child > div:nth-child(even) > div:first-child {
            /* Icon stays left */
          }
          #methodology .container-custom > div:last-child > div > div:first-child {
            /* Always at left for simplicity */
          }
        }
      `}</style>
    </section>
  );
}
