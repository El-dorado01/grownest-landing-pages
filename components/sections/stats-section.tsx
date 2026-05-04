"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, fadeUp, slideInLeft, slideInRight, scrollViewport } from "@/lib/motion"

// ── Animated counter ─────────────────────────────────────────────
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 50000, suffix: "+", label: "Active savers" },
  { value: 2, suffix: "B+", label: "Naira saved", prefix: "₦" },
  { value: 98, suffix: "%", label: "Customer satisfaction" },
  { value: 4, suffix: "+", label: "Savings products" },
]

const testimonials = [
  {
    quote:
      "GrowNest helped me save for my business capital in just 6 months. The NestEgg lock feature kept me disciplined.",
    name: "Adaeze O.",
    role: "Entrepreneur, Lagos",
    image: "/images/social-woman-savings.jpeg",
    side: "left",
  },
  {
    quote:
      "Our GroupNest circle raised ₦500k for a shared investment. The leaderboard made it fun and competitive!",
    name: "Emeka N.",
    role: "Software Engineer, Abuja",
    image: "/images/social-man-quote.jpeg",
    side: "right",
  },
]

export function StatsSection() {
  return (
    <section id="community" className="bg-[#1A1408] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col gap-1 text-center"
            >
              <p className="text-4xl font-bold text-[#D4A017] md:text-5xl">
                {stat.prefix}
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Heading */}
        <SectionHeading
          eyebrow="Community"
          title="Join over 50,000 people saving with us"
          description="Real savers. Real results. Here's what the GrowNest community is saying."
          align="center"
          className="mb-12 [&_h2]:text-white [&_p]:text-white/50"
        />

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              variants={t.side === "left" ? slideInLeft : slideInRight}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              {/* Gold quote mark */}
              <span className="mb-3 block text-4xl font-serif leading-none text-[#D4A017]">
                &ldquo;
              </span>
              <p className="mb-5 text-[15px] leading-relaxed text-white/80">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#D4A017]/30">
                  <Image src={t.image} alt={t.name} fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
