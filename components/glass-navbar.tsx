"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={cn(
          "w-full max-w-5xl rounded-[9999px] px-5 py-3 transition-all duration-300",
          scrolled
            ? "glass shadow-[0_4px_24px_rgba(0,0,0,0.10)]"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="GrowNest"
              width={36}
              height={36}
              className="h-9 w-auto"
            />
            <span className="font-semibold text-[15px] text-foreground hidden sm:block">
              GrowNest
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              Sign in
            </a>
            <a
              href="#download"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#D4A017] px-5 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#B49233] active:scale-95 shadow-[0_4px_0_rgba(212,160,23,0.35)]"
            >
              Get started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-foreground"
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
            className="absolute top-[72px] left-4 right-4 rounded-2xl glass shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/40 transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-white/30 flex flex-col gap-2">
                <a
                  href="#download"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/40 transition-colors duration-150"
                >
                  Sign in
                </a>
                <a
                  href="#download"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-full bg-[#D4A017] py-2.5 text-sm font-semibold text-white hover:bg-[#B49233] transition-colors duration-150"
                >
                  Get started
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
