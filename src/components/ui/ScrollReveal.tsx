import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: string
  baseOpacity?: number
  enableBlur?: boolean
  containerClassName?: string
}

export function ScrollReveal({
  children,
  baseOpacity = 0.15,
  enableBlur = true,
  containerClassName,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.15 })
  const words = children.split(" ")

  return (
    <div ref={containerRef} className={cn("leading-relaxed", containerClassName)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: baseOpacity, filter: enableBlur ? "blur(4px)" : "blur(0px)" }}
          animate={
            isInView
              ? { opacity: 1, filter: "blur(0px)" }
              : { opacity: baseOpacity, filter: enableBlur ? "blur(4px)" : "blur(0px)" }
          }
          transition={{ delay: i * 0.025, duration: 0.45, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
