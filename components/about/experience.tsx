import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const CONTRIBUTIONS = [
  {
    name: "InternOps",
    summary:
      "Contributing across authentication and session security, role-based access control, attendance and ratings workflows, administrative tooling, certificate generation, file delivery, frontend performance, and operational reliability.",
    pullRequests: "46 closed pull requests",
    href: "https://github.com/rajat-wyrm/InternOps/pulls?q=is%3Apr+state%3Aclosed+author%3ANeerajSaini271",
  },
  {
    name: "AI Mentor",
    summary:
      "Contributed across admin workflows, authentication security, course progress, discussions, API reliability, database integrity, SEO, and AI-service stability.",
    pullRequests: "13 closed pull requests",
    href: "https://github.com/Mukesh-01-dev/Ai-Mentor/pulls?q=is%3Apr+state%3Aclosed+author%3ANeerajSaini271",
  },
] as const;

export function Experience(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Experience
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-4xl border p-2 sm:p-4">
        <article className="border-foreground/5 bg-background rounded-3xl border p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h4 className="text-foreground text-[19px] font-semibold tracking-tight">
                UptoSkills
              </h4>
              <p className="text-foreground/65 mt-1 text-[15px]">
                MERN Stack Intern · Remote
              </p>
            </div>
            <span className="border-foreground/8 text-foreground/65 rounded-full border px-3 py-1 text-[13px]">
              Apr 2026 - Present
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {CONTRIBUTIONS.map((item) => (
              <div key={item.name} className="bg-foreground/3 rounded-2xl p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h5 className="text-foreground font-semibold">{item.name}</h5>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-foreground/60 hover:text-foreground inline-flex items-center gap-1 text-[13px] font-medium"
                  >
                    {item.pullRequests}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
                <p className="text-foreground/65 mt-2 text-[14px] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="border-foreground/8 mt-5 flex items-start gap-3 rounded-2xl border p-4">
            <Award className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-foreground font-semibold">
                Intern of the Month
              </p>
              <p className="text-foreground/65 mt-1 text-[14px] leading-relaxed">
                Recognized in August 2026 for performance and contributions in
                the MERN Stack domain.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
