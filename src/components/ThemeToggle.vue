<template>
  <button
    class="theme-toggle"
    :class="{ 'theme-toggle--in-header': inHeader }"
    @click="toggleTheme"
    :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
    :title="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
  >
    <!-- Sun icon for dark mode (switch to light) -->
    <svg
      v-if="theme === 'dark'"
      class="theme-toggle__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3"  />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"   />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>

    <!-- Moon icon for light mode (switch to dark) -->
    <svg
      v-else
      class="theme-toggle__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme.js'

defineProps({
  inHeader: {
    type: Boolean,
    default: false
  }
})

const { theme, toggleTheme } = useTheme()
</script>

<style lang="scss" scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid var(--color-border);
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast),
    transform var(--transition-fast);
  flex-shrink: 0;

  &:hover {
    background: var(--color-accent-purple-dim);
    border-color: var(--color-accent-purple);
    color: var(--color-accent-purple);
    transform: scale(1.08);
  }

  // Floating variant (default) — fixed bottom-right
  &:not(.theme-toggle--in-header) {
    position: fixed;
    bottom: 1.75rem;
    right: 1.75rem;
    z-index: 900;
  }

  // Header variant — static positioning
  &--in-header {
    width: 38px;
    height: 38px;
  }

  &__icon {
    width: 18px;
    height: 18px;
  }
}
</style>
