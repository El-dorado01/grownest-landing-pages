"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { CheckCircle, ShoppingBasket, Truck, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, fadeUp, slideInLeft, slideInRight, scaleUp, scrollViewport } from "@/lib/motion"

const benefits = [
  { icon: ShoppingBasket, label: "Plan your food the way you want" },
  { icon: CheckCircle,    label: "Quality essentials, trusted brands" },
  { icon: Truck,          label: "Delivered straight to your door" },
  { icon: Shield,         label: "Flexible payments, no hidden fees" },
]

const boxes = [
  { src: "/images/basket-box-cream.jpeg", alt: "GrowNest essentials box", delay: 0 },
  { src: "/images/basket-box-alt.jpeg",   alt: "GrowNest food basket",    delay: 0.12 },
]

export function NestBasketsSection() {
  return (
    <section id="nestbaskets" className="relative overflow-hidden bg-[#1A1408] py-20 md:py-28">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 opacity-10"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* ── Left: copy ─────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#D4A017]">
                NestBaskets
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]"
            >
              Your food.{" "}
              <span style={{
                background: "linear-gradient(135deg, #D4A017, #D4A853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Your way.
              </span>{" "}
              Your peace of mind.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-white/60 max-w-md">
              Stop overspending on random groceries. GrowNest NestBaskets delivers
              pre-planned, quality food essentials to your door every month — so your
              kitchen is always stocked without the stress.
            </motion.p>

            <motion.ul variants={staggerContainer(0.08)} className="flex flex-col gap-3">
              {benefits.map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4A017]/15">
                    <Icon size={15} className="text-[#D4A017]" />
                  </div>
                  <span className="text-sm text-white/70">{label}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Button variant="gradient" size="default" className="mt-2">
                Explore NestBaskets
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right: product boxes ────────────────────────────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="relative flex items-end justify-center gap-4 lg:justify-end"
          >
            {boxes.map((box, i) => (
              <motion.div
                key={box.src}
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={scrollViewport}
                transition={{ delay: box.delay }}
                className={`relative overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.35)] will-change-transform ${
                  i === 0
                    ? "h-64 w-52 lg:h-80 lg:w-64"
                    : "h-56 w-44 lg:h-72 lg:w-56 mb-6"
                }`}
              >
                <Image
                  src={box.src}
                  alt={box.alt}
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
            ))}

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-4 left-4 lg:left-0 flex items-center gap-2 rounded-2xl bg-[#D4A017] px-4 py-3 shadow-[0_8px_24px_rgba(212,160,23,0.4)]"
            >
              <Truck size={16} className="text-white" />
              <div>
                <p className="text-xs font-bold text-white leading-none">Free delivery</p>
                <p className="text-[10px] text-white/70 mt-0.5">Within Nigeria</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
