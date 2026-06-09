'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { stats } from '@/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const floatVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.4 + i * 0.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      {/* Glow spots */}
      <div className="glow-spot glow-orange" style={{ top: '10%', left: '5%' }} />
      <div className="glow-spot glow-cyan" style={{ top: '30%', right: '10%' }} />
      <div className="glow-spot glow-purple" style={{ bottom: '10%', left: '40%' }} />

      <motion.div
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className="tag-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <Sparkles size={14} />
            AI-Powered Business Solutions
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          Transform Your Business with{' '}
          <span
            style={{
              background: 'var(--gradient-brand)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI-Powered Innovation
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: 600,
            marginTop: '1.25rem',
            lineHeight: 1.7,
          }}
        >
          15+ years of expertise delivering cutting-edge web development, AI integration,
          and business automation solutions that drive real results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="hero-ctas-container"
        >
          <motion.button
            className="btn-primary btn-lg"
            onClick={() => handleScrollTo('portfolio')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Portfolio
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            className="btn-secondary btn-lg"
            onClick={() => handleScrollTo('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={18} />
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
            marginTop: '3rem',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--brand-orange)',
                  lineHeight: 1,
                }}
              >
                {stat.value}
                {stat.suffix || ''}
              </span>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-tertiary)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Floating Hero Images (decorative grid) */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginTop: '3rem',
            width: '100%',
            maxWidth: 600,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={floatVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, y: -4 }}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                aspectRatio: i === 0 || i === 3 ? '4/3' : '3/4',
                ...(i === 1 ? { transform: 'translateY(1.5rem)' } : {}),
                ...(i === 2 ? { transform: 'translateY(-1.5rem)' } : {}),
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, var(--brand-orange-bg), var(--brand-cyan-bg))'
                    : 'linear-gradient(135deg, var(--brand-cyan-bg), var(--brand-purple-bg))',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 'var(--radius-md)',
                    background: i % 2 === 0 ? 'var(--brand-orange-bg)' : 'var(--brand-cyan-bg)',
                    border: `1px solid ${i % 2 === 0 ? 'var(--brand-orange-border)' : 'var(--brand-cyan-border)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>
                    {i === 0 ? '🚀' : i === 1 ? '🤖' : i === 2 ? '💡' : '🌐'}
                  </span>
                </div>
              </div>
              {/* Glass overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(255,105,0,0.08), rgba(6,147,227,0.05))',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
