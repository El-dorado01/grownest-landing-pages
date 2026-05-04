"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { ArrowRight, Apple, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingCard } from "@/components/floating-card"
import {
  fadeUp,
  fadeIn,
  slideInRight,
  staggerContainer,
  scrollViewport,
} from "@/lib/motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF8E1] pt-28 pb-16 md:pt-32 md:pb-24">

      {/* Subtle radial glow behind hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,160,23,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">

          {/* ── Left: copy ─────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.12, 0)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#D4A017]">
                Africa&apos;s #1 savings platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[42px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[56px]"
            >
              The smarter way{" "}
              <span className="relative inline-block">
                <span className="gradient-gold-text">to save</span>
              </span>{" "}
              &amp; grow in Africa.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp}
              className="max-w-md text-[16px] leading-relaxed text-[#757575]"
            >
              Achieve your financial goals with personal savings, group circles,
              and smart basket plans — all in one place.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <Button variant="gradient" size="default" className="gap-2">
                Get started free
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="default">
                See how it works
              </Button>
            </motion.div>

            {/* App store badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-white transition-opacity hover:opacity-80"
              >
                <Apple size={16} />
                <div className="text-left">
                  <p className="text-[9px] leading-none opacity-70">Download on the</p>
                  <p className="text-[13px] font-semibold leading-tight">App Store</p>
                </div>
              </a>
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-white transition-opacity hover:opacity-80"
              >
                <Play size={14} />
                <div className="text-left">
                  <p className="text-[9px] leading-none opacity-70">Get it on</p>
                  <p className="text-[13px] font-semibold leading-tight">Google Play</p>
                </div>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              {/* Avatar stack placeholder */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-[#FFF8E1] bg-[#F6ECD1]"
                    style={{ zIndex: 4 - i }}
                  />
                ))}
              </div>
              <p className="text-[13px] text-[#757575]">
                <span className="font-bold text-[#1A1A1A]">50,000+</span> Africans
                already saving
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: hero image + floating cards ─────────────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            viewport={scrollViewport}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Hero image frame */}
            <div className="relative h-120 w-90 sm:h-135 sm:w-100 lg:h-145 lg:w-110">
              <div className="h-full w-full overflow-hidden rounded-[32px] shadow-[0_24px_64px_rgba(212,160,23,0.18)]">
                <Image
                  src="/images/hero-lifestyle.jpeg"
                  alt="Woman with GrowNest groceries — your food, your way"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating card 1 — balance */}
              <div className="absolute -left-10 top-12 sm:-left-14">
                <FloatingCard variant="balance" delay={0} />
              </div>

              {/* Floating card 2 — savings interest */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 sm:-right-10">
                <FloatingCard variant="savings" delay={0.5} />
              </div>

              {/* Floating card 3 — goal progress */}
              <div className="absolute -left-6 bottom-12 sm:-left-10">
                <FloatingCard variant="goal" delay={1.0} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave separator */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFF8E1] to-transparent"
      />
    </section>
  )
}
