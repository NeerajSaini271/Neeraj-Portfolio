"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const PHOTOS = [
  {
    id: "primary",
    src: "/neeraj.webp",
    alt: "Professional portrait",
    rotate: -3,
    imageClassName: "object-cover",
  },
] as const;

export function PolaroidStrip(): ReactNode {
  return (
    <div className="flex w-full flex-wrap items-start justify-center gap-4 px-4 sm:gap-6 sm:px-8">
      {PHOTOS.map((photo, index) => (
        <motion.figure
          key={photo.id}
          initial={{
            opacity: 0,
            y: -80,
            filter: "blur(14px)",
            rotate: photo.rotate,
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            rotate: photo.rotate,
          }}
          whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
          transition={{
            duration: 0.75,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative aspect-[3/4] w-[clamp(12rem,24vw,17rem)] transform-gpu overflow-hidden rounded-2xl border-[6px] border-neutral-300/40 bg-white p-1.5 [backface-visibility:hidden] dark:border-white/15 dark:bg-neutral-900"
        >
          <div className="bg-foreground/5 relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="220px"
              className={photo.imageClassName}
              priority={index === 0}
            />
          </div>
        </motion.figure>
      ))}
    </div>
  );
}
