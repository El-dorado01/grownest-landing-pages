import Image from "next/image"
import { ExternalLink, AtSign, Globe, Share2 } from "lucide-react"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"

// lucide-react v1 removed brand icons — using generic alternatives

const footerLinks = {
  Product: [
    // Not built yet — route to the coming-soon page, personalized per product.
    { label: "NestPurse", href: "/coming-soon?product=NestPurse" },
    { label: "NestEggs", href: "/coming-soon?product=NestEggs" },
    { label: "GroupNest", href: "/coming-soon?product=GroupNest" },
    { label: "NestBaskets", href: "/coming-soon?product=NestBaskets" },
    { label: "NestMarket", href: "/coming-soon?product=NestMarket" },
    { label: "GrowNest.Africa Affiliate", href: "https://affiliate.grownest.africa" },
  ],
  Company: [
    { label: "About us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Status", href: "#" },
    { label: "Community", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "https://dashboard.grownest.africa/privacy" },
    { label: "Terms of Service", href: "https://dashboard.grownest.africa/terms" },
    { label: "Cookie Policy", href: "https://dashboard.grownest.africa/cookies" },
    { label: "Refund Policy", href: "https://dashboard.grownest.africa/refund-policy" },
  ],
  contact: [
    {label: "Km 13 DSC Express-Way, Opete Junction, Otokutu, Deleta State", href: "#" },
    {label: "support@grownest.africa", href: "mailto:support@grownest.africa" },
    {label: "+234 705 329 0027", href: "tel:+2347053290027" }
  ]
}

const socials = [
  { icon: FaTwitter, label: "Twitter / X", href: "https://x.com/Grownestafrica" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/grownest.africa?igsh=NnlkZDFyZm0xZHBh" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/message/3E3BWQIR5Y3OL1" },
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/share/1HJ4BJTj8R/" },
]

export function Footer() {
  return (
    <footer className="bg-[#1A1408] border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">

        {/* Top row: brand + links */}
        <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="GrowNest"
                width={128}
                height={32}
                className="h-8 w-auto opacity-90"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/40 max-w-50">
              Africa&apos;s savings and financial growth platform.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-[#D4A017]/40 hover:text-[#D4A017]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => {
                  const className =
                    "text-sm text-white/50 transition-colors hover:text-white"
                  // mailto:, tel:, and external (http) links use a plain <a>;
                  // internal app routes use Next's <Link> for client-side nav.
                  const isExternal = /^(mailto:|tel:|https?:)/.test(link.href)
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a href={link.href} className={className}>
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={className}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} GrowNest Africa. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Secured · Licensed · Built for Africa 🌍
          </p>
        </div>

      </div>
    </footer>
  )
}
