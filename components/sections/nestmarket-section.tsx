"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { ShoppingBag, Zap, Tag, ArrowRight, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, fadeUp, slideInRight, scaleUp, scrollViewport } from "@/lib/motion"

const categories = [
  { icon: Utensils, label: "Fresh Produce",   count: "800+ items" },
  { icon: Utensils, label: "Grains & Staples", count: "400+ items" },
  { icon: Utensils, label: "Beverages",         count: "250+ items" },
  { icon: Utensils, label: "Packaged Foods",   count: "600+ items" },
]

const perks = [
  { icon: Zap,         label: "Instant checkout",    sub: "Pay directly from NestPurse" },
  { icon: Tag,         label: "Exclusive deals",     sub: "Save-to-unlock discounts" },
  { icon: ShoppingBag, label: "Track every order",   sub: "Real-time delivery updates" },
]

export function NestMarketSection() {
  return (
    <section id="nestmarket" className="bg-section-lifted py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="NestMarket"
          title="Spend smarter. Shop within your nest."
          description="Use your NestPurse balance to shop fresh groceries and everyday food essentials — delivered straight to your door."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* ── Left: categories + perks ───────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="flex flex-col gap-8"
          >
            {/* Category grid */}
            <motion.div
              variants={staggerContainer(0.08)}
              className="grid grid-cols-2 gap-3"
            >
              {categories.map(({ icon: Icon, label, count }) => (
                <motion.div
                  key={label}
                  variants={scaleUp}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(212,160,23,0.12)" }}
                  className="flex flex-col gap-3 rounded-2xl border border-[#D4A017]/12 bg-card p-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] cursor-pointer transition-shadow duration-300 will-change-transform"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017]/10">
                    <Icon size={18} className="text-[#D4A017]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-snug">{label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{count}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Perks list */}
            <motion.ul variants={staggerContainer(0.08)} className="flex flex-col gap-4">
              {perks.map(({ icon: Icon, label, sub }) => (
                <motion.li key={label} variants={fadeUp} className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1A1408]">
                    <Icon size={15} className="text-[#D4A017]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Button variant="gradient" size="default" className="gap-2">
                Explore NestMarket
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right: single lifestyle image + floating badges ─── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background blur glow */}
            <div className="absolute inset-0 -z-10 scale-90 rounded-3xl bg-[#D4A017]/6 blur-2xl" />

            {/* Main image */}
            <div className="relative z-10 h-125 w-82 overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(212,160,23,0.22)] lg:h-135 lg:w-80">
              <Image
                src="/images/market-app-phone.jpeg"
                alt="NestMarket app screen showing food products"
                fill
                className="object-contain object-fill"
              />
            </div>

            {/* Floating checkout badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={scrollViewport}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -left-4 top-16 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#D4A017]/15 lg:-left-8"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A017]/10">
                <ShoppingBag size={16} className="text-[#D4A017]" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground leading-none">Instant checkout</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">From your NestPurse</p>
              </div>
            </motion.div> */}

            {/* Floating discount badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ delay: 0.55, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-20 right-4 flex items-center gap-2 rounded-2xl bg-[#D4A017] px-4 py-3 shadow-[0_8px_24px_rgba(212,160,23,0.4)] lg:right-0 z-20"
            >
              <Tag size={15} className="text-white" />
              <div>
                <p className="text-xs font-bold text-white leading-none">Save-to-unlock deals</p>
                <p className="text-[10px] text-white/70 mt-0.5">Hit your goal, get discounts</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
