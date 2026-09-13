import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/lib/projects";

export function ProjectNavigation({
  previous,
  next,
}: {
  previous: Project;
  next: Project;
}): ReactNode {
  return (
    <nav aria-label="Project navigation" className="grid gap-3 sm:grid-cols-2">
      <Link
        href={`/projects/${previous.slug}`}
        className="focus-ring border-foreground/8 bg-background hover:bg-foreground/5 group rounded-2xl border p-4 transition-colors"
      >
        <span className="text-foreground/50 flex items-center gap-2 text-xs">
          <ArrowLeft
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Previous project
        </span>
        <span className="text-foreground mt-2 block font-medium">
          {previous.name}
        </span>
      </Link>
      <Link
        href={`/projects/${next.slug}`}
        className="focus-ring border-foreground/8 bg-background hover:bg-foreground/5 group rounded-2xl border p-4 text-right transition-colors"
      >
        <span className="text-foreground/50 flex items-center justify-end gap-2 text-xs">
          Next project
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
        <span className="text-foreground mt-2 block font-medium">
          {next.name}
        </span>
      </Link>
    </nav>
  );
}
