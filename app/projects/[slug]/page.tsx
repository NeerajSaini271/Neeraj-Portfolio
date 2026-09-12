import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ProjectDetail } from "@/components/projects/project-detail";
import { createMetadata } from "@/lib/metadata";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams(): { slug: string }[] {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<ReactNode> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous =
    projects[(index - 1 + projects.length) % projects.length] ?? project;
  const next = projects[(index + 1) % projects.length] ?? project;
  return <ProjectDetail project={project} previous={previous} next={next} />;
}
