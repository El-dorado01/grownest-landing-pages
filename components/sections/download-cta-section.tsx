"use client"

import { motion } from "motion/react"
import { fadeUp, popIn, staggerContainer, scrollViewport } from "@/lib/motion"
import Image from "next/image"

import googleImage from "../../assets/images/google_play_store_badge.png"
import { Apple, Play } from "lucide-react"

export function DownloadCtaSection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[#1A1A1A] py-24 md:py-32"
    >
      {/* Decorative gold blobs */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={scrollViewport}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
      />
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={scrollViewport}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #D4A853 0%, transparent 70%)" }}
      />
      {/* <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={scrollViewport}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-96 opacity-10"
        style={{ background: "radial-gradient(ellipse, #D4A017 0%, transparent 70%)" }}
      /> */}

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#D4A017]">
              Available now
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            Start growing your{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #D4A017, #D4A853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              nest today.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-md text-[15px] leading-relaxed text-white/50"
          >
            Download GrowNest for free. Available on iOS and Android. Join
            thousands of Africans building wealth — one nest at a time.
          </motion.p>

          {/* Download buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* <motion.a
              href="#"
              variants={popIn}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 shadow-[0_4px_0_rgba(0,0,0,0.15)] transition-colors hover:bg-white/90"
            >
              <Apple size={20} className="text-[#1A1A1A]" />
              <div className="text-left">
                <p className="text-[9px] leading-none text-[#757575]">Download on the</p>
                <p className="text-[14px] font-bold leading-tight text-[#1A1A1A]">App Store</p>
              </div>
            </motion.a> */}

            <motion.a
              href="https://play.google.com/store/apps/details?id=grownest.com.grownest"
              target="_blank"
              variants={popIn}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center transition-colors hover:bg-white/90"
            >
              <Image src={googleImage} alt="Get it on Google Play" width={220} height={40} className="p-0 rounded-lg" />
              {/* <Play size={18} className="text-[#1A1A1A]" />
              <div className="text-left">
                <p className="text-[9px] leading-none text-[#757575]">Get it on</p>
                <p className="text-[14px] font-bold leading-tight text-[#1A1A1A]">Google Play</p>
              </div> */}
            </motion.a>
          </motion.div>

          {/* Trust line */}
          <motion.p variants={fadeUp} className="text-xs text-white/30">
            Free to download · No hidden fees
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
