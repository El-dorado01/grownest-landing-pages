"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, fadeUp, slideInLeft, slideInRight, scrollViewport } from "@/lib/motion"

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

export function AppPreviewSection() {
  return (
    <section id="how-it-works" className="bg-[#FFFDF5] py-20 md:py-28 overflow-hidden">
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
                {/* Step number + connector */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4A017] text-sm font-bold text-white shadow-[0_4px_12px_rgba(212,160,23,0.35)]">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-gradient-to-b from-[#D4A017]/40 to-transparent" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h3 className="mb-1.5 text-lg font-bold text-[#1A1A1A]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#757575]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Right: phone mockups ────────────────────────────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Back phone */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 6 }}
              whileInView={{ opacity: 1, x: 0, rotate: 6 }}
              viewport={scrollViewport}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="absolute right-4 top-4 h-96 w-52 overflow-hidden rounded-[28px] shadow-[0_16px_48px_rgba(0,0,0,0.14)] will-change-transform lg:h-[420px] lg:w-56"
            >
              <Image
                src="/images/app-nesteggs.jpeg"
                alt="NestEggs savings goal screen"
                fill
                className="object-cover object-top"
              />
            </motion.div>

            {/* Front phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.6 }}
              className="relative z-10 h-96 w-52 overflow-hidden rounded-[28px] shadow-[0_24px_64px_rgba(212,160,23,0.20)] will-change-transform lg:h-[420px] lg:w-56"
            >
              <Image
                src="/images/app-home-hand.jpeg"
                alt="GrowNest app home screen in hand"
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
