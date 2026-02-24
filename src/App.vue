<template>
  <div class="app">
    <AppHeader v-if="!isHome" />

    <router-view v-slot="{ Component }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <ThemeToggle />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import { useTheme } from './composables/useTheme.js'

const route = useRoute()

// Initialize theme (sets data-theme on <html> and persists to localStorage)
useTheme()

const isHome = computed(() => route.path === '/')
</script>

<style lang="scss">
.app {
  min-height: 100vh;
}
#app .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  font-family: var(--font-display);
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(135deg, var(--color-dark-purple), var(--color-dark-green));
  transition: opacity var(--transition-fast), transform var(--transition-fast);
  flex-shrink: 0;
  align-self: center;
	cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
		flex-shrink: 0;
  }

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
    color: #ffffff;
  }
}
</style>
