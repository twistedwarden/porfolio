import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { DecryptedText } from "./ui/DecryptedText"

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
]

function NavContent({ onLinkClick, mobileOpen, onHamburger }: {
  onLinkClick: () => void
  mobileOpen: boolean
  onHamburger: () => void
}) {
  return (
    <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
      <a
        href="#hero"
        onClick={onLinkClick}
        className="display-serif text-base font-normal text-text hover:text-accent transition-colors duration-200"
      >
        C. Mahusay
      </a>

      <div className="flex items-center gap-4">
        <ul className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onLinkClick}
                className="nav-link text-muted hover:text-text transition-colors duration-200"
              >
                <DecryptedText
                  text={link.label}
                  speed={30}
                  maxIterations={8}
                  revealDirection="start"
                  className="nav-link"
                />
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <button
          onClick={(e) => { e.stopPropagation(); onHamburger() }}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="sm:hidden flex flex-col justify-center gap-[5px] w-6 h-6 ml-1"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
            className="block h-px w-full bg-text origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.18 }}
            className="block h-px w-full bg-text"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
            className="block h-px w-full bg-text origin-center"
          />
        </button>
      </div>
    </nav>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [navVisible, setNavVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 80) {
      setScrolled(true)
      setMobileOpen(false)
    } else {
      setScrolled(false)
      setNavVisible(false)
    }
  })

  function closeAll() {
    setNavVisible(false)
    setMobileOpen(false)
  }

  return (
    <>
      {/* ── Full sticky header — visible only when at top ──────── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            key="full-header"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border"
          >
            <NavContent
              onLinkClick={() => setMobileOpen(false)}
              mobileOpen={mobileOpen}
              onHamburger={() => setMobileOpen((v) => !v)}
            />
          </motion.header>
        )}
      </AnimatePresence>

      {/* ── Pre-scroll mobile drawer ──────────────────────────── */}
      <AnimatePresence>
        {!scrolled && mobileOpen && (
          <motion.div
            key="mobile-pre"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-bg border-b border-border sm:hidden"
          >
            <ul className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.22 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="nav-link text-text hover:text-accent transition-colors duration-200 block"
                  >
                    <span className="text-accent mr-3 font-mono text-[10px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Scrolled state ────────────────────────────────────── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="scrolled-header"
            initial={{ y: "-100%" }}
            animate={{ y: navVisible ? 0 : "-100%" }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{
              duration: navVisible ? 0.35 : 0.25,
              ease: navVisible ? [0.16, 1, 0.3, 1] : [0.4, 0, 1, 1],
            }}
            className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border shadow-sm"
          >
            <NavContent
              onLinkClick={closeAll}
              mobileOpen={mobileOpen}
              onHamburger={() => setMobileOpen((v) => !v)}
            />

            {/* Mobile drawer inside revealed header */}
            <div
              className="sm:hidden overflow-hidden border-t border-border"
              style={{ height: mobileOpen ? "auto" : 0, display: mobileOpen ? "block" : "none" }}
            >
              <ul className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeAll}
                      className="nav-link text-text hover:text-accent transition-colors duration-200 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Arrow tab (Absolute attached to bottom edge) ──── */}
            <div className="absolute top-full left-0 right-0 flex justify-center pointer-events-none">
              <button
                onClick={() => setNavVisible((v) => !v)}
                aria-label={navVisible ? "Hide navigation" : "Show navigation"}
                className="pointer-events-auto group flex flex-col items-center"
              >
                <div className="flex items-center gap-2 px-4 py-1.5 bg-bg/95 backdrop-blur-sm border border-t-0 border-border rounded-b-full shadow-sm group-hover:border-accent/50 transition-colors duration-200">
                  <span className="display-serif text-[11px] text-muted group-hover:text-accent transition-colors duration-200 leading-none">
                    C. Mahusay
                  </span>
                  <motion.svg
                    animate={{ rotate: navVisible ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
                {/* Amber stem */}
                <div className="w-px h-2 bg-accent/60" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click-outside backdrop */}
      {scrolled && navVisible && (
        <div
          className="fixed inset-0 z-40 bg-bg/20 backdrop-blur-[1px]"
          onClick={closeAll}
        />
      )}
    </>
  )
}
