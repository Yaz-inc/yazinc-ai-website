'use client';

import { motion } from 'framer-motion';
import { socialLinks, footerLinks } from '@/data';

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FiverrIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.004 15.588a.995.995 0 10.002-1.99.995.995 0 00-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.14h1.468l.091.727a1.504 1.504 0 011.468-.875c.627 0 1.092.293 1.307.875a1.56 1.56 0 011.469-.875c.957 0 1.455.566 1.455 1.634v2.466H22V12.07c0-.76-.293-1.187-.992-1.187zM12.248 11.14h1.61v3.558h-1.61V11.14zm.805-1.537a.995.995 0 10.002-1.99.995.995 0 00-.002 1.99zM9.447 13.106c-.137-.293-.546-.41-.84-.41-.547 0-.84.293-.84.684 0 .41.293.684.84.684.293 0 .703-.137.84-.41l1.187.684c-.41.703-1.187 1.092-2.027 1.092-1.325 0-2.378-.875-2.378-2.239 0-1.363 1.053-2.239 2.378-2.239.84 0 1.617.41 2.027 1.092l-1.187.684zm-3.698-1.966h1.61v3.558h-1.61V11.14zm.805-1.537a.995.995 0 10.002-1.99.995.995 0 00-.002 1.99zM0 14.698V9h3.558c1.307 0 2.101.684 2.101 1.803 0 .684-.293 1.187-.957 1.469.76.195 1.092.84 1.092 1.617 0 1.234-.84 1.809-2.378 1.809H0zm1.61-3.284h1.779c.41 0 .684-.195.684-.547 0-.41-.274-.547-.684-.547H1.61v1.094zm0 1.917h1.943c.41 0 .684-.195.684-.547 0-.41-.274-.547-.684-.547H1.61v1.094z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function SocialIcon({ icon }: { icon: 'linkedin' | 'fiverr' | 'instagram' }) {
  switch (icon) {
    case 'linkedin':
      return <LinkedInIcon />;
    case 'fiverr':
      return <FiverrIcon />;
    case 'instagram':
      return <InstagramIcon />;
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkSections = [
    { title: 'Solutions', links: footerLinks.solutions },
    { title: 'Company', links: footerLinks.company },
    { title: 'Resources', links: footerLinks.resources },
    { title: 'Connect', links: footerLinks.connect },
  ];

  return (
    <footer
      style={{
        position: 'relative',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--glass-border)',
        marginTop: 'auto',
      }}
    >
      {/* Beam sweep border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--gradient-beam)',
          backgroundSize: '200% 100%',
          animation: 'beam-sweep 6s linear infinite',
        }}
      />

      <div className="container-custom" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        {/* Top: Logo + Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
        >
          {/* Logo + Tagline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                  }}
                >
                  Yazinc
                </span>
                <span
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--brand-orange)',
                  }}
                >
                  AI
                </span>
              </div>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  maxWidth: 320,
                  lineHeight: 1.6,
                }}
              >
                Transforming businesses with AI-powered solutions, expert web development, and intelligent automation.
              </p>
            </motion.div>
          </div>

          {/* Link Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
            }}
          >
            {linkSections.map((section, sIdx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
              >
                <h4
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '1rem',
                  }}
                >
                  {section.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          transition: 'color var(--transition-fast)',
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.color = 'var(--brand-orange)';
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
          style={{
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            padding: '1.5rem 2rem',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 'var(--radius-md)',
              background: 'var(--brand-orange-bg)',
              border: '1px solid var(--brand-orange-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-orange)' }}>Y</span>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <h5 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
              YAZ INC
            </h5>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0' }}>
              Parent company — Delivering excellence in digital solutions worldwide
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="tag-badge">Enterprise</span>
            <span className="tag-badge-cyan tag-badge">Global</span>
          </div>
        </motion.div>

        {/* Divider */}
        <hr className="section-divider" style={{ margin: '2rem 0 1.5rem' }} />

        {/* Bottom Row: Social + Copyright */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-base)',
                  textDecoration: 'none',
                }}
                whileHover={{
                  scale: 1.1,
                  borderColor: 'var(--brand-orange)',
                  color: 'var(--brand-orange)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialIcon icon={link.icon} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              margin: 0,
            }}
          >
            &copy; {currentYear} Yazinc AI. All rights reserved.
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 768px) {
          footer .container-custom > div:first-child {
            grid-template-columns: 1fr 2fr;
          }
          footer .container-custom > div:first-child + div + div {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </footer>
  );
}
