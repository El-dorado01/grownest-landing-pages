"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { scaleUp, scrollViewport } from "@/lib/motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  accentColor?: string
  className?: string
  delay?: number
  image?: string
  imageAlt?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  accentColor = "#D4A017",
  className,
  delay = 0,
  image,
  imageAlt,
}: FeatureCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={scaleUp}
      transition={{ delay }}
      whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(212,160,23,0.15)" }}
      className={cn(
        "group relative flex flex-col rounded-2xl bg-white border border-[rgba(212,160,23,0.10)] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300 overflow-hidden cursor-pointer will-change-transform",
        className
      )}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ background: `radial-gradient(circle at 20% 20%, ${accentColor}12 0%, transparent 60%)` }}
      />

      {/* Icon */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${accentColor}18` }}
      >
        <Icon size={22} style={{ color: accentColor }} />
      </div>

      {/* Text */}
      <h3 className="mb-2 text-base font-bold text-[#1A1A1A] leading-snug">{title}</h3>
      <p className="text-sm text-[#757575] leading-relaxed flex-1">{description}</p>

      {/* App screenshot */}
      {image && (
        <div className="relative mt-5 h-44 w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className="object-cover object-top"
          />
        </div>
      )}
    </motion.div>
  )
}
