import { TiltedCard } from "./ui/TiltedCard"
import type { Project } from "@/lib/projects"

interface Props {
  project: Project
  index: number
}

export function ProjectRow({ project, index }: Props) {
  return (
    <TiltedCard rotateAmplitude={6} scaleOnHover={1.02}>
      <article className="border border-border rounded-sm overflow-hidden bg-surface hover:border-accent/40 transition-colors duration-300 h-full">
        {/* Screenshot */}
        <div className="relative w-full aspect-video bg-bg border-b border-border overflow-hidden">
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
            />
          ) : (
            /*
              ┌────────────────────────────────────────────────────────────────┐
              │  PROJECT SCREENSHOT PLACEHOLDER                                │
              │  1. Place image at: public/screenshots/<name>.png             │
              │  2. Update lib/projects.ts → screenshot: "/screenshots/...png"│
              └────────────────────────────────────────────────────────────────┘
            */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-muted opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <div>
                <p className="label-caps opacity-40">Screenshot</p>
                <p className="text-accent text-[10px] font-mono mt-1">lib/projects.ts</p>
              </div>
            </div>
          )}
          {/* Index badge */}
          <div className="absolute top-3 left-3 w-7 h-7 flex items-center justify-center text-xs font-mono text-accent border border-accent/40 bg-bg/80 rounded-sm backdrop-blur-sm">
            {String(index).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="display-serif text-xl font-normal text-text leading-tight mb-0.5">
                {project.title}
              </h3>
              <p className="label-caps text-accent">{project.role}</p>
            </div>
            <span className="label-caps text-muted pt-0.5">{project.year}</span>
          </div>

          <p className="text-sm font-light text-muted leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-normal px-2 py-0.5 rounded-sm border border-border text-muted hover:border-accent hover:text-accent transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </TiltedCard>
  )
}
