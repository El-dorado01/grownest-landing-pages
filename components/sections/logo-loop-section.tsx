"use client"

import LogoLoop, { type LogoItem } from "@/components/LogoLoop"

const partners: LogoItem[] = [
  // {
  //   node: (
  //     <span className="flex items-center gap-2 text-muted-foreground/60 transition-colors hover:text-muted-foreground">
  //       <span className="text-[13px] font-bold tracking-widest uppercase">CBN</span>
  //       <span className="text-[11px] font-medium opacity-70">Regulated</span>
  //     </span>
  //   ),
  // },
  {
    node: (
      <span className="flex items-center gap-1.5 text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <span className="text-[13px] font-bold tracking-widest uppercase">Interswitch</span>
      </span>
    ),
  },
  {
    node: (
      <span className="flex items-center gap-1.5 text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <span className="text-[13px] font-bold tracking-widest uppercase">Paystack</span>
      </span>
    ),
  },
  {
    node: (
      <span className="flex items-center gap-1.5 text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <span className="text-[13px] font-bold tracking-widest uppercase">Flutterwave</span>
      </span>
    ),
  },
  {
    node: (
      <span className="flex items-center gap-1.5 text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <span className="text-[13px] font-bold tracking-widest uppercase">NDIC</span>
        <span className="text-[11px] font-medium opacity-70">Insured</span>
      </span>
    ),
  },
  // {
  //   node: (
  //     <span className="flex items-center gap-1.5 text-muted-foreground/60 transition-colors hover:text-muted-foreground">
  //       <span className="text-[13px] font-bold tracking-widest uppercase">GTBank</span>
  //     </span>
  //   ),
  // },
  // {
  //   node: (
  //     <span className="flex items-center gap-1.5 text-muted-foreground/60 transition-colors hover:text-muted-foreground">
  //       <span className="text-[13px] font-bold tracking-widest uppercase">Zenith</span>
  //     </span>
  //   ),
  // },
  {
    node: (
      <span className="flex items-center gap-1.5 text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <span className="text-[13px] font-bold tracking-widest uppercase">Wema Bank</span>
      </span>
    ),
  },
]

export function LogoLoopSection() {
  return (
    <section className="bg-section-light py-10 border-y border-[#D4A017]/10">
      <div className="mx-auto max-w-6xl px-6 mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground/50">
          Trusted & integrated with
        </p>
      </div>

      <LogoLoop
        logos={partners}
        speed={60}
        pauseOnHover
        fadeOut
        logoHeight={20}
        gap={64}
        scaleOnHover
        ariaLabel="GrowNest trusted partners and integrations"
      />
    </section>
  )
}
