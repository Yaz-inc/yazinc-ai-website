import { projects } from '@/data';
import PortfolioDetail from './PortfolioDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} | Yazinc AI Portfolio`,
    description: project.goals,
    openGraph: {
      title: `${project.name} | Yazinc AI`,
      description: project.goals,
      images: [project.image],
    },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <PortfolioDetail project={project} />;
}
