/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:            "var(--bg)",
        surface:       "var(--surface)",
        border:        "var(--border)",
        text:          "var(--text)",
        muted:         "var(--muted)",
        accent:        "var(--accent)",
        "accent-wash": "var(--accent-wash)",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans:  ["Helvetica Neue", "Arial", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurIn: {
          "0%":   { opacity: "0", filter: "blur(8px)", transform: "translateY(-6px)" },
          "100%": { opacity: "1", filter: "blur(0px)", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up":  "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "blur-in":  "blurIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
}
