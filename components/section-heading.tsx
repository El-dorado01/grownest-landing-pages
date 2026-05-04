"use client"

import { motion } from "motion/react"
import { fadeUp, scrollViewport } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  /** Wrap a word in <gold>word</gold> to render it in gradient gold */
  description?: string
  align?: "left" | "center"
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center"

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={fadeUp}
      className={cn(
        "flex flex-col gap-3",
        isCenter && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-1.5" style={isCenter ? { justifyContent: "center" } : {}}>
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#D4A017]"
            aria-hidden="true"
          />
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#D4A017]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl font-bold leading-tight text-[#1A1A1A] sm:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p className={cn(
          "text-[15px] leading-relaxed text-[#757575]",
          isCenter && "max-w-xl"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
