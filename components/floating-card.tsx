"use client"

import { motion } from "motion/react"
import { TrendingUp, Wallet, Target, Users } from "lucide-react"
import { floatAnimation, floatAnimationDelayed } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  variant: "balance" | "goal" | "savings" | "group"
  className?: string
  delay?: number
}

const cardData = {
  balance: {
    icon: Wallet,
    label: "NestPurse",
    value: "₦ 248,500.00",
    sub: "+₦12,000 this week",
    positive: true,
    bg: "from-[#D4A017] to-[#D4A853]",
    iconBg: "bg-white/20",
  },
  goal: {
    icon: Target,
    label: "House Goal",
    value: "68% saved",
    sub: "₦680,000 of ₦1M",
    positive: true,
    bg: "from-[#1A1A1A] to-[#2A2A2A]",
    iconBg: "bg-[#D4A017]/20",
  },
  savings: {
    icon: TrendingUp,
    label: "NestEgg · July",
    value: "+₦8,400",
    sub: "Interest earned",
    positive: true,
    bg: "from-[#FFFFFF] to-[#FFFDF5]",
    iconBg: "bg-[#D4A017]/10",
    dark: false,
  },
  group: {
    icon: Users,
    label: "GroupNest",
    value: "12 members",
    sub: "₦50k contributed",
    positive: true,
    bg: "from-[#FFFFFF] to-[#FFFDF5]",
    iconBg: "bg-[#D4A017]/10",
    dark: false,
  },
}

export function FloatingCard({ variant, className, delay = 0 }: FloatingCardProps) {
  const card = cardData[variant]
  const isDark = variant === "balance" || variant === "goal"
  const Icon = card.icon
  const anim = delay > 0 ? floatAnimationDelayed : floatAnimation

  return (
    <motion.div
      animate={anim}
      className={cn(
        "will-change-transform rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] min-w-[160px]",
        isDark
          ? `bg-gradient-to-br ${card.bg} text-white`
          : `bg-gradient-to-br ${card.bg} text-[#1A1A1A] border border-[rgba(212,160,23,0.12)]`,
        className
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className={cn("rounded-lg p-1.5", card.iconBg)}>
          <Icon
            size={14}
            className={isDark ? "text-white" : "text-[#D4A017]"}
          />
        </div>
        <span
          className={cn(
            "text-[11px] font-medium",
            isDark ? "text-white/70" : "text-[#757575]"
          )}
        >
          {card.label}
        </span>
      </div>
      <p
        className={cn(
          "text-base font-bold leading-tight",
          isDark ? "text-white" : "text-[#1A1A1A]"
        )}
      >
        {card.value}
      </p>
      <p
        className={cn(
          "text-[11px] mt-0.5",
          isDark ? "text-white/60" : "text-[#4CAF50]"
        )}
      >
        {card.sub}
      </p>
    </motion.div>
  )
}
