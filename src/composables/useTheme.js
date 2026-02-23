import { ref, watchEffect } from 'vue'

// Module-level singleton so all components share the same state
const theme = ref(
  (() => {
    try {
      return localStorage.getItem('nr-theme') || 'dark'
    } catch {
      return 'dark'
    }
  })()
)

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
    try {
      localStorage.setItem('nr-theme', theme.value)
    } catch {
      // ignore if localStorage unavailable
    }
  })

  return { theme, toggleTheme }
}
