import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlurTextProps {
  text: string
  delay?: number
  animateBy?: "words" | "chars"
  direction?: "top" | "bottom"
  className?: string
}

export function BlurText({
  text,
  delay = 100,
  animateBy = "words",
  direction = "top",
  className,
}: BlurTextProps) {
  const units = animateBy === "words" ? text.split(" ") : text.split("")

  return (
    <span className={cn("inline", className)}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: direction === "top" ? -10 : 10,
          }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            delay: (i * delay) / 1000,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {unit}
          {animateBy === "words" && i < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  )
}
