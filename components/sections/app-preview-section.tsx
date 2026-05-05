"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, fadeUp, slideInRight, scrollViewport } from "@/lib/motion"

const steps = [
  {
    number: "01",
    title: "Create your account",
    description: "Sign up in under 2 minutes with just your email or phone number. No paperwork, no branch visits.",
  },
  {
    number: "02",
    title: "Set your savings goal",
    description: "Choose NestEggs, GroupNest, or NestBaskets. Set your target amount and let auto-save handle the rest.",
  },
  {
    number: "03",
    title: "Watch your nest grow",
    description: "Track real-time progress, earn NestFeathers rewards, and hit your goals faster than you thought possible.",
  },
]

const screens = [
  { src: "/images/app-home-hand.jpeg",  alt: "GrowNest app home screen in hand" },
  { src: "/images/app-nesteggs.jpeg",   alt: "NestEggs savings goal screen" },
]

export function AppPreviewSection() {
  const [flipped, setFlipped] = useState(false)

  const front = screens[flipped ? 1 : 0]
  const back  = screens[flipped ? 0 : 1]

  return (
    <section id="how-it-works" className="bg-section-lifted py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="How it works"
          title="Start saving in 3 simple steps"
          description="GrowNest is built for clarity and speed. No confusion, no hidden terms — just smart savings that work."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* ── Left: steps ────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="flex flex-col gap-8"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4A017] text-sm font-bold text-white shadow-[0_4px_12px_rgba(212,160,23,0.35)]">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-gradient-to-b from-[#D4A017]/40 to-transparent" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="mb-1.5 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Right: phone mockups (click back to swap) ──────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Back phone — clickable to swap */}
            <motion.div
              key={`back-${flipped}`}
              initial={{ opacity: 0, x: 30, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              onClick={() => setFlipped(f => !f)}
              className="absolute right-4 top-4 h-96 w-52 cursor-pointer overflow-hidden rounded-[28px] shadow-[0_16px_48px_rgba(0,0,0,0.14)] will-change-transform lg:h-[420px] lg:w-56 ring-2 ring-transparent hover:ring-[#D4A017]/50 transition-shadow duration-200"
              title="Tap to switch screen"
            >
              <Image
                src={back.src}
                alt={back.alt}
                fill
                className="object-cover object-top"
              />
              {/* Hint overlay */}
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-gradient-to-t from-black/40 to-transparent">
                <span className="text-[10px] font-semibold text-white/80 tracking-wider">TAP TO SWITCH</span>
              </div>
            </motion.div>

            {/* Front phone */}
            <motion.div
              key={`front-${flipped}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative z-10 h-96 w-52 overflow-hidden rounded-[28px] shadow-[0_24px_64px_rgba(212,160,23,0.20)] will-change-transform lg:h-[420px] lg:w-56"
            >
              <Image
                src={front.src}
                alt={front.alt}
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
