'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, taglines } from '@/data';
import ThemeToggle from './ThemeToggle';

function useTypewriter(strings: string[], typingSpeed = 60, erasingSpeed = 30, pauseDuration = 2500) {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = strings[stringIndex];
    const nextIndex = (stringIndex + 1) % strings.length;
    let charIndex = text.length;

    const tick = () => {
      if (isTyping) {
        if (charIndex < current.length) {
          charIndex++;
          setText(current.slice(0, charIndex));
          timeoutRef.current = setTimeout(tick, typingSpeed);
        } else {
          setIsTyping(false);
          timeoutRef.current = setTimeout(() => {
            // Start erasing
            const eraseTick = () => {
              charIndex--;
              if (charIndex > 0) {
                setText(current.slice(0, charIndex));
                timeoutRef.current = setTimeout(eraseTick, erasingSpeed);
              } else {
                setText('');
                setStringIndex(nextIndex);
                setIsTyping(true);
              }
            };
            eraseTick();
          }, pauseDuration);
        }
      }
    };

    // Start typing if we're at the beginning or just switched string
    if (isTyping && charIndex === 0) {
      timeoutRef.current = setTimeout(tick, typingSpeed);
    } else if (isTyping) {
      timeoutRef.current = setTimeout(tick, typingSpeed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringIndex, isTyping, strings, typingSpeed, erasingSpeed, pauseDuration]);

  return { text, isTyping };
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { text: taglineText, isTyping } = useTypewriter(taglines);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <nav
        className={`glass-nav ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-wrapper">
          {/* Logo + Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.25rem',
              }}
            >
              <span
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.025em',
                }}
              >
                Yazinc
              </span>
              <span
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--brand-orange)',
                  letterSpacing: '-0.025em',
                }}
              >
                AI
              </span>
            </a>
            <span
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-tertiary)',
                fontWeight: 500,
                letterSpacing: '0.05em',
                height: '1rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {taglineText}
              <span
                style={{
                  display: 'inline-block',
                  width: '1px',
                  height: '0.7rem',
                  background: 'var(--brand-orange)',
                  marginLeft: '2px',
                  verticalAlign: 'middle',
                  opacity: isTyping ? 1 : 0.5,
                  animation: isTyping ? 'none' : 'pulse-glow 1s ease-in-out infinite',
                }}
              />
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="navbar-ctas">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn-primary btn-sm navbar-cta-desktop"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get In Touch
            </a>
            <button
              className="btn-ghost navbar-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              style={{
                width: 40,
                height: 40,
                padding: 0,
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                overflow: 'hidden',
                background: 'var(--nav-bg)',
                backdropFilter: 'blur(var(--glass-blur))',
                borderBottom: '1px solid var(--nav-border)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem 1.5rem',
                  gap: '0.25rem',
                  maxWidth: 1280,
                  margin: '0 auto',
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{ padding: '0.75rem 1rem', fontSize: '1rem' }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="btn-primary"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  style={{ marginTop: '0.5rem', textAlign: 'center' }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Responsive CSS for hamburger visibility */}
      <style>{`
        @media (max-width: 767px) {
          .navbar-cta-desktop { display: none !important; }
          .navbar-hamburger { display: inline-flex !important; }
        }
        @media (min-width: 768px) {
          .navbar-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
