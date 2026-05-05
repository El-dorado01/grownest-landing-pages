"use client"

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack"

const statements = [
  {
    bg: "#1A1408",
    accent: "#D4A017",
    eyebrow: "Discipline",
    headline: "Saving is a habit,\nnot a hustle.",
    sub: "Auto-save does the work. You just set it once.",
  },
  {
    bg: "#D4A017",
    accent: "#1A1408",
    eyebrow: "Community",
    headline: "Better together\nwith GroupNest.",
    sub: "Save in circles with friends and family — shared goals, shared wins.",
  },
  {
    bg: "#231D0A",
    accent: "#D4A853",
    eyebrow: "Security",
    headline: "Your money is safe\nwith GrowNest.",
    sub: "Bank-level encryption. CBN-aligned. Your nest is always protected.",
  },
  {
    bg: "#FFF8E1",
    accent: "#1A1408",
    eyebrow: "Freedom",
    headline: "Grow your nest.\nGrow your life.",
    sub: "From savings to shopping — everything you need is in one place.",
  },
]

export function WhyGrowNestSection() {
  return (
    <section id="why" className="h-screen bg-section-light overflow-hidden">
      <ScrollStack
        itemDistance={120}
        itemScale={0.03}
        baseScale={0.88}
        stackPosition="15%"
        rotationAmount={0}
        blurAmount={0}
      >
        {statements.map((s, i) => (
          <ScrollStackItem
            key={i}
            itemClassName="flex items-center justify-center"
          >
            <div
              className="h-full w-full rounded-[36px] flex flex-col justify-center px-10 py-8 md:px-16"
              style={{ backgroundColor: s.bg }}
            >
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: s.accent }}
              >
                {s.eyebrow}
              </p>
              <h2
                className="whitespace-pre-line text-[32px] font-black leading-tight md:text-[48px]"
                style={{ color: s.accent }}
              >
                {s.headline}
              </h2>
              <p
                className="mt-4 max-w-md text-base leading-relaxed opacity-70"
                style={{ color: s.accent }}
              >
                {s.sub}
              </p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  )
}
