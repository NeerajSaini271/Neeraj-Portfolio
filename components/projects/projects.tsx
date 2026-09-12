import {
  ArrowRight,
  CheckSquare2,
  ExternalLink,
  Github,
  Headphones,
  KeyRound,
  LayoutTemplate,
  Newspaper,
  PlaySquare,
  Radio,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
import { projects, type Project } from "@/lib/projects";

const ICONS: Record<Project["icon"], ComponentType<{ className?: string }>> = {
  task: CheckSquare2,
  key: KeyRound,
  journal: Newspaper,
  social: Radio,
  music: Headphones,
  store: LayoutTemplate,
  streaming: PlaySquare,
};
export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};
export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? projects.slice(0, 4) : projects;
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]">
              Selected projects
            </h2>
            <p className="text-foreground/65 max-w-[38ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
              Full-stack applications and responsive interfaces built with a
              focus on usability, reliability, and thoughtful execution.
            </p>
          </FadeIn>
        ) : null}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="focus-ring group border-foreground/8 bg-background text-foreground hover:bg-foreground/5 inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = ICONS[project.icon];
  return (
    <FadeIn delay={Math.min(index * 0.06, 0.3)} className="h-full">
      <article className="project-card border-foreground/8 bg-background flex h-full flex-col gap-4 rounded-3xl border p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 bg-background inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
            <Icon className="text-foreground h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring text-foreground rounded-md text-sm font-medium tracking-tight"
          >
            {project.label}
          </Link>
        </header>
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.name} project details`}
          className="focus-ring project-card__image bg-foreground/5 ring-foreground/5 relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1"
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className={`object-cover object-top ${project.darkImage ? "dark:hidden" : ""}`}
              priority={index < 2}
            />
            {project.darkImage ? (
              <Image
                src={project.darkImage}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className="hidden object-cover object-top dark:block"
                priority={index < 2}
              />
            ) : null}
          </div>
        </Link>
        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-foreground text-[20px] leading-[1.2] font-medium tracking-tight sm:text-[22px]">
            <Link
              href={`/projects/${project.slug}`}
              className="focus-ring rounded-md"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-foreground/65 text-[14px] leading-normal tracking-tight sm:text-[15px]">
            {project.description}
          </p>
          <p className="text-foreground/50 text-[12px] tracking-tight">
            {project.stack}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 px-1 pb-2">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring border-foreground/8 text-foreground hover:bg-foreground/5 inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-[13px] font-medium transition-colors"
          >
            View project
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring bg-foreground text-background inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium"
          >
            Live demo
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring border-foreground/8 text-foreground hover:bg-foreground/5 inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-[13px] font-medium transition-colors"
          >
            Source
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}
