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
</style>
