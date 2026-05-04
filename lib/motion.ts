import type { Variants } from "motion/react"

// ── Entrance variants ─────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
  },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1], // overshoot spring
    },
  },
}

// ── Stagger container ────────────────────────────────────────────
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

// ── Continuous / loop animations ────────────────────────────────
export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
}

export const floatAnimationDelayed = {
  y: [0, -8, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 0.8,
  },
}

export const pulseGlow = {
  boxShadow: [
    "0 4px 12px rgba(212,160,23,0.20)",
    "0 4px 24px rgba(212,160,23,0.45)",
    "0 4px 12px rgba(212,160,23,0.20)",
  ],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

// ── Scroll-reveal viewport config ───────────────────────────────
export const scrollViewport = { once: true, amount: 0.2 }
