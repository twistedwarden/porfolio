import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%"

interface DecryptedTextProps {
  text: string
  speed?: number
  maxIterations?: number
  revealDirection?: "start" | "end" | "center"
  className?: string
}

export function DecryptedText({
  text,
  speed = 40,
  maxIterations = 12,
  revealDirection = "start",
  className,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const iterationsRef = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text)
      iterationsRef.current = 0
      return
    }

    iterationsRef.current = 0

    intervalRef.current = setInterval(() => {
      iterationsRef.current += 1
      const progress = iterationsRef.current / maxIterations

      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " "
            const revealThreshold =
              revealDirection === "start"
                ? i / text.length
                : revealDirection === "end"
                ? 1 - i / text.length
                : Math.abs(i - text.length / 2) / (text.length / 2)

            if (progress > revealThreshold) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join("")
      )

      if (iterationsRef.current >= maxIterations) {
        setDisplayText(text)
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, speed)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovering, text, speed, maxIterations, revealDirection])

  return (
    <span
      className={cn("inline-block cursor-default select-none", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  )
}
