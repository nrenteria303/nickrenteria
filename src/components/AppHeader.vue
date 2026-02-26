<template>
  <header class="app-header">
    <div class="app-header__inner">
      <router-link to="/" class="app-header__logo" aria-label="Nick Renteria — Home">
        <span class="app-header__logo-text">NR</span>
      </router-link>

      <nav class="app-header__nav" aria-label="Main navigation">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="app-header__nav-link"
          :class="{ 'is-section-active': isSubActive(link.to) }"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <ThemeToggle :in-header="true" />
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import { NAV_LINKS as navLinks } from '../data/site.js'

const route = useRoute()

// Treat a nav link as active when on the exact path OR any sub-path beneath it.
// (router-link-active only applies to matched route chains, not flat siblings.)
const isSubActive = (to) => route.path.startsWith(to + '/')
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 100;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-subtle);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: background var(--transition-base), border-color var(--transition-base);

  &__inner {
    max-width: var(--max-width);
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
		overflow-x: auto;
  }

  &__logo {
    text-decoration: none;
    flex-shrink: 0;
  }

  &__logo-text {
    font-family: var(--font-display);
    font-size: 1.375rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 0.02em;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: auto;
  }

  &__nav-link {
    text-decoration: none;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 2px;
    transition: color var(--transition-fast);

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-green));
      border-radius: 2px;
      transition: width var(--transition-base);
    }

    &:hover,
    &.router-link-active,
    &.is-section-active {
      color: var(--color-text-primary);

      &::after {
        width: 100%;
      }
    }
  }
}
</style>
