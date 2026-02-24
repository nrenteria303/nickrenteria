<template>
  <section
    class="home"
    :style="{ '--bg-image': `url(${atlSkyline})` }"
    aria-label="Homepage"
  >
    <div class="home__overlay" aria-hidden="true"></div>

    <div class="home__content" :class="{ 'is-visible': isVisible }">

      <div class="home__headshot">
        <img
          :src="headshot"
          alt="Nick Renteria"
          class="home__headshot-img"
          width="160"
          height="160"
        />
      </div>

      <h1 class="home__name">Nick Renteria</h1>

      <p class="home__title">Frontend Architect &amp; UX/UI Engineer</p>

      <nav class="home__nav" aria-label="Site navigation">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="home__nav-link"
        >
          <span class="home__nav-link-label">{{ link.label }}</span>
          <span class="home__nav-link-arrow" aria-hidden="true">→</span>
        </router-link>
      </nav>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import headshot   from '@images/headshot-2025.webp'
import atlSkyline from '@images/atlskyline.jpg'
import { NAV_LINKS as navLinks } from '../data/site.js'

const isVisible = ref(false)

onMounted(() => {
  // small delay ensures CSS transitions fire after first paint
  requestAnimationFrame(() => {
    setTimeout(() => { isVisible.value = true }, 80)
  })
})
</script>

<style lang="scss" scoped>
$stagger-duration: 0.65s;

// ── Layout ────────────────────────────────────
.home {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  overflow: hidden;

  // Fixed attachment disabled on small screens for performance
  @media (min-width: 768px) {
    background-attachment: fixed;
  }
}

// ── Gradient overlay ─────────────────────────
.home__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    140deg,
    var(--home-overlay-1) 0%,
    var(--home-overlay-2) 50%,
    var(--home-overlay-3) 100%
  );
  transition: background var(--transition-base);
  z-index: 1;
}

// ── Content container ────────────────────────
.home__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 440px;
}

// ── Slide-up animation helpers ───────────────
// Each child starts invisible; when parent gains .is-visible they transition in
// with staggered delays.

.home__headshot,
.home__name,
.home__title,
.home__nav {
  opacity: 0;
  transform: translateY(26px);
  // Property order: opacity | transform | color | background | border-color
  // Delays are set per-property in .is-visible so only opacity/transform
  // get the stagger; theme-change properties always animate at 0s delay.
  transition:
    opacity $stagger-duration ease,
    transform $stagger-duration ease,
    color var(--transition-base),
    background var(--transition-base),
    border-color var(--transition-base);
}

.is-visible {
  // Delay order matches transition-property order above:
  // opacity, transform → staggered; color, background, border-color → 0s
  .home__headshot { opacity: 1; transform: none; transition-delay: 0.08s, 0.08s, 0s, 0s, 0s; }
  .home__name     { opacity: 1; transform: none; transition-delay: 0.24s, 0.24s, 0s, 0s, 0s; }
  .home__title    { opacity: 1; transform: none; transition-delay: 0.40s, 0.40s, 0s, 0s, 0s; }
  .home__nav      { opacity: 1; transform: none; transition-delay: 0.56s, 0.56s, 0s, 0s, 0s; }
}

// ── Headshot ─────────────────────────────────
.home__headshot {
  margin-bottom: 1.5rem;
}

.home__headshot-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
  // Gradient border via background-clip trick
  border: 3px solid transparent;
  background:
    linear-gradient(var(--home-headshot-bg), var(--home-headshot-bg)) padding-box,
    linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green)) border-box;
  transition: background var(--transition-base);
  box-shadow:
    0 0 28px rgba(139, 92, 246, 0.35),
    0 0 56px rgba(16, 185, 129, 0.12);
}

// ── Name ─────────────────────────────────────
.home__name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 6vw, 3.25rem);
  font-weight: 700;
  color: var(--home-text);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

// ── Title ────────────────────────────────────
.home__title {
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 2.4vw, 0.95rem);
  font-weight: 400;
  color: var(--home-text-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 2.75rem;
}

// ── Navigation menu ───────────────────────────
.home__nav {
  width: 100%;
  max-width: 300px;
  background: var(--home-nav-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--home-nav-border);
  border-radius: 14px;
  overflow: hidden;
}

.home__nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: var(--home-nav-text);
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    padding-left var(--transition-fast);

  // Separator between items
  & + & {
    border-top: 1px solid var(--home-nav-separator);
  }

  &:hover,
  &.router-link-active {
    background: var(--color-border);
    color: var(--home-text);
    padding-left: 1.75rem;

    .home__nav-link-arrow {
      color: var(--color-accent-green);
      transform: translateX(4px);
    }
  }
}

.home__nav-link-label {
  flex: 1;
}

.home__nav-link-arrow {
  font-size: 1rem;
  color: var(--home-nav-arrow);
  transition:
    color var(--transition-fast),
    transform var(--transition-fast);
}
</style>
