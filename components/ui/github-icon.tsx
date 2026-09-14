import Image from "next/image";
import type { ReactNode } from "react";

export function GitHubIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}): ReactNode {
  return (
    <Image
      src="/github.svg"
      alt=""
      width={16}
      height={16}
      aria-hidden="true"
      className={`object-contain dark:invert ${className}`}
    />
  );
}
