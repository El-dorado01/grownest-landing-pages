"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GlassNavbar } from "@/components/glass-navbar"
import { Footer } from "@/components/sections/footer"
import { fadeUp, staggerContainer } from "@/lib/motion"

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GlassNavbar />

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
              Error 404
            </span>
          </motion.div>

          {/* Illustration */}
          <motion.div variants={fadeUp}>
            <EmptyNest />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="max-w-xl text-[34px] leading-[1.15] font-bold tracking-tight text-foreground sm:text-5xl"
          >
            This page flew the{" "}
            <span className="gradient-gold-text">nest</span>.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="max-w-md text-[16px] leading-relaxed text-muted-foreground"
          >
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have
            moved. Let&rsquo;s get you back to growing your savings.
          </motion.p>

          {/* Primary action — the footer below covers everything else */}
          <motion.div variants={fadeUp}>
            <Button variant="gradient" size="default" className="gap-2 px-6" asChild>
              <Link href="/">
                <ArrowLeft size={16} />
                Back to home
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

/* ── On-brand "empty nest" illustration ─────────────────────────── */
function EmptyNest() {
  const reduceMotion = useReducedMotion()

  const float = reduceMotion
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
      }

  const birdFloat = reduceMotion
    ? {}
    : {
        animate: { y: [0, -6, 0], x: [0, 5, 0] },
        transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
      }

  return (
    <motion.svg
      {...float}
      viewBox="0 0 440 380"
      role="img"
      aria-label="An empty nest with eggs and a bird flying away"
      className="h-auto w-[280px] sm:w-[340px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="nestGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E0B85A" />
          <stop offset="1" stopColor="#B49233" />
        </linearGradient>
        <radialGradient id="eggGrad" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#FFFDF5" />
          <stop offset="1" stopColor="#EFE2BD" />
        </radialGradient>
        <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D4A853" />
          <stop offset="1" stopColor="#C28F12" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="220" cy="352" rx="150" ry="20" fill="#D4A017" opacity="0.1" />

      {/* Flight trail */}
      <path
        d="M210,150 C250,80 300,66 348,72"
        fill="none"
        stroke="#D4A017"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 8"
        opacity="0.45"
      />

      {/* Birds that flew the nest */}
      <motion.g {...birdFloat}>
        <path
          d="M338,74 Q350,60 362,74 Q374,60 386,74"
          fill="none"
          stroke="#B49233"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M292,52 Q300,44 308,52 Q316,44 324,52"
          fill="none"
          stroke="#C9A23E"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
      </motion.g>

      {/* Sparkles */}
      <circle cx="118" cy="118" r="3" fill="#D4A017" opacity="0.4" />
      <circle cx="332" cy="150" r="2.5" fill="#D4A017" opacity="0.3" />
      <circle cx="86" cy="210" r="2" fill="#D4A017" opacity="0.3" />

      {/* Nest back rim */}
      <ellipse cx="220" cy="210" rx="128" ry="42" fill="url(#nestGrad)" />
      <path
        d="M96,206 C140,176 300,176 344,206"
        fill="none"
        stroke="#EBC976"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Hollow interior */}
      <ellipse cx="220" cy="208" rx="98" ry="30" fill="#6E561B" />

      {/* Sprout — the "grow" in GrowNest */}
      <path
        d="M218,205 C214,185 212,170 214,150"
        fill="none"
        stroke="url(#leafGrad)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M214,170 C198,162 188,170 190,184 C204,186 214,180 214,170 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M214,160 C230,150 242,158 240,172 C226,176 214,170 214,160 Z"
        fill="url(#leafGrad)"
      />
      <circle cx="214" cy="150" r="5" fill="#D4A017" />

      {/* Egg shadow inside the nest */}
      <ellipse cx="222" cy="230" rx="62" ry="12" fill="#000000" opacity="0.08" />

      {/* Eggs */}
      <g transform="rotate(-10 196 210)">
        <ellipse cx="196" cy="210" rx="26" ry="32" fill="url(#eggGrad)" />
        <ellipse cx="188" cy="198" rx="6" ry="10" fill="#ffffff" opacity="0.5" />
      </g>
      <g transform="rotate(9 246 214)">
        <ellipse cx="246" cy="214" rx="24" ry="30" fill="url(#eggGrad)" />
        <ellipse cx="239" cy="203" rx="5" ry="9" fill="#ffffff" opacity="0.5" />
      </g>

      {/* Front lip — seats the eggs inside the nest */}
      <path
        d="M92,210 C98,292 150,342 220,342 C290,342 342,292 348,210 C348,236 300,246 220,246 C140,246 92,236 92,210 Z"
        fill="url(#nestGrad)"
      />

      {/* Woven texture */}
      <path
        d="M110,232 C150,300 290,300 330,232"
        fill="none"
        stroke="#9C7B22"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M100,250 C150,322 290,322 340,250"
        fill="none"
        stroke="#9C7B22"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M126,300 C170,330 270,330 314,300"
        fill="none"
        stroke="#C99F3E"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M150,318 l26,-10 M270,316 l26,8 M208,338 l24,-6"
        fill="none"
        stroke="#8A6C1E"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />
    </motion.svg>
  )
}
