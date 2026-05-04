"use client"

import { motion } from "motion/react"
import type { Variants } from "motion/react"
import { fadeUp, scrollViewport } from "@/lib/motion"

interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const v: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(typeof variants.visible === "object" ? variants.visible : {}),
          transition: {
            ...((typeof variants.visible === "object" &&
              "transition" in variants.visible &&
              typeof variants.visible.transition === "object")
              ? variants.visible.transition
              : {}),
            delay,
          },
        },
      }
    : variants

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={v}
      className={className}
    >
      {children}
    </motion.div>
  )
}
