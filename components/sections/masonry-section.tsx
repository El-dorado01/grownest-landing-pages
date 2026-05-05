"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import Masonry from "@/components/Masonry"
import { SectionHeading } from "@/components/section-heading"
import { fadeUp, scrollViewport } from "@/lib/motion"

const foodItems = [
  { id: "f1",  img: "/images/market-groceries.jpeg",       url: "#", height: 560 },
  { id: "f2",  img: "/images/basket-box-gold.jpeg",        url: "#", height: 480 },
  { id: "f3",  img: "/images/market-beverages.jpeg",       url: "#", height: 520 },
  { id: "f4",  img: "/images/nestbaskets-essentials.jpeg", url: "#", height: 500 },
  { id: "f5",  img: "/images/market-box-gold.jpeg",        url: "#", height: 460 },
  { id: "f6",  img: "/images/basket-box-cream.jpeg",       url: "#", height: 540 },
  { id: "f7",  img: "/images/nestbaskets-pain1.jpeg",      url: "#", height: 480 },
  { id: "f8",  img: "/images/basket-box-alt.jpeg",         url: "#", height: 500 },
]

function useMasonryHeight() {
  const [height, setHeight] = useState(640)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      // mirrors Masonry's useMedia breakpoints: 1500→5col, 1000→4col, 600→3col, 400→2col, else 1col
      if (w >= 1000)      setHeight(660)
      else if (w >= 600)  setHeight(900)
      else if (w >= 400)  setHeight(1400)
      else                setHeight(2000)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return height
}

export function MasonrySection() {
  const height = useMasonryHeight()

  return (
    <section id="gallery" className="bg-section-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="NestMarket Gallery"
          title="Fresh, curated, delivered to you"
          description="From farm-fresh produce to pantry staples — shop smarter from the GrowNest marketplace."
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="w-full"
          style={{ height }}
        >
          <Masonry
            items={foodItems}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.97}
            blurToFocus
            stagger={0.04}
            duration={0.55}
          />
        </motion.div>

      </div>
    </section>
  )
}
