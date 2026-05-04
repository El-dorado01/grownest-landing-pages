"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Shield, Lock, Star, Award } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, fadeUp, slideInLeft, slideInRight, scaleUp, scrollViewport } from "@/lib/motion"

const trustBadges = [
  { icon: Shield, label: "Bank-level security", sub: "256-bit encryption" },
  { icon: Lock,   label: "Data privacy",        sub: "NDPR compliant" },
  { icon: Star,   label: "4.9 App rating",       sub: "10k+ reviews" },
  { icon: Award,  label: "Licensed & regulated", sub: "CBN guidelines" },
]

export function TrustSection() {
  return (
    <section id="trust" className="bg-[#FFF8E1] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="Why trust us"
          title="Built on transparency & trust"
          description="Your money is safe with GrowNest. We're built on the same security standards as leading financial institutions."
          align="center"
          className="mb-16"
        />

        {/* Trust badges row */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {trustBadges.map(({ icon: Icon, label, sub }) => (
            <motion.div
              key={label}
              variants={scaleUp}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#D4A017]/15 bg-white p-6 text-center shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A017]/10">
                <Icon size={22} className="text-[#D4A017]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">{label}</p>
                <p className="mt-0.5 text-xs text-[#757575]">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature quote — full-width card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="relative overflow-hidden rounded-3xl bg-[#1A1408] p-8 md:p-12"
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 opacity-10"
            style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
          />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            {/* Quote side */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              className="flex flex-col gap-5"
            >
              <span className="text-5xl font-serif leading-none text-[#D4A017]">&ldquo;</span>
              <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
                GrowNest is built for clarity and trust. No confusion. No hidden terms.
                Just safe savings — always.
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#D4A017]/40">
                  <Image
                    src="/images/social-man-quote.jpeg"
                    alt="GrowNest satisfied saver"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">Chukwuemeka A.</p>
                  <p className="text-sm text-white/50">Verified GrowNest user, Enugu</p>
                </div>
              </div>
            </motion.div>

            {/* Image side */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              className="relative flex justify-center gap-4 lg:justify-end"
            >
              {/* Main image */}
              <div className="relative h-72 w-56 overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.4)] lg:h-80 lg:w-64">
                <Image
                  src="/images/social-man-cta.jpeg"
                  alt="Happy GrowNest user"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Secondary image — offset */}
              <div className="relative mt-10 h-64 w-48 overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.4)] lg:h-72 lg:w-56">
                <Image
                  src="/images/social-friends.jpeg"
                  alt="Friends saving together with GrowNest"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Floating star rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={scrollViewport}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -bottom-4 left-0 flex items-center gap-2 rounded-2xl bg-[#D4A017] px-4 py-3 shadow-[0_8px_24px_rgba(212,160,23,0.4)]"
              >
                <Star size={15} className="fill-white text-white" />
                <div>
                  <p className="text-xs font-bold text-white leading-none">4.9 / 5 rating</p>
                  <p className="text-[10px] text-white/70 mt-0.5">10,000+ reviews</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
