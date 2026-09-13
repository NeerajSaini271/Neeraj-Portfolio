import { ArrowLeft, GitFork, Github, GitPullRequest } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import type { ProfessionalContribution } from "@/lib/professional-contributions";

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

function ExternalAction({
  href,
  label,
  icon: Icon,
  primary = false,
}: {
  href: string;
  label: string;
  icon: typeof Github;
  primary?: boolean;
}): ReactNode {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? "focus-ring bg-foreground text-background inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium"
          : "focus-ring border-foreground/8 hover:bg-foreground/5 inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors"
      }
    >
      {label}
      <Icon className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function ProfessionalContributionDetail({
  contribution,
}: {
  contribution: ProfessionalContribution;
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
              {contribution.label}
            </p>
            <h1 className="text-foreground mt-3 font-serif text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
              {contribution.name}
            </h1>
            <p className="text-foreground/65 mt-6 max-w-3xl text-lg leading-relaxed">
              {contribution.description}
            </p>
            <div className="border-foreground/8 bg-foreground/3 text-foreground/70 mt-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium">
              <GitPullRequest className="h-4 w-4" aria-hidden="true" />
              {contribution.prCount} closed pull requests
            </div>
          </header>
          <div className="mt-8 flex flex-wrap gap-2">
            {contribution.technologies.map((technology) => (
              <span
                key={technology}
                className="border-foreground/8 bg-foreground/3 text-foreground/70 rounded-full border px-3 py-1.5 text-xs"
              >
                {technology}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ExternalAction
              href={contribution.pullRequestsUrl}
              label="My pull requests"
              icon={GitPullRequest}
              primary
            />
            <ExternalAction
              href={contribution.originalUrl}
              label="Original project"
              icon={Github}
            />
            <ExternalAction
              href={contribution.forkUrl}
              label="My fork"
              icon={GitFork}
            />
          </div>
        </FadeIn>
        <FadeIn className="border-foreground/8 bg-foreground/3 mt-12 overflow-hidden rounded-3xl border p-2 sm:p-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={contribution.lightImage}
              alt={contribution.imageAlt}
              fill
              priority
              sizes="(min-width: 1200px) 1100px, 100vw"
              className="object-cover object-top dark:hidden"
            />
            <Image
              src={contribution.darkImage}
              alt={contribution.imageAlt}
              fill
              priority
              sizes="(min-width: 1200px) 1100px, 100vw"
              className="hidden object-cover object-top dark:block"
            />
          </div>
        </FadeIn>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="border-foreground/8 bg-background rounded-3xl border p-6 sm:p-8 lg:col-span-2">
            <h2 className="text-foreground font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Contribution overview
            </h2>
            <div className="text-foreground/65 mt-5 grid gap-4 leading-relaxed">
              {contribution.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <ListSection title="Contribution areas" items={contribution.areas} />
          <ListSection
            title="Verified highlights"
            items={contribution.highlights}
          />
          <section className="border-foreground/8 bg-background rounded-3xl border p-6 sm:p-8 lg:col-span-2">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-foreground/50 text-sm font-medium">
                  6 selected contributions
                </p>
                <h2 className="text-foreground mt-1 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                  Selected pull requests
                </h2>
              </div>
              <Link
                href={contribution.pullRequestsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring border-foreground/8 text-foreground hover:bg-foreground/5 inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors"
              >
                View all {contribution.prCount} PRs
                <GitPullRequest className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {contribution.pullRequestHighlights.map((pullRequest) => (
                <Link
                  key={pullRequest.number}
                  href={pullRequest.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring border-foreground/8 hover:bg-foreground/3 rounded-2xl border p-4 transition-colors"
                >
                  <p className="text-foreground/50 text-xs font-medium">
                    PR #{pullRequest.number}
                  </p>
                  <p className="text-foreground mt-2 text-sm leading-relaxed font-medium">
                    {pullRequest.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
          <section className="border-foreground/8 bg-foreground/3 rounded-3xl border p-6 sm:p-8 lg:col-span-2">
            <h2 className="text-foreground font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Ownership note
            </h2>
            <p className="text-foreground/65 mt-5 leading-relaxed">
              {contribution.note}
            </p>
          </section>
        </div>
      </article>
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
