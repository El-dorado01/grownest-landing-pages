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
  title: "GrowNest | Save Smart. Shop Easy. Smile Always.",
  description:
    "Save Smart. Shop Easy. Smile Always. Join GrowNest, Africa's premier platform for financial prosperity and sustainable wealth growth.",
  keywords: [
    "wealth growth",
    "savings",
    "investment",
    "Africa",
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
    title: "GrowNest | Save Smart. Shop Easy. Smile Always.",
    description:
      "Start your journey to financial freedom today. Save Smart. Shop Easy. Smile Always with GrowNest.",
    siteName: "GrowNest",
    images: [
      {
        url: "/open-graph.jpeg",
        width: 1280,
        height: 981,
        alt: "GrowNest | Save Smart. Shop Easy. Smile Always.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowNest | Save Smart. Shop Easy. Smile Always.",
    description:
      "Africa's premier platform for financial prosperity. Save Smart. Shop Easy. Smile Always.",
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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  )
}
