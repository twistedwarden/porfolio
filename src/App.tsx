import { Navbar }         from "./components/Navbar"
import { HeroSection }    from "./components/HeroSection"
import { AboutSection }   from "./components/AboutSection"
import { ProjectList }    from "./components/ProjectList"
import { SkillsList }     from "./components/SkillsList"
import { ContactSection } from "./components/ContactSection"
import { Footer }         from "./components/Footer"

export default function App() {
  return (
    <div className="bg-bg min-h-screen relative selection:bg-accent/20 selection:text-accent">
      {/* Editorial Background Grid & Texture */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-noise opacity-[0.04] dark:opacity-[0.03] mix-blend-overlay" />
        <div className="max-w-5xl mx-auto h-full flex justify-between px-6">
          <div className="w-px h-full bg-border/40" />
          <div className="hidden md:block w-px h-full bg-border/40" />
          <div className="hidden lg:block w-px h-full bg-border/40" />
          <div className="w-px h-full bg-border/40" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectList />
        <SkillsList />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
