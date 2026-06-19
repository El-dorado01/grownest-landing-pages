"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, animate } from "motion/react"
import Image from "next/image"
import { Star } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, fadeUp, scrollViewport } from "@/lib/motion"

// Avatar images
import avatar1 from "../../assets/images/avatar1.png"
import avatar2 from "../../assets/images/avater2.png"
import avatar3 from "../../assets/images/avater3.png"
import avatar4 from "../../assets/images/avater4.png"

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
  { value: 5000, suffix: "+", label: "Active savers" },
  { value: 2, suffix: "M+", label: "Naira saved", prefix: "₦" },
  { value: 98, suffix: "%", label: "Customer satisfaction" },
  { value: 4, suffix: "+", label: "Savings products" },
]

const testimonials = [
  {
    quote: "GrowNest helped me save for my business capital in just 6 months. The NestEgg lock feature kept me disciplined.",
    name: "Adaeze O.",
    role: "Entrepreneur, Lagos",
    image: avatar1,
    rating: 5,
  },
  {
    quote: "Our GroupNest circle raised ₦500k for a shared investment. The leaderboard made it fun and competitive!",
    name: "Emeka N.",
    role: "Software Engineer, Abuja",
    image: "/images/social-man-quote.jpeg",
    rating: 5,
  },
  {
    quote: "I finally have an emergency fund. The auto-save feature makes saving effortless — money leaves before I spend it.",
    name: "Chioma B.",
    role: "Teacher, Port Harcourt",
    image: avatar2,
    rating: 5,
  },
  {
    quote: "NestBaskets saved me from monthly grocery stress. I set it once and my essentials just show up at my door.",
    name: "Tunde A.",
    role: "Civil Servant, Ibadan",
    image: avatar3,
    rating: 5,
  },
]

const CARD_WIDTH = 320
const GAP = 16

function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1))
    setActive(clamped)
    animate(x, -(clamped * (CARD_WIDTH + GAP)), { type: "spring", stiffness: 300, damping: 30 })
  }

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const { offset, velocity } = info
    if (offset.x < -50 || velocity.x < -400) goTo(active + 1)
    else if (offset.x > 50 || velocity.x > 400) goTo(active - 1)
    else goTo(active)
  }

  return (
    <div className="relative">
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: -((testimonials.length - 1) * (CARD_WIDTH + GAP)),
            right: 0,
          }}
          style={{ x, gap: `${GAP}px` }}
          onDragEnd={handleDragEnd}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="shrink-0 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              style={{ width: CARD_WIDTH }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="fill-[#D4A017] text-[#D4A017]" />
                ))}
              </div>
              {/* Quote */}
              <p className="flex-1 text-[14px] leading-relaxed text-white/75">&ldquo;{t.quote}&rdquo;</p>
              {/* Person */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#D4A017]/30">
                  <Image src={t.image} alt={t.name} fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-[#D4A017]" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

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
          title="Join over 5,000 people saving with us"
          description="Real savers. Real results. Here's what the GrowNest community is saying."
          align="center"
          className="mb-10 [&_h2]:text-white [&_p]:text-white/50"
        />

        {/* Testimonial draggable carousel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <TestimonialCarousel />
        </motion.div>

      </div>
    </section>
  )
}
