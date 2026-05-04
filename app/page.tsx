import { GlassNavbar } from "@/components/glass-navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProductsSection } from "@/components/sections/products-section"
import { AppPreviewSection } from "@/components/sections/app-preview-section"
import { NestBasketsSection } from "@/components/sections/nestbaskets-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TrustSection } from "@/components/sections/trust-section"
import { DownloadCtaSection } from "@/components/sections/download-cta-section"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFF8E1]">
      <GlassNavbar />
      <HeroSection />
      <ProductsSection />
      <AppPreviewSection />
      <NestBasketsSection />
      <StatsSection />
      <TrustSection />
      <DownloadCtaSection />
      <Footer />
    </main>
  )
}
