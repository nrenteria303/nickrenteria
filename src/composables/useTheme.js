import { ref, watch } from 'vue'

// Module-level singleton so all components share the same state
const theme = ref(
  (() => {
    try {
      return localStorage.getItem('nr-portfolio-theme') || 'dark'
    } catch {
			console.warn('localStorage unavailable, defaulting to dark theme')
      return 'dark'
    }
  })()
)

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watch(theme, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
    try {
      localStorage.setItem('nr-portfolio-theme', newTheme)
    } catch {
      // ignore if localStorage unavailable
			console.warn('localStorage unavailable, cannot persist theme preference')
    }
  }, { immediate: true })

  return { theme, toggleTheme }
}
