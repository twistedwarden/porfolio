import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 600)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border py-8 relative">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="label-caps">© {new Date().getFullYear()} Christian Bo Mahusay</p>
        <p className="label-caps">Full-Stack Web Developer · Valenzuela City, PH</p>
      </div>

      {/* Scroll-to-top button */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Back to top"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={showTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center border border-border bg-surface text-muted hover:border-accent hover:text-accent transition-colors duration-200 rounded-sm shadow-sm"
        style={{ pointerEvents: showTop ? "auto" : "none" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </motion.button>
    </footer>
  )
}
