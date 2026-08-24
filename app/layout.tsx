import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Buy Foodstuffs & Pay Small Small | Nestbaskets by GrowNest",
  description:
    "Shop quality groceries, rice & staples online and pay small small. Flexible food installment plans, Beat grocery inflation with GrowNest.Africa, Doorstep delivery. Zero stress.",
  keywords: [
    "buy foodstuffs online",
    "pay small small groceries",
    "food basket subscription",
    "food baskets Nigeria",
    "grocery installment plan",
    "grocery subscription Africa",
    "NestBaskets",
    "savings plan Africa",
    "wealth growth",
    "savings",
    "investment",
    "financial prosperity",
    "GrowNest",
  ],
  authors: [{ name: "GrowNest Team" }],
  metadataBase: new URL("https://app.grownest.africa"),
  icons: {
    icon: "/d_icon.png",
    shortcut: "/d_icon.png",
    apple: "/d_icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://app.grownest.africa",
    title: "Buy Foodstuffs & Pay Small Small | Nestbaskets by GrowNest",
    description:
      "Shop quality groceries, rice & staples online and pay small small. Flexible food installment plans, Beat grocery inflation with GrowNest.Africa, Doorstep delivery. Zero stress.",
    siteName: "GrowNest",
    images: [
      {
        url: "/open-graph.jpeg",
        width: 1280,
        height: 981,
        alt: "Buy Foodstuffs & Pay Small Small | Nestbaskets by GrowNest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Foodstuffs & Pay Small Small | Nestbaskets by GrowNest",
    description:
      "Shop quality groceries, rice & staples online and pay small small. Flexible food installment plans, Beat grocery inflation with GrowNest.Africa, Doorstep delivery. Zero stress.",
    images: ["/open-graph.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Structured data (JSON-LD) — gives Google explicit, machine-readable facts
// about who GrowNest is, separate from what's written for human readers.
// Organization covers brand identity; WebSite + SearchAction is what can
// unlock a sitelinks search box directly in Google's results.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GrowNest",
  url: "https://app.grownest.africa",
  logo: "https://app.grownest.africa/d_icon.png",
  description:
    "GrowNest lets you buy foodstuffs and pay small small — flexible food installment plans (NestBaskets) with doorstep delivery, plus savings plans for Africans.",
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GrowNest",
  url: "https://app.grownest.africa",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        spaceGroteskHeading.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  )
}
