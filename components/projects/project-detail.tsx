import { ArrowLeft, ExternalLink, Server } from "lucide-react";
import Image from "next/image";
import { GitHubIcon } from "@/components/ui/github-icon";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactCard } from "@/components/contact/contact-card";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { FadeIn } from "@/components/ui/motion-primitives";
import type { Project } from "@/lib/projects";

function ListSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}): ReactNode {
  return (
    <section className="border-foreground/8 bg-background rounded-3xl border p-6 sm:p-8">
      <h2 className="text-foreground font-serif text-2xl font-medium tracking-tight sm:text-3xl">
        {title}
      </h2>
      <ul className="text-foreground/65 mt-5 grid gap-3 text-sm leading-relaxed sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className="bg-foreground/35 mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectDetail({
  project,
  previous,
  next,
}: {
  project: Project;
  previous: Project;
  next: Project;
}): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <article className="mx-auto w-full max-w-275 px-6 pt-36 pb-20 sm:px-10 sm:pt-44">
        <FadeIn>
          <Link
            href="/projects"
            className="focus-ring group text-foreground/60 hover:text-foreground inline-flex items-center gap-2 rounded-lg text-sm transition-colors"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Back to projects
          </Link>
          <header className="mt-10 max-w-4xl">
            <p className="text-foreground/50 text-sm font-medium">
              {project.label}
            </p>
            <h1 className="text-foreground mt-3 font-serif text-4xl leading-tight font-medium tracking-tight sm:text-5xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="text-foreground/65 mt-6 max-w-3xl text-lg leading-relaxed">
              {project.description}
            </p>
          </header>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border-foreground/8 bg-foreground/3 text-foreground/70 rounded-full border px-3 py-1.5 text-xs"
              >
                {technology}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring bg-foreground text-background inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium"
            >
              Live demo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring border-foreground/8 hover:bg-foreground/5 inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors"
            >
              Source
              <GitHubIcon className="h-4 w-4" />
            </Link>
            {project.apiUrl ? (
              <Link
                href={project.apiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring border-foreground/8 hover:bg-foreground/5 inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors"
              >
                API health
                <Server className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </FadeIn>
        <FadeIn className="border-foreground/8 bg-foreground/3 mt-12 overflow-hidden rounded-3xl border p-2 sm:p-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(min-width: 1200px) 1100px, 100vw"
              className={`object-cover object-top ${project.darkImage ? "dark:hidden" : ""}`}
            />
            {project.darkImage ? (
              <Image
                src={project.darkImage}
                alt={project.imageAlt}
                fill
                priority
                sizes="(min-width: 1200px) 1100px, 100vw"
                className="hidden object-cover object-top dark:block"
              />
            ) : null}
          </div>
        </FadeIn>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="border-foreground/8 bg-background rounded-3xl border p-6 sm:p-8 lg:col-span-2">
            <h2 className="text-foreground font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Project overview
            </h2>
            <div className="text-foreground/65 mt-5 grid gap-4 leading-relaxed">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <ListSection title="Key features" items={project.features} />
          <ListSection
            title="Technical highlights"
            items={project.highlights}
          />
          <ListSection title="Responsive behavior" items={project.responsive} />
          <section className="border-foreground/8 bg-foreground/3 rounded-3xl border p-6 sm:p-8">
            <h2 className="text-foreground font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Important note
            </h2>
            <p className="text-foreground/65 mt-5 leading-relaxed">
              {project.note}
            </p>
          </section>
        </div>
        <div className="mt-8">
          <ProjectNavigation previous={previous} next={next} />
        </div>
      </article>
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
