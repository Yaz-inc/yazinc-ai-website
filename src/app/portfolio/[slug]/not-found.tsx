import Link from 'next/link';

export default function PortfolioNotFound() {
  return (
    <main
      className="relative z-[1] flex min-h-screen flex-col items-center justify-center px-6"
      style={{ background: 'var(--bg-body)' }}
    >
      {/* Glow effects */}
      <div
        className="glow-spot glow-orange"
        style={{ top: '20%', left: '10%' }}
      />
      <div
        className="glow-spot glow-cyan"
        style={{ bottom: '15%', right: '10%' }}
      />

      <div className="relative z-10 text-center">
        {/* 404 number */}
        <div
          className="mb-4 text-8xl font-bold md:text-9xl"
          style={{
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </div>

        {/* Heading */}
        <h1
          className="mb-4 text-3xl font-bold md:text-4xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Project Not Found
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-8 max-w-md text-base"
          style={{ color: 'var(--text-secondary)' }}
        >
          The project you&apos;re looking for doesn&apos;t exist. It may have
          been removed or the URL might be incorrect.
        </p>

        {/* Back to Portfolio button */}
        <Link href="/#portfolio" className="btn-primary btn-lg inline-flex items-center gap-2">
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
