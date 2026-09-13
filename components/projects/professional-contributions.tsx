import {
  ArrowRight,
  Building2,
  GitFork,
  Github,
  GitPullRequest,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
import { professionalContributions } from "@/lib/professional-contributions";

function ActionLink({
  href,
  label,
  icon: Icon,
  primary = false,
}: {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  primary?: boolean;
}): ReactNode {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? "focus-ring bg-foreground text-background inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium"
          : "focus-ring border-foreground/8 text-foreground hover:bg-foreground/5 inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-[13px] font-medium transition-colors"
      }
    >
      {label}
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
    </Link>
  );
}

export function ProfessionalContributions(): ReactNode {
  return (
    <section className="relative w-full pt-12 sm:pt-18">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <div
          id="professional-contributions"
          className="scroll-mt-16 sm:scroll-mt-20"
          aria-hidden="true"
        />
        <FadeIn className="flex flex-col items-center gap-5 pb-10 text-center sm:pb-14">
          <div className="border-foreground/8 bg-foreground/3 text-foreground/70 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium">
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            UptoSkills Internship
          </div>
          <h2 className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]">
            Professional contributions
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="border-foreground/8 bg-foreground/3 text-foreground/70 rounded-full border px-3 py-1.5 text-xs font-medium">
              59 closed PRs
            </span>
            <span className="border-foreground/8 bg-foreground/3 text-foreground/70 rounded-full border px-3 py-1.5 text-xs font-medium">
              2 collaborative platforms
            </span>
          </div>
          <p className="text-foreground/65 max-w-[42ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
            Verified collaborative work across production-oriented learning and
            workforce platforms, with individual contributions documented
            through public pull requests.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7">
          {professionalContributions.map((item, index) => (
            <FadeIn
              key={item.name}
              delay={Math.min(index * 0.08, 0.2)}
              className="h-full"
            >
              <article className="project-card border-foreground/8 bg-background flex h-full flex-col gap-4 rounded-3xl border p-3 sm:p-3.5">
                <header className="flex items-start justify-between gap-3 px-1 pt-2">
                  <div>
                    <p className="text-foreground/50 text-xs font-medium">
                      {item.label}
                    </p>
                    <h3 className="text-foreground mt-1 text-[20px] leading-tight font-medium tracking-tight sm:text-[22px]">
                      {item.name}
                    </h3>
                  </div>
                  <span className="border-foreground/8 bg-foreground/3 text-foreground/70 inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-medium">
                    <GitPullRequest
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                    {item.prCount} closed PRs
                  </span>
                </header>
                <div className="project-card__image bg-foreground/5 ring-foreground/5 relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1">
                  <div className="project-card__image-inner">
                    <Image
                      src={item.lightImage}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                      className="object-cover object-top dark:hidden"
                      priority={false}
                    />
                    <Image
                      src={item.darkImage}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                      className="hidden object-cover object-top dark:block"
                      priority={false}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 px-1 pb-1">
                  <p className="text-foreground/65 text-[14px] leading-relaxed tracking-tight sm:text-[15px]">
                    {item.description}
                  </p>
                  <p className="text-foreground/65 text-[14px] leading-relaxed tracking-tight sm:text-[15px]">
                    <span className="text-foreground font-medium">
                      My work:
                    </span>{" "}
                    {item.contribution}
                  </p>
                  <p className="text-foreground/50 text-[12px] tracking-tight">
                    {item.stack}
                  </p>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-2 px-1 pb-2 max-[420px]:grid-cols-1">
                  <Link
                    href={`/projects/${item.slug}`}
                    className="focus-ring group border-foreground/8 text-foreground hover:bg-foreground/5 inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-center text-[13px] font-medium transition-colors"
                  >
                    View contribution
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                  <ActionLink
                    href={item.pullRequestsUrl}
                    label="My pull requests"
                    icon={GitPullRequest}
                    primary
                  />
                  <ActionLink
                    href={item.originalUrl}
                    label="Original project"
                    icon={Github}
                  />
                  <ActionLink
                    href={item.forkUrl}
                    label="My fork"
                    icon={GitFork}
                  />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12">
          <Link
            href="https://github.com/NeerajSaini271"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring border-foreground/8 bg-background text-foreground hover:bg-foreground/5 inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
          >
            View GitHub profile
            <Github className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/about"
            className="focus-ring group border-foreground/8 bg-background text-foreground hover:bg-foreground/5 inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
          >
            View internship experience
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
export function ProfessionalContributionsPreview(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center gap-4 pb-8 text-center">
          <p className="text-foreground/50 text-xs font-medium tracking-[0.18em] uppercase">
            UptoSkills Internship
          </p>
          <h2 className="text-foreground font-serif text-[2.25rem] leading-tight font-medium tracking-tight sm:text-[2.75rem]">
            Professional contributions
          </h2>
          <p className="text-foreground/65 max-w-[38ch] text-[17px] leading-relaxed">
            59 closed PRs across 2 collaborative platforms.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {professionalContributions.map((item, index) => (
            <FadeIn key={item.slug} delay={index * 0.06} className="h-full">
              <article className="project-card border-foreground/8 bg-background flex h-full flex-col overflow-hidden rounded-3xl border p-3 sm:p-3.5">
                <Link
                  href={`/projects/${item.slug}`}
                  aria-label={`View ${item.name} contribution details`}
                  className="focus-ring project-card__image bg-foreground/5 ring-foreground/5 relative aspect-[16/10] overflow-hidden rounded-2xl ring-1"
                >
                  <div className="project-card__image-inner">
                    <Image
                      src={item.lightImage}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                      className="object-cover object-top dark:hidden"
                    />
                    <Image
                      src={item.darkImage}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                      className="hidden object-cover object-top dark:block"
                    />
                  </div>
                </Link>
                <div className="flex flex-1 flex-col gap-3 px-1 pt-5 pb-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-foreground text-xl font-medium">
                        {item.name}
                      </p>
                      <p className="text-foreground/50 mt-1 text-xs font-medium">
                        Collaborative internship project
                      </p>
                    </div>
                    <span className="border-foreground/8 bg-foreground/3 text-foreground/70 rounded-full border px-2.5 py-1.5 text-xs font-medium">
                      {item.prCount} closed PRs
                    </span>
                  </div>
                  <p className="text-foreground/65 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    href={`/projects/${item.slug}`}
                    className="focus-ring group border-foreground/8 text-foreground hover:bg-foreground/5 mt-auto inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-2 text-[13px] font-medium transition-colors"
                  >
                    View contribution
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.18} className="mt-8 flex justify-center">
          <Link
            href="/projects#professional-contributions"
            className="focus-ring group border-foreground/8 bg-background text-foreground hover:bg-foreground/5 inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Explore all work
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
