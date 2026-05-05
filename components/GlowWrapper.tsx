"use client"

import { useTheme } from "next-themes"
import BorderGlow from "@/components/BorderGlow"

interface GlowWrapperProps {
  children: React.ReactNode
  className?: string
}

export function GlowWrapper({ children, className }: GlowWrapperProps) {
  const { resolvedTheme } = useTheme()
  const bg = resolvedTheme === "dark" ? "#231D0A" : "#FFFFFF"

  return (
    <BorderGlow
      backgroundColor={bg}
      colors={["#D4A017", "#B49233", "#D4A853"]}
      glowColor="43 80 47"
      borderRadius={16}
      glowRadius={32}
      glowIntensity={0.85}
      fillOpacity={0.35}
      className={className}
    >
      {children}
    </BorderGlow>
  )
}
