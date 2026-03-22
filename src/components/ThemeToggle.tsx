import { useTheme } from "@/hooks/useTheme"
import { Switch } from "@/components/ui/Switch"

export function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <div className="flex items-center gap-2">
      <span className="label-caps text-[10px]">{dark ? "Dark" : "Light"}</span>
      <Switch
        checked={dark}
        onCheckedChange={toggle}
        aria-label="Toggle dark mode"
      />
    </div>
  )
}
