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
          width="140"
          height="140"
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
import headshot   from '@images/headshot-2.jpg'
import atlSkyline from '@images/atlskyline.jpg'

const isVisible = ref(false)

const navLinks = [
  { to: '/about',    label: 'About'    },
  { to: '/resume',   label: 'Resume'   },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  }
]

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
    rgba(10, 10, 24, 0.90) 0%,
    rgba(26, 10, 46, 0.84) 50%,
    rgba(10, 26, 20, 0.90) 100%
  );
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
  transition:
    opacity $stagger-duration ease,
    transform $stagger-duration ease;
}

.is-visible {
  .home__headshot { opacity: 1; transform: none; transition-delay: 0.08s;  }
  .home__name     { opacity: 1; transform: none; transition-delay: 0.24s;  }
  .home__title    { opacity: 1; transform: none; transition-delay: 0.40s;  }
  .home__nav      { opacity: 1; transform: none; transition-delay: 0.56s;  }
}

// ── Headshot ─────────────────────────────────
.home__headshot {
  margin-bottom: 1.5rem;
}

.home__headshot-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  // Gradient border via background-clip trick
  border: 3px solid transparent;
  background:
    linear-gradient(#0d0d1e, #0d0d1e) padding-box,
    linear-gradient(135deg, #8b5cf6, #10b981) border-box;
  box-shadow:
    0 0 28px rgba(139, 92, 246, 0.35),
    0 0 56px rgba(16, 185, 129, 0.12);
}

// ── Name ─────────────────────────────────────
.home__name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 6vw, 3.25rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

// ── Title ────────────────────────────────────
.home__title {
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 2.4vw, 0.95rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 2.75rem;
}

// ── Navigation menu ───────────────────────────
.home__nav {
  width: 100%;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  overflow: hidden;
}

.home__nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
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
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }

  &:hover,
  &.router-link-active {
    background: rgba(139, 92, 246, 0.18);
    color: #ffffff;
    padding-left: 1.75rem;

    .home__nav-link-arrow {
      color: #10b981;
      transform: translateX(4px);
    }
  }
}

.home__nav-link-label {
  flex: 1;
}

.home__nav-link-arrow {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.3);
  transition:
    color var(--transition-fast),
    transform var(--transition-fast);
}
</style>
