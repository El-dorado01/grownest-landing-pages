"use client"

import { motion } from "motion/react"
import { Wallet, Egg, Users, ShoppingBasket, ShoppingBag } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import { GlowWrapper } from "@/components/GlowWrapper"
import { SectionHeading } from "@/components/section-heading"
import { staggerContainer, fadeUp, scrollViewport } from "@/lib/motion"

const products = [
  {
    icon: Wallet,
    title: "NestPurse",
    description: "Your secure digital wallet. Deposit, withdraw, and manage funds with real-time balance updates and full transaction history.",
    accentColor: "#D4A017",
    image: "/images/app-nestpurse.jpeg",
    imageAlt: "NestPurse app screen on phone",
  },
  {
    icon: Egg,
    title: "NestEggs",
    description: "Lock funds toward a personal goal. Set a target, choose a duration, and let auto-save do the work — withdraw when you hit your goal.",
    accentColor: "#B49233",
    image: "/images/app-nesteggs.jpeg",
    imageAlt: "NestEggs goal creation screen",
  },
  {
    icon: Users,
    title: "GroupNest",
    description: "Save together with friends and family in circles. Track contributions, set group goals, and celebrate milestones on the leaderboard.",
    accentColor: "#D4A853",
    image: "/images/social-friends.jpeg",
    imageAlt: "Friends using GrowNest together",
  },
  {
    icon: ShoppingBasket,
    title: "NestBaskets",
    description: "Pre-defined food and essentials plans delivered to your door. Save smarter, shop better, never run out of what matters.",
    accentColor: "#A6862D",
    image: "/images/app-nestbaskets.jpeg",
    imageAlt: "NestBaskets app screen",
  },
  {
    icon: ShoppingBag,
    title: "NestMarket",
    description: "Spend your savings on thousands of curated products. Food, fashion, electronics and more — pay directly from your NestPurse.",
    accentColor: "#D4A017",
    image: "/images/market-delivery.jpeg",
    imageAlt: "NestMarket app screen showing products",
  },
]

export function ProductsSection() {
  return (
    <section id="features" className="bg-section-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="Our Products"
          title="Many ways to grow your nest"
          description="Four powerful savings vehicles — personal, group, locked, and basket — built for every financial goal."
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        >
          {products.map((product, i) => (
            <motion.div key={product.title} variants={fadeUp}>
              <FeatureCard
                icon={product.icon}
                title={product.title}
                description={product.description}
                accentColor={product.accentColor}
                image={product.image}
                imageAlt={product.imageAlt}
                delay={i * 0.05}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
