'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { projects, projectCategories } from '@/data';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      style={{
        position: 'relative',
        padding: '5rem 0',
      }}
    >
      <div className="glow-spot glow-orange" style={{ top: '5%', left: '10%' }} />
      <div className="glow-spot glow-cyan" style={{ bottom: '10%', right: '5%' }} />

      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <span className="tag-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            Portfolio
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginTop: '0.75rem',
            }}
          >
            Featured Projects
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
            A showcase of our best work across web development, e-commerce, and AI solutions.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.4rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--brand-orange)' : 'var(--border-strong)',
                background: activeCategory === cat ? 'var(--brand-orange-bg)' : 'transparent',
                color: activeCategory === cat ? 'var(--brand-orange)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Counter */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.85rem',
            color: 'var(--text-tertiary)',
            marginBottom: '2rem',
          }}
        >
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </p>

        {/* Project Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1.25rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                className="card"
                style={{
                  overflow: 'hidden',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, var(--brand-orange-bg), var(--brand-cyan-bg))',
                  }}
                >
                  {/* Placeholder gradient since images may not exist */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: '2.5rem', opacity: 0.5 }}>
                      {project.category === 'Shopify' ? '🛍️' :
                       project.category === 'WordPress' ? '📝' :
                       project.category === 'E-Commerce' ? '💳' :
                       project.category === 'AI/SaaS' ? '🤖' :
                       project.category === 'Joomla' ? '📰' : '🌐'}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(11, 17, 32, 0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-sm"
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                        View Project
                      </a>
                    )}
                    <a
                      href={`/portfolio/${project.slug}`}
                      className="btn-secondary btn-sm"
                      style={{ textDecoration: 'none' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Eye size={14} />
                      View Details
                    </a>
                  </motion.div>

                  {/* Industry badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      zIndex: 2,
                    }}
                  >
                    <span className="tag-badge" style={{ fontSize: '0.65rem' }}>
                      {project.industry}
                    </span>
                  </div>

                  {/* Type badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      zIndex: 2,
                    }}
                  >
                    <span className="tag-badge-cyan tag-badge" style={{ fontSize: '0.65rem' }}>
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.25rem' }}>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.goals}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (min-width: 640px) {
          #portfolio .container-custom > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          #portfolio .container-custom > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
