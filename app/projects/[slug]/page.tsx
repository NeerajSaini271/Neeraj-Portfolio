import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ProfessionalContributionDetail } from "@/components/projects/professional-contribution-detail";
import { ProjectDetail } from "@/components/projects/project-detail";
import { createMetadata } from "@/lib/metadata";
import { getProject, projects } from "@/lib/projects";
import {
  getProfessionalContribution,
  professionalContributions,
} from "@/lib/professional-contributions";

export function generateStaticParams(): { slug: string }[] {
  return [...projects, ...professionalContributions].map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  const contribution = getProfessionalContribution(slug);
  if (!project && !contribution) return {};
  return createMetadata({
    title: project?.name ?? contribution!.name,
    description: project?.description ?? contribution!.description,
    path: `/projects/${slug}`,
    image: project?.image ?? contribution!.lightImage,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<ReactNode> {
  const { slug } = await params;
  const project = getProject(slug);
  const contribution = getProfessionalContribution(slug);
  if (contribution)
    return <ProfessionalContributionDetail contribution={contribution} />;
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous =
    projects[(index - 1 + projects.length) % projects.length] ?? project;
  const next = projects[(index + 1) % projects.length] ?? project;
  return <ProjectDetail project={project} previous={previous} next={next} />;
}
