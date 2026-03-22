import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SplitTextProps {
  text: string
  delay?: number
  className?: string
}

export function SplitText({ text, delay = 60, className }: SplitTextProps) {
  const words = text.split(" ")

  return (
    <span className={cn("inline", className)}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + (wi * delay) / 1000, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          {wi < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  )
}
