"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingCard } from "@/components/floating-card"
import RotatingText from "@/components/RotatingText"
import LightRays from "@/components/LightRays"
import {
  fadeUp,
  slideInRight,
  staggerContainer,
  scrollViewport,
} from "@/lib/motion"
import Link from "next/link"
import googleImage from "../../assets/images/google_play_store_badge.png"
import appleImage from "../../assets/images/app-store-badge.png"
import avatar1 from "../../assets/images/avatar1.png"
import avatar2 from "../../assets/images/avater2.png"
import avatar3 from "../../assets/images/avater3.png"
import avatar4 from "../../assets/images/avater4.png"

const avatars = [avatar1, avatar2, avatar3, avatar4]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-section-light pt-28 pb-16 md:pt-32 md:pb-24">
      {/* LightRays background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#D4A017"
        lightSpread={1.4}
        rayLength={1.6}
        pulsating
        noiseAmount={0.04}
        mouseInfluence={0.08}
        className="!absolute inset-0 opacity-20"
      />

      {/* Subtle radial glow behind hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 opacity-40"
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
            className="flex flex-col gap-6 sm:items-center lg:items-start"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
              <span className="text-xs font-bold tracking-[0.12em] text-[#D4A017] uppercase">
                NestBaskets by GrowNest
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[42px] leading-[1.15] font-bold tracking-tight text-foreground sm:text-5xl lg:text-[56px]"
            >
              Buy foodstuffs &amp; pay{" "}
              <span className="inline-flex overflow-hidden align-bottom">
                <RotatingText
                  texts={["small small.", "bit by bit.", "stress-free."]}
                  mainClassName="text-[#D4A017] inline-flex"
                  elementLevelClassName="gradient-gold-text"
                  rotationInterval={2400}
                  staggerDuration={0.03}
                  staggerFrom="first"
                  transition={{ type: "spring", damping: 22, stiffness: 220 }}
                />
              </span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp}
              className="max-w-md text-[16px] leading-relaxed text-muted-foreground"
            >
              Shop quality groceries, rice &amp; staples online with flexible
              food installment plans. Beat grocery inflation with doorstep
              delivery, zero stress.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                variant="gradient"
                size="default"
                className="gap-2"
                asChild
              >
                <Link href="https://dashboard.grownest.africa/signup">
                  Get started free
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="default">
                See how it works
              </Button>
            </motion.div>

            {/* App store badge */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=grownest.com.grownest"
                  target="_blank"
                  className="inline-flex transition-opacity hover:opacity-80"
                >
                  <Image
                    src={googleImage}
                    alt="Get it on Google Play"
                    width={180}
                    height={52}
                    className="p-0"
                  />
                  {/* <Play size={14} />
                  <div className="text-left">
                    <p className="text-[9px] leading-none opacity-70">Get it on</p>
                    <p className="text-[13px] font-semibold leading-tight">Google Play</p>
                  </div> */}
                </Link>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center"
              >
                <Link
                  href="https://apps.apple.com/us/app/grownest-africa/id6786081175"
                  target="_blank"
                  className="inline-flex transition-opacity hover:opacity-80"
                >
                  <Image
                    src={appleImage}
                    alt="Get it on Apple Store"
                    width={180}
                    className="h-[52px] p-0"
                  />
                  {/* <Play size={14} />
                  <div className="text-left">
                    <p className="text-[9px] leading-none opacity-70">Get it on</p>
                    <p className="text-[13px] font-semibold leading-tight">Apple Store</p>
                  </div> */}
                </Link>
              </motion.div>
            </div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-section-light"
                    style={{ zIndex: avatars.length - i }}
                  >
                    <Image
                      src={avatar}
                      alt={`GrowNest user ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-muted-foreground">
                <span className="font-bold text-foreground">5,000+</span>{" "}
                Africans already saving
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
            <div className="relative h-120 w-96 sm:h-135 sm:w-100 lg:h-145 lg:w-150">
              <div className="h-full w-full overflow-hidden rounded-[32px] shadow-[0_24px_64px_rgba(212,160,23,0.18)]">
                <Image
                  src="/images/hero-lifestyle-re.jpeg"
                  alt="Woman with GrowNest groceries — your food, your way"
                  fill
                  className="h-full rounded-[32px] object-cover object-top"
                  priority
                />
              </div>

              <div className="absolute top-12 -left-2 sm:-left-5">
                <FloatingCard variant="balance" delay={0} />
              </div>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 sm:-right-5">
                <FloatingCard variant="savings" delay={0.5} />
              </div>
              <div className="absolute bottom-12 -left-2 sm:-left-5">
                <FloatingCard variant="goal" delay={1.0} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-section-light to-transparent"
      />
    </section>
  )
}
