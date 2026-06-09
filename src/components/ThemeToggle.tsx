'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Detect client-side mounting without calling setState in an effect
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <button
        className="btn-ghost"
        style={{ width: 40, height: 40, padding: 0 }}
        aria-label="Toggle theme"
      >
        <div style={{ width: 20, height: 20 }} />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      className="btn-ghost"
      style={{
        width: 40,
        height: 40,
        padding: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-md)',
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Moon size={18} color="var(--brand-orange)" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? -180 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Sun size={18} color="var(--brand-orange)" />
      </motion.div>
    </motion.button>
  );
}
