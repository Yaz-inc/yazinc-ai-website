'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Send } from 'lucide-react';
import { contactInfo, socialLinks } from '@/data';

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FiverrIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.004 15.588a.995.995 0 10.002-1.99.995.995 0 00-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.14h1.468l.091.727a1.504 1.504 0 011.468-.875c.627 0 1.092.293 1.307.875a1.56 1.56 0 011.469-.875c.957 0 1.455.566 1.455 1.634v2.466H22V12.07c0-.76-.293-1.187-.992-1.187zM12.248 11.14h1.61v3.558h-1.61V11.14zm.805-1.537a.995.995 0 10.002-1.99.995.995 0 00-.002 1.99zM9.447 13.106c-.137-.293-.546-.41-.84-.41-.547 0-.84.293-.84.684 0 .41.293.684.84.684.293 0 .703-.137.84-.41l1.187.684c-.41.703-1.187 1.092-2.027 1.092-1.325 0-2.378-.875-2.378-2.239 0-1.363 1.053-2.239 2.378-2.239.84 0 1.617.41 2.027 1.092l-1.187.684zm-3.698-1.966h1.61v3.558h-1.61V11.14zm.805-1.537a.995.995 0 10.002-1.99.995.995 0 00-.002 1.99zM0 14.698V9h3.558c1.307 0 2.101.684 2.101 1.803 0 .684-.293 1.187-.957 1.469.76.195 1.092.84 1.092 1.617 0 1.234-.84 1.809-2.378 1.809H0zm1.61-3.284h1.779c.41 0 .684-.195.684-.547 0-.41-.274-.547-.684-.547H1.61v1.094zm0 1.917h1.943c.41 0 .684-.195.684-.547 0-.41-.274-.547-.684-.547H1.61v1.094z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactCards = [
    {
      icon: <Phone size={20} color="var(--brand-orange)" />,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Mail size={20} color="var(--brand-cyan)" />,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <Clock size={20} color="var(--brand-purple)" />,
      label: 'Business Hours',
      value: contactInfo.hours,
      href: undefined,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '5rem 0',
      }}
    >
      <div className="glow-spot glow-orange" style={{ bottom: '10%', left: '5%' }} />

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
            Get In Touch
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginTop: '0.75rem',
            }}
          >
            Let&apos;s Work Together
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
            Ready to transform your business? Get in touch and let&apos;s discuss your next project.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.25rem',
                }}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '0.625rem 1rem',
                      fontSize: '0.9rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-strong)',
                      background: 'var(--bg-input)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '0.625rem 1rem',
                      fontSize: '0.9rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-strong)',
                      background: 'var(--bg-input)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.375rem',
                  }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  style={{
                    width: '100%',
                    padding: '0.625rem 1rem',
                    fontSize: '0.9rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-strong)',
                    background: 'var(--bg-input)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)',
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.375rem',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  style={{
                    width: '100%',
                    padding: '0.625rem 1rem',
                    fontSize: '0.9rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-strong)',
                    background: 'var(--bg-input)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: 120,
                    transition: 'border-color var(--transition-fast)',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="btn-primary btn-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%' }}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="card"
                whileHover={{ y: -2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-md)',
                    background: i === 0
                      ? 'var(--brand-orange-bg)'
                      : i === 1
                      ? 'var(--brand-cyan-bg)'
                      : 'var(--brand-purple-bg)',
                    border: `1px solid ${
                      i === 0
                        ? 'var(--brand-orange-border)'
                        : i === 1
                        ? 'var(--brand-cyan-border)'
                        : 'var(--brand-purple-border)'
                    }`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-tertiary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      margin: 0,
                    }}
                  >
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                      }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}
                    >
                      {card.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Location */}
            <div
              className="card"
              style={{
                padding: '1.25rem 1.5rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  margin: '0 0 0.375rem',
                }}
              >
                Location
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0 }}>
                {contactInfo.location}
              </p>
            </div>

            {/* Social Links */}
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  margin: '0 0 0.75rem',
                }}
              >
                Follow Us
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
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
                      width: 40,
                      height: 40,
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (min-width: 768px) {
          #contact .container-custom > div:last-child {
            grid-template-columns: 1.2fr 0.8fr;
          }
          #contact form > div:first-child {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
