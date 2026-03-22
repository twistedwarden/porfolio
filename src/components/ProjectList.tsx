import { motion } from "framer-motion"
import { projects } from "@/lib/projects"
import { ProjectRow } from "./ProjectRow"
import { AnimatedContent } from "./ui/AnimatedContent"

export function ProjectList() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24 relative">
      {/* Huge background structural number */}
      <span className="pointer-events-none absolute top-12 left-0 text-[16rem] md:text-[24rem] font-serif leading-none text-border opacity-40 select-none -z-10 -translate-x-1/4">
        02
      </span>

      <AnimatedContent direction="vertical" distance={20} threshold={0.1}>
        <div className="flex items-baseline gap-4 mb-3">
          <p className="label-caps text-accent">02</p>
          <h2 className="display-serif text-3xl font-normal text-text">Selected Projects</h2>
        </div>
        <p className="label-caps text-muted ml-8 mb-12">All projects are academic / school-based work.</p>
      </AnimatedContent>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectRow project={project} index={i + 1} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
