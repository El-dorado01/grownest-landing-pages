import { GlassNavbar } from "@/components/glass-navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { LogoLoopSection } from "@/components/sections/logo-loop-section"
import { ProductsSection } from "@/components/sections/products-section"
import { AppPreviewSection } from "@/components/sections/app-preview-section"
import { NestBasketsSection } from "@/components/sections/nestbaskets-section"
import { NestMarketSection } from "@/components/sections/nestmarket-section"
import { MasonrySection } from "@/components/sections/masonry-section"
import { WhyGrowNestSection } from "@/components/sections/why-grownest-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TrustSection } from "@/components/sections/trust-section"
import { DownloadCtaSection } from "@/components/sections/download-cta-section"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GlassNavbar />
      <HeroSection />
      <LogoLoopSection />
      <ProductsSection />
      <AppPreviewSection />
      <NestBasketsSection />
      <NestMarketSection />
      <MasonrySection />
      {/* <WhyGrowNestSection /> */}
      <StatsSection />
      <TrustSection />
      <DownloadCtaSection />
      <Footer />
    </main>
  )
}
