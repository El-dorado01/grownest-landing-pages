"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Savings", href: "#savings" },
  { label: "Community", href: "#community" },
]

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={cn(
          "w-full max-w-5xl rounded-pill px-5 py-3 transition-all duration-300",
          scrolled
            ? "glass shadow-[0_4px_24px_rgba(0,0,0,0.10)]"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="GrowNest"
              width={144}
              height={36}
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="https://dashboard.grownest.africa/login"
              className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="https://dashboard.grownest.africa/signup"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#D4A017] px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_0_rgba(212,160,23,0.35)] transition-all duration-150 hover:bg-[#B49233] active:scale-95"
            >
              Get started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A017] text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-22.5 right-4 left-4 rounded-2xl border border-white/40 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
            style={{
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
            }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 dark:text-black transition-colors duration-150 hover:bg-white/40 hover:text-foreground dark:hover:bg-[#B49233]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-white/30 pt-2">
                <Link
                  href="https://dashboard.grownest.africa/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 dark:text-black transition-colors duration-150 hover:bg-white/40 hover:text-foreground dark:hover:bg-[#B49233]"
                >
                  Sign in
                </Link>
                <Link
                  href="https://dashboard.grownest.africa/signup"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-full bg-[#D4A017] py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B49233]"
                >
                  Get started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
