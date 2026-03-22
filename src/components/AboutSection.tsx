import { AnimatedContent } from "./ui/AnimatedContent"
import { ScrollReveal } from "./ui/ScrollReveal"

const education = [
  { period: "2022 – Present", school: "Bestlink College of the Philippines", level: "College" },
  { period: "2016 – 2022",   school: "Divine Word College of Valenzuela",    level: "Secondary" },
  { period: "2010 – 2016",   school: "Parada Elementary School",             level: "Primary" },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-24 relative overflow-hidden">
      {/* Huge background structural number */}
      <span className="pointer-events-none absolute -top-12 -right-12 text-[16rem] md:text-[24rem] font-serif leading-none text-border opacity-40 select-none z-0">
        01
      </span>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedContent direction="vertical" distance={20} delay={0} threshold={0.1}>
          <div className="flex items-baseline gap-4 mb-12">
            <p className="label-caps text-accent">01</p>
            <h2 className="display-serif text-3xl font-normal text-text">About</h2>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              containerClassName="font-sans font-light text-base text-text leading-relaxed"
            >
              I'm Christian Bo Mahusay, a full-stack web developer currently pursuing my degree at Bestlink College of the Philippines. I build production-ready web applications with a focus on clean architecture, intuitive UX, and real-world impact.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              containerClassName="font-sans font-light text-base text-muted leading-relaxed"
            >
              My work spans the full stack — from interactive React frontends styled with Tailwind, to Laravel and Node.js backends connected to MySQL databases. I've led projects as both developer and Scrum Master, coordinating teams through agile sprint cycles.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0}
              enableBlur={false}
              containerClassName="font-sans font-light text-base text-muted leading-relaxed"
            >
              I deploy production-grade websites, work with REST APIs and WebSockets, and version-control everything through Git and GitHub.
            </ScrollReveal>

            {/* Education */}
            <AnimatedContent direction="vertical" distance={16} delay={200} threshold={0.15}>
              <div className="pt-6 border-t border-border">
                <p className="label-caps text-muted mb-6">Education</p>
                <div className="space-y-5">
                  {education.map((item) => (
                    <div key={item.level} className="flex gap-6 items-start">
                      <span className="label-caps text-accent w-32 shrink-0 pt-0.5">{item.period}</span>
                      <div>
                        <p className="text-text font-normal text-sm">{item.school}</p>
                        <p className="label-caps text-muted mt-0.5">{item.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Photo + quick facts */}
          <AnimatedContent direction="vertical" distance={20} delay={150} threshold={0.1}>
            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="group relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-border">
                  {/* Light Mode Images */}
                  <img
                    src="/images/about.jpg"
                    alt="Christian Mahusay"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0 dark:hidden"
                  />
                  <img
                    src="/images/about_2.jpg"
                    alt="Christian Mahusay working"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 dark:hidden"
                  />
                  
                  {/* Dark Mode Images */}
                  <img
                    src="/images/about_dark.jpg"
                    alt="Christian Mahusay"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0 hidden dark:block"
                  />
                  <img
                    src="/images/about_dark_2.jpg"
                    alt="Christian Mahusay working"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 hidden dark:block"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-full h-full border border-accent/30 rounded-sm -z-10" />
              </div>

              {/* Quick facts */}
              <div className="border border-border rounded-sm p-5 bg-surface space-y-3">
                <p className="label-caps text-muted">At a glance</p>
                <div className="space-y-2 text-sm font-light">
                  {[
                    ["Location", "Valenzuela, Metro Manila"],
                    ["Born", "June 26, 2004"],
                    ["Focus", "Full-Stack Web Dev"],
                    ["Deploys", "Production-ready sites"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-muted">{k}</span>
                      <span className={v === "Production-ready sites" ? "text-accent" : "text-text"}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
