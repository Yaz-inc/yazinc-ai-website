'use client';

import { motion } from 'framer-motion';
import { Award, Languages } from 'lucide-react';
import { profile } from '@/data';

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '5rem 0',
      }}
    >
      {/* Glow spots */}
      <div className="glow-spot glow-orange" style={{ top: '20%', left: '5%' }} />
      <div className="glow-spot glow-cyan" style={{ bottom: '20%', right: '10%' }} />

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
            About Me
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginTop: '0.75rem',
            }}
          >
            The Person Behind Yazinc AI
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 280,
                height: 320,
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-orange)',
              }}
            >
              {/* Orange glow behind frame */}
              <div
                style={{
                  position: 'absolute',
                  inset: -4,
                  borderRadius: 'inherit',
                  background: 'linear-gradient(135deg, var(--brand-orange-glow), var(--brand-cyan-glow))',
                  filter: 'blur(20px)',
                  opacity: 0.3,
                  zIndex: 0,
                }}
              />
              {/* Image placeholder */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, var(--brand-orange-bg), var(--brand-cyan-bg))',
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'var(--brand-orange-bg)',
                    border: '2px solid var(--brand-orange-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-orange)' }}>
                    Y
                  </span>
                </div>
              </div>
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(transparent, rgba(11,17,32,0.6))',
                  zIndex: 2,
                }}
              />
              {/* Experience badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 3,
                }}
              >
                <span className="tag-badge" style={{ fontSize: '0.75rem' }}>
                  <Award size={12} />
                  {profile.experience}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
          >
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
              }}
            >
              {profile.name}
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--brand-orange)',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              {profile.title}
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '1.5rem',
              }}
            >
              {profile.bio}
            </p>

            {/* Skills */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h5
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}
              >
                Skills & Expertise
              </h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {profile.skills.map((skill, i) => {
                  const variants = ['', 'tag-badge-cyan', 'tag-badge-purple', 'tag-badge-green'];
                  return (
                    <motion.span
                      key={skill}
                      className={`tag-badge ${variants[i % variants.length]}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </div>

            {/* Languages */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Languages size={18} color="var(--brand-cyan)" />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Languages: <strong style={{ color: 'var(--text-primary)' }}>{profile.languages.join(', ')}</strong>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (min-width: 768px) {
          #about .container-custom > div:last-child {
            grid-template-columns: auto 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
