import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const COLLEGE_URL = "https://bkbiet.ac.in/";

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Education
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-4xl border p-2 sm:p-4">
        <a
          href={COLLEGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit the official B K Birla Institute of Engineering & Technology website"
          className="focus-ring border-foreground/5 bg-background hover:border-foreground/15 hover:bg-foreground/2 group flex items-start gap-4 rounded-3xl border p-4 transition-colors"
        >
          <span className="border-foreground/10 inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border bg-white p-1.5">
            <Image
              src="/education/bkbiet-logo.svg"
              alt="B K Birla Institute of Engineering & Technology logo"
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                B K Birla Institute of Engineering & Technology
              </h4>
              <ExternalLink
                aria-hidden="true"
                className="text-foreground/35 group-hover:text-foreground/60 mt-1 h-4 w-4 shrink-0 transition-colors"
              />
            </div>
            <p className="text-foreground/65 mt-1 text-[14px] leading-relaxed sm:text-[15px]">
              B.Tech in Computer Science (Data Science)
            </p>
            <p className="text-foreground/50 mt-1 text-[13px]">
              2021 - 2025 · 87.2%
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
