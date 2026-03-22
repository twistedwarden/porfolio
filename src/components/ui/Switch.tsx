import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

interface SwitchProps {
  checked: boolean
  onCheckedChange: (v: boolean) => void
  "aria-label"?: string
  className?: string
}

export function Switch({ checked, onCheckedChange, className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={cn(
        "relative inline-flex h-5 w-9 cursor-pointer items-center rounded-full border border-[var(--border)] transition-colors duration-300",
        checked ? "bg-[var(--accent)]" : "bg-[var(--surface)]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform duration-300",
          checked ? "translate-x-[18px]" : "translate-x-[2px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}
