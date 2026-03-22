import { BlurText } from "./ui/BlurText"
import { SplitText } from "./ui/SplitText"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-14 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Text block */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="label-caps text-accent mb-6"
            >
              Full-Stack Web Developer
            </motion.p>

            <h1 className="display-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6">
              <span className="block text-text">
                <BlurText
                  text="Christian Bo"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="display-serif text-5xl sm:text-6xl lg:text-7xl font-normal"
                />
              </span>
              <span className="block text-muted">
                <BlurText
                  text="Mahusay"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="display-serif text-5xl sm:text-6xl lg:text-7xl font-normal"
                />
              </span>
            </h1>

            <p className="text-muted font-light text-lg leading-relaxed max-w-md text-justify">
              <SplitText
                text="I design and build full‑stack web applications that help teams work cleaner, faster, and with less guesswork — calm on the surface, well‑engineered underneath. Based in Metro Manila."
                delay={55}
                className="text-muted font-light text-lg"
              />
            </p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#projects"
                className="nav-link px-5 py-2.5 border border-text text-text hover:bg-accent hover:border-accent hover:text-white transition-all duration-200 rounded-sm"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="nav-link px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 rounded-sm"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group w-56 h-56 md:w-64 md:h-64">
              {/* Light Mode: Base image */}
              <img
                src="/images/profile.jpg"
                alt="Christian Mahusay"
                className="absolute inset-0 w-full h-full object-cover rounded-sm transition-all duration-500 group-hover:opacity-0 saturate-[.9] contrast-[1.05] dark:hidden block"
              />
              {/* Light Mode: Hover image */}
              <img
                src="/images/profile_2.jpg"
                alt="Christian Mahusay with sunglasses"
                className="absolute inset-0 w-full h-full object-cover rounded-sm opacity-0 transition-all duration-500 group-hover:opacity-100 saturate-[.9] contrast-[1.05] dark:hidden block"
              />

              {/* Dark Mode: Base image */}
              <img
                src="/images/profile_dark.jpg"
                alt="Christian Mahusay"
                className="absolute inset-0 w-full h-full object-cover rounded-sm transition-all duration-500 group-hover:opacity-0 saturate-[.9] contrast-[1.05] hidden dark:block"
              />
              {/* Dark Mode: Hover image */}
              <img
                src="/images/profile_dark_2.jpg"
                alt="Christian Mahusay with sunglasses"
                className="absolute inset-0 w-full h-full object-cover rounded-sm opacity-0 transition-all duration-500 group-hover:opacity-100 saturate-[.9] contrast-[1.05] hidden dark:block"
              />

              {/* Warm amber overlay that fades out on hover */}
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-sm pointer-events-none" />
              
              {/* Offset border that pushes further away on hover */}
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-accent rounded-sm -z-10 transition-transform duration-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
