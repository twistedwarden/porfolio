import { AnimatedContent } from "./ui/AnimatedContent"
import { DecryptedText } from "./ui/DecryptedText"
import { skills } from "@/lib/skills"
import { motion } from "framer-motion"

export function SkillsList() {
  const groups = Object.entries(skills) as [string, string[]][]

  return (
    <section id="skills" className="border-t border-border py-24 relative overflow-hidden">
      {/* Huge background structural number */}
      <span className="pointer-events-none absolute -top-12 -right-12 text-[16rem] md:text-[24rem] font-serif leading-none text-border opacity-40 select-none z-0">
        03
      </span>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedContent direction="vertical" distance={20} threshold={0.1}>
          <div className="flex items-baseline gap-4 mb-12">
            <p className="label-caps text-accent">03</p>
            <h2 className="display-serif text-3xl font-normal text-text">Skills & Tools</h2>
          </div>
        </AnimatedContent>

        <div className="flex flex-col">
          {groups.map(([category, items], gi) => (
            <AnimatedContent key={category} direction="vertical" distance={16} delay={gi * 60} threshold={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 py-8 border-t border-border items-center">
                <p className="label-caps text-muted">{category}</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {items.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.05 + si * 0.03, duration: 0.4 }}
                      className="group flex items-center"
                    >
                      <DecryptedText
                        text={skill}
                        speed={35}
                        maxIterations={10}
                        revealDirection="start"
                        className="text-base font-light text-text group-hover:text-accent transition-colors duration-200"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
          <div className="border-t border-border w-full" />
        </div>
      </div>
    </section>
  )
}
