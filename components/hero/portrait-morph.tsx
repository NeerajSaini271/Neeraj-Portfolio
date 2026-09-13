"use client";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { PointerEvent, ReactNode } from "react";

export type PortraitMorphProps = {
  src: string;
  alt: string;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function PortraitMorph({
  src,
  alt,
  className,
}: PortraitMorphProps): ReactNode {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>): void => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    setPointerOffset({ x, y });
  };

  const resetPointer = (): void => {
    setHovered(false);
    setPointerOffset({ x: 0, y: 0 });
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      onPointerEnter={() => setHovered(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <motion.img
        src={src}
        alt=""
        aria-hidden="true"
        draggable={false}
        initial={false}
        animate={
          reduceMotion
            ? { scale: 1, x: 0, y: 0, filter: "grayscale(100%) contrast(100%)" }
            : {
                scale: hovered ? 1.025 : 1,
                x: pointerOffset.x,
                y: pointerOffset.y + (hovered ? -4 : 0),
                filter: hovered
                  ? "grayscale(100%) contrast(104%)"
                  : "grayscale(100%) contrast(100%)",
              }
        }
        transition={{ duration: 0.45, ease: EASE }}
        className="absolute inset-0 h-full w-full object-cover select-none"
      />
    </div>
  );
}
