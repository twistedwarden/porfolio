import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedContentProps {
  children: React.ReactNode
  direction?: "vertical" | "horizontal"
  distance?: number
  delay?: number
  threshold?: number
  className?: string
}

export function AnimatedContent({
  children,
  direction = "vertical",
  distance = 20,
  delay = 0,
  threshold = 0.1,
  className,
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })

  const isVertical = direction === "vertical"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...(isVertical ? { y: distance } : { x: distance }) }}
      animate={inView
        ? { opacity: 1, ...(isVertical ? { y: 0 } : { x: 0 }) }
        : { opacity: 0, ...(isVertical ? { y: distance } : { x: distance }) }
      }
      transition={{ delay: delay / 1000, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
