import { AnimatedContent } from "./ui/AnimatedContent"
import { MagneticButton } from "./ui/MagneticButton"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-24 relative overflow-hidden">
      {/* Huge background structural number */}
      <span className="pointer-events-none absolute bottom-0 left-0 text-[16rem] md:text-[24rem] font-serif leading-none text-border opacity-40 select-none z-0 -translate-x-1/4 translate-y-1/4">
        04
      </span>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedContent direction="vertical" distance={20} threshold={0.1}>
          <div className="flex items-baseline gap-4 mb-12">
            <p className="label-caps text-accent">04</p>
            <h2 className="display-serif text-3xl font-normal text-text">Contact</h2>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column */}
          <AnimatedContent direction="vertical" distance={20} delay={80} threshold={0.1}>
            <div className="space-y-8">
              <p className="font-light text-muted leading-relaxed">
                Have a project in mind or want to connect? I'm open to freelance work,
                collaborations, and opportunities. Reach out through any channel below.
              </p>

              {/* Email — the one amber-border detail */}
              <div>
                <p className="label-caps text-muted mb-2">Email</p>
                <MagneticButton strength={0.3}>
                  <a
                    href="mailto:dev.cmahusay@gmail.com"
                    className="display-serif text-xl text-text border-b-2 border-accent pb-0.5 hover:text-accent transition-colors duration-200"
                  >
                    mahusaycchristian@gmail.com
                  </a>
                </MagneticButton>
              </div>

              {/* Phone */}
              <div>
                <p className="label-caps text-muted mb-2">Phone / Viber</p>
                <a
                  href="tel:+639195987031"
                  className="font-light text-text hover:text-accent transition-colors duration-200"
                >
                  +63 919 598 7031
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="label-caps text-muted mb-2">Location</p>
                <p className="font-light text-text">
                  2495 La Mesa St. Ugong,<br />
                  Valenzuela City, Metro Manila<br />
                  <span className="text-muted text-sm">NCR, Philippines</span>
                </p>
              </div>
            </div>
          </AnimatedContent>

          {/* Availability card */}
          <AnimatedContent direction="vertical" distance={20} delay={160} threshold={0.1}>
            <div className="border border-border rounded-sm p-8 bg-surface h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-2 h-2 rounded-full bg-accent"
                  />
                  <p className="label-caps text-accent">Available for Work</p>
                </div>
                <p className="heading-serif-italic text-2xl text-text mb-4">
                  Let's build something together.
                </p>
                <p className="text-muted font-light text-sm leading-relaxed mb-8">
                  Open to freelance projects, part-time collaborations, and internship
                  opportunities. I bring full-stack capability and strong attention to
                  detail to every project.
                </p>
              </div>

              <MagneticButton strength={0.25}>
                <a
                  href="mailto:mahusaycchristian@gmail.com"
                  className="nav-link inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 rounded-sm"
                >
                  Send a Message
                </a>
              </MagneticButton>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
