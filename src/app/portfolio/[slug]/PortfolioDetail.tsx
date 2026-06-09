'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Briefcase,
  Globe,
  Layers,
  Wrench,
  Target,
  AlertTriangle,
  Compass,
  CheckCircle2,
  ChevronLeft,
} from 'lucide-react';
import { projects, type Project } from '@/data';

/* ─── Animation variants ─── */

const sectionVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/* ─── Section wrapper with scroll-triggered animation ─── */

function AnimatedSection({
  children,
  index = 0,
  className = '',
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Badge color helper ─── */

function getBadgeVariant(
  tool: string
): 'tag-badge' | 'tag-badge-cyan' | 'tag-badge-purple' | 'tag-badge-green' {
  const t = tool.toLowerCase();
  if (
    t.includes('python') ||
    t.includes('tensorflow') ||
    t.includes('pytorch') ||
    t.includes('go') ||
    t.includes('kafka') ||
    t.includes('spark') ||
    t.includes('rust') ||
    t.includes('solidity') ||
    t.includes('php') ||
    t.includes('mysql') ||
    t.includes('fastapi') ||
    t.includes('elasticsearch')
  ) {
    return 'tag-badge-cyan';
  }
  if (
    t.includes('next') ||
    t.includes('react') ||
    t.includes('typescript') ||
    t.includes('figma') ||
    t.includes('vite') ||
    t.includes('three.js') ||
    t.includes('canvas') ||
    t.includes('tailwind') ||
    t.includes('liquid') ||
    t.includes('d3.js') ||
    t.includes('webxr') ||
    t.includes('blender') ||
    t.includes('woocommerce') ||
    t.includes('joomla')
  ) {
    return 'tag-badge-purple';
  }
  if (
    t.includes('aws') ||
    t.includes('azure') ||
    t.includes('docker') ||
    t.includes('kubernetes') ||
    t.includes('terraform') ||
    t.includes('redis') ||
    t.includes('supabase') ||
    t.includes('stripe') ||
    t.includes('mapbox') ||
    t.includes('cloudinary') ||
    t.includes('shippo') ||
    t.includes('hubspot') ||
    t.includes('algolia') ||
    t.includes('klaviyo') ||
    t.includes('bullmq') ||
    t.includes('airflow')
  ) {
    return 'tag-badge-green';
  }
  return 'tag-badge';
}

/* ─── Props ─── */

interface PortfolioDetailProps {
  project: Project;
}

/* ═══════════════════════════════════════════
   PortfolioDetail — Full Case Study Page
   ═══════════════════════════════════════════ */

export default function PortfolioDetail({ project }: PortfolioDetailProps) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  /* scroll-reveal observer */
  const setupScrollReveal = useCallback(() => {
    const elements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, [setupScrollReveal]);

  return (
    <main className="relative z-[1] min-h-screen">
      {/* ── Back Navigation ── */}
      <AnimatedSection index={0}>
        <div className="container-custom pt-28 pb-4">
          <Link
            href="/#portfolio"
            className="btn-ghost inline-flex items-center gap-2 text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════
          HERO SECTION
          ══════════════════════════════════ */}
      <AnimatedSection index={1}>
        <section className="relative overflow-hidden">
          {/* Glow spots */}
          <div
            className="glow-spot glow-orange"
            style={{ top: '-10%', right: '-5%' }}
          />
          <div
            className="glow-spot glow-cyan"
            style={{ bottom: '5%', left: '-8%' }}
          />

          <div className="container-custom py-8 md:py-12">
            {/* Screenshot showcase */}
            <div className="screenshot-showcase">
              <div className="screenshot-frame">
                {/* Browser chrome dots */}
                <div className="screenshot-chrome">
                  <span className="screenshot-dot screenshot-dot-red" />
                  <span className="screenshot-dot screenshot-dot-yellow" />
                  <span className="screenshot-dot screenshot-dot-green" />
                  <span
                    className="ml-4 flex-1 text-xs"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {project.url || `${project.name} — Preview`}
                  </span>
                </div>

                {/* Project image */}
                <div
                  className="relative aspect-video"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-surface) 100%)',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 1280px"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />

                  {/* Fallback gradient overlay when image doesn't exist */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--brand-orange-bg) 0%, var(--brand-cyan-bg) 100%)',
                    }}
                  >
                    <span
                      className="text-4xl font-bold md:text-6xl"
                      style={{ color: 'var(--text-primary)', opacity: 0.15 }}
                    >
                      {project.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero overlay content */}
            <div className="mt-8 flex flex-col gap-6 md:mt-10">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag-badge">{project.industry}</span>
                <span className="tag-badge tag-badge-cyan">
                  {project.category}
                </span>
                {project.role && (
                  <span className="tag-badge tag-badge-purple">
                    {project.role}
                  </span>
                )}
              </div>

              {/* Project name */}
              <h1
                className="text-4xl font-bold md:text-5xl lg:text-6xl"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.name}
              </h1>

              {/* Tagline */}
              {project.tagline && (
                <p
                  className="max-w-3xl text-lg md:text-xl"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.tagline}
                </p>
              )}

              {/* Live URL */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg inline-flex w-fit items-center gap-2"
                >
                  <Globe className="h-5 w-5" />
                  Visit Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Divider */}
      <div className="section-divider my-8 md:my-12" />

      {/* ══════════════════════════════════
          PROJECT OVERVIEW (Two-Column)
          ══════════════════════════════════ */}
      <AnimatedSection index={2}>
        <section className="container-custom py-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Goals — takes 2 cols */}
            <div className="lg:col-span-2">
              <div className="section-glass p-6 md:p-8">
                {project.goals && (
                  <div className="mb-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{
                          background: 'var(--brand-orange-bg)',
                          border: '1px solid var(--brand-orange-border)',
                        }}
                      >
                        <Target
                          className="h-5 w-5"
                          style={{ color: 'var(--brand-orange)' }}
                        />
                      </div>
                      <h2 style={{ color: 'var(--text-primary)' }}>
                        Project Goals
                      </h2>
                    </div>
                    <p
                      className="text-base leading-relaxed md:text-lg"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {project.goals}
                    </p>
                  </div>
                )}

                {/* Description */}
                <div
                  className={project.goals ? 'border-t pt-8' : ''}
                  style={{ borderColor: 'var(--border-default)' }}
                >
                  <h3
                    className="mb-4 text-lg font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Overview
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.goals}
                  </p>
                </div>
              </div>
            </div>

            {/* Meta sidebar */}
            <div className="lg:col-span-1">
              <div className="card card-accent-top sticky top-28 p-6">
                <h3
                  className="mb-6 text-lg font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Project Details
                </h3>

                <div className="flex flex-col gap-5">
                  {/* Industry */}
                  <div>
                    <div
                      className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <Briefcase className="h-3.5 w-3.5" />
                      Industry
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.industry}
                    </span>
                  </div>

                  {/* Category / Type */}
                  <div>
                    <div
                      className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <Layers className="h-3.5 w-3.5" />
                      Category
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.category} — {project.type}
                    </span>
                  </div>

                  {/* Role */}
                  {project.role && (
                    <div>
                      <div
                        className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Role
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {project.role}
                      </span>
                    </div>
                  )}

                  {/* Platform */}
                  {project.platform && (
                    <div>
                      <div
                        className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Platform
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {project.platform}
                      </span>
                    </div>
                  )}

                  {/* Tools */}
                  {project.tools && project.tools.length > 0 && (
                    <div>
                      <div
                        className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Wrench className="h-3.5 w-3.5" />
                        Tools & Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => {
                          const variant = getBadgeVariant(tool);
                          return (
                            <span key={tool} className={variant}>
                              {tool}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Divider */}
      <div className="section-divider my-8 md:my-12" />

      {/* ══════════════════════════════════
          CHALLENGE & APPROACH
          ══════════════════════════════════ */}
      {(project.challenges || project.approach) && (
        <>
          <AnimatedSection index={3}>
            <section className="container-custom py-8 md:py-12">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Challenges */}
                {project.challenges && (
                  <div className="section-glass p-6 md:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{
                          background: 'var(--status-warning-bg)',
                          border: '1px solid rgba(245, 158, 11, 0.25)',
                        }}
                      >
                        <AlertTriangle
                          className="h-5 w-5"
                          style={{ color: 'var(--status-warning)' }}
                        />
                      </div>
                      <h2 style={{ color: 'var(--text-primary)' }}>
                        Challenges
                      </h2>
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {project.challenges}
                    </p>
                  </div>
                )}

                {/* Approach */}
                {project.approach && (
                  <div className="section-glass p-6 md:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{
                          background: 'var(--brand-cyan-bg)',
                          border: '1px solid var(--brand-cyan-border)',
                        }}
                      >
                        <Compass
                          className="h-5 w-5"
                          style={{ color: 'var(--brand-cyan)' }}
                        />
                      </div>
                      <h2 style={{ color: 'var(--text-primary)' }}>
                        Our Approach
                      </h2>
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {project.approach}
                    </p>
                  </div>
                )}
              </div>
            </section>
          </AnimatedSection>

          {/* Divider */}
          <div className="section-divider my-8 md:my-12" />
        </>
      )}

      {/* ══════════════════════════════════
          TOOLS & TECHNOLOGIES GRID
          ══════════════════════════════════ */}
      {project.tools && project.tools.length > 0 && (
        <>
          <AnimatedSection index={4}>
            <section className="container-custom py-8 md:py-12">
              <div className="mb-8 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    background: 'var(--brand-purple-bg)',
                    border: '1px solid var(--brand-purple-border)',
                  }}
                >
                  <Wrench
                    className="h-5 w-5"
                    style={{ color: 'var(--brand-purple)' }}
                  />
                </div>
                <h2 style={{ color: 'var(--text-primary)' }}>
                  Tools & Technologies
                </h2>
              </div>

              <motion.div
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                {project.tools.map((tool) => {
                  const variant = getBadgeVariant(tool);
                  return (
                    <motion.div
                      key={tool}
                      variants={badgeVariants}
                      className="card flex items-center justify-center p-4 text-center"
                    >
                      <span className={`${variant} text-xs`}>{tool}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          </AnimatedSection>

          {/* Divider */}
          <div className="section-divider my-8 md:my-12" />
        </>
      )}

      {/* ══════════════════════════════════
          RESULTS & IMPACT
          ══════════════════════════════════ */}
      {project.outcomes && (
        <AnimatedSection index={5}>
          <section className="container-custom py-8 md:py-12">
            <div className="section-glass relative p-6 md:p-10">
              {/* Highlight accent */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at top left, var(--brand-green-bg) 0%, transparent 50%)',
                  borderRadius: 'inherit',
                }}
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      background: 'var(--brand-green-bg)',
                      border: '1px solid var(--brand-green-border)',
                    }}
                  >
                    <CheckCircle2
                      className="h-5 w-5"
                      style={{ color: 'var(--brand-green)' }}
                    />
                  </div>
                  <h2 style={{ color: 'var(--text-primary)' }}>
                    Results & Impact
                  </h2>
                </div>

                <p
                  className="max-w-4xl text-base leading-relaxed md:text-lg md:leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.outcomes}
                </p>

                {/* Outcome highlight pills */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.outcomes
                    .split('.')
                    .filter((s) => s.trim().length > 0)
                    .slice(0, 4)
                    .map((outcome, i) => {
                      const hasMetric = /\d/.test(outcome);
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="card flex items-center gap-2 px-4 py-2.5"
                        >
                          <CheckCircle2
                            className="h-4 w-4 flex-shrink-0"
                            style={{
                              color: hasMetric
                                ? 'var(--brand-green)'
                                : 'var(--brand-cyan)',
                            }}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {outcome.trim()}
                          </span>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Divider */}
      <div className="section-divider my-8 md:my-12" />

      {/* ══════════════════════════════════
          PREV / NEXT NAVIGATION
          ══════════════════════════════════ */}
      <AnimatedSection index={6}>
        <nav
          className="container-custom py-8 md:py-12"
          aria-label="Project navigation"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Previous Project */}
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="card card-accent-top-cyan group flex items-center gap-4 p-5 transition-all"
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: 'var(--brand-cyan-bg)',
                    border: '1px solid var(--brand-cyan-border)',
                  }}
                >
                  <ArrowLeft
                    className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                    style={{ color: 'var(--brand-cyan)' }}
                  />
                </div>
                <div className="min-w-0">
                  <div
                    className="mb-0.5 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Previous Project
                  </div>
                  <div
                    className="truncate text-sm font-semibold transition-colors group-hover:text-[var(--brand-cyan)]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {prevProject.name}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Next Project */}
            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="card card-accent-top-orange group flex items-center justify-end gap-4 p-5 text-right transition-all"
              >
                <div className="min-w-0">
                  <div
                    className="mb-0.5 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Next Project
                  </div>
                  <div
                    className="truncate text-sm font-semibold transition-colors group-hover:text-[var(--brand-orange)]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {nextProject.name}
                  </div>
                </div>
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: 'var(--brand-orange-bg)',
                    border: '1px solid var(--brand-orange-border)',
                  }}
                >
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    style={{ color: 'var(--brand-orange)' }}
                  />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </AnimatedSection>

      {/* Bottom spacer */}
      <div className="h-16" />
    </main>
  );
}
