"use client"

import { Suspense } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { ArrowLeft, Bell } from "lucide-react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { GlassNavbar } from "@/components/glass-navbar"
import { Footer } from "@/components/sections/footer"
import { fadeUp, staggerContainer } from "@/lib/motion"

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GlassNavbar />
      <Suspense fallback={<section className="min-h-screen bg-section-light" />}>
        <ComingSoonContent />
      </Suspense>
      <Footer />
    </main>
  )
}

function ComingSoonContent() {
  const searchParams = useSearchParams()
  const product = searchParams.get("product")?.trim()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-section-light px-6 pt-32 pb-20 text-center">
      {/* Soft radial glow — same warmth as the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,160,23,0.18) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center gap-6"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
          <span className="text-xs font-bold tracking-[0.12em] text-[#D4A017] uppercase">
            Coming soon
          </span>
        </motion.div>

        {/* Illustration */}
        <motion.div variants={fadeUp}>
          <SproutingSeed />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="max-w-xl text-[34px] leading-[1.15] font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {product ? (
            <>
              <span className="gradient-gold-text">{product}</span> is on the way.
            </>
          ) : (
            <>
              Something is{" "}
              <span className="gradient-gold-text">growing</span> here.
            </>
          )}
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={fadeUp}
          className="max-w-md text-[16px] leading-relaxed text-muted-foreground"
        >
          {product
            ? `We're putting the finishing touches on ${product}. It'll be ready to help you save smarter very soon.`
            : "We're working hard to bring you something special. It'll be ready to help you save smarter very soon."}
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="gradient" size="default" className="gap-2 px-6" asChild>
            <Link href="/">
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </Button>
          <Button variant="outline" size="default" className="gap-2 px-6" asChild>
            <Link href="https://dashboard.grownest.africa/signup">
              <Bell size={16} />
              Notify me
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ── On-brand "sprouting seed" illustration ─────────────────────── */
function SproutingSeed() {
  const reduceMotion = useReducedMotion()

  const float = reduceMotion
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
      }

  const leafSway = reduceMotion
    ? {}
    : {
        animate: { rotate: [-3, 3, -3] },
        transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const },
      }

  return (
    <motion.svg
      {...float}
      viewBox="0 0 440 380"
      role="img"
      aria-label="A seedling sprouting from soil — something new is growing"
      className="h-auto w-[280px] sm:w-[340px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="csLeaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E0B85A" />
          <stop offset="1" stopColor="#B49233" />
        </linearGradient>
        <linearGradient id="csStem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D4A853" />
          <stop offset="1" stopColor="#C28F12" />
        </linearGradient>
        <linearGradient id="csSoil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C99F3E" />
          <stop offset="1" stopColor="#8A6C1E" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="220" cy="352" rx="150" ry="20" fill="#D4A017" opacity="0.1" />

      {/* Sparkles rising — "soon" energy */}
      <circle cx="120" cy="120" r="3" fill="#D4A017" opacity="0.4" />
      <circle cx="320" cy="150" r="2.5" fill="#D4A017" opacity="0.3" />
      <circle cx="96" cy="210" r="2" fill="#D4A017" opacity="0.3" />
      <circle cx="336" cy="220" r="2.5" fill="#D4A017" opacity="0.35" />

      {/* Dashed "growth" arc above the sprout */}
      <path
        d="M150,150 C200,96 240,96 290,150"
        fill="none"
        stroke="#D4A017"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 8"
        opacity="0.45"
      />

      {/* Sprout — stem + two leaves */}
      <motion.g {...leafSway} style={{ transformOrigin: "220px 250px" }}>
        <path
          d="M220,260 C218,225 218,200 220,170"
          fill="none"
          stroke="url(#csStem)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Left leaf */}
        <path
          d="M220,205 C190,192 168,205 170,228 C198,232 220,222 220,205 Z"
          fill="url(#csLeaf)"
        />
        {/* Right leaf */}
        <path
          d="M220,188 C250,172 274,184 272,208 C244,214 220,205 220,188 Z"
          fill="url(#csLeaf)"
        />
        {/* Bud at the tip */}
        <circle cx="220" cy="168" r="9" fill="#D4A017" />
        <circle cx="216" cy="164" r="3" fill="#FFEB99" opacity="0.7" />
      </motion.g>

      {/* Soil mound */}
      <path
        d="M120,300 C120,268 170,250 220,250 C270,250 320,268 320,300 C320,318 280,328 220,328 C160,328 120,318 120,300 Z"
        fill="url(#csSoil)"
      />
      {/* Soil rim highlight */}
      <path
        d="M138,288 C170,266 270,266 302,288"
        fill="none"
        stroke="#E0B85A"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Soil texture dashes */}
      <path
        d="M168,306 l22,-6 M250,306 l22,4 M206,318 l24,-4"
        fill="none"
        stroke="#6E561B"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />
    </motion.svg>
  )
}
