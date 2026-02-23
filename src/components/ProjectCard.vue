<template>
  <article class="project-card">

    <!-- ── Image area ────────────────────────── -->
    <div class="project-card__image-area">

      <!-- Main image with crossfade on thumb switch -->
      <div class="project-card__image-wrap">
        <transition name="img-fade" mode="out-in">
          <img
            :key="activeIndex"
            :src="project.images[activeIndex].src"
            :alt="project.images[activeIndex].alt"
            class="project-card__img"
          />
        </transition>

        <!-- Hover overlay for external links -->
        <a
          v-if="project.type === 'external'"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card__overlay"
          :aria-label="`Open ${project.title} — opens in a new tab`"
          tabindex="0"
        >
          <span class="project-card__overlay-pill">
            View Live
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        </a>

        <!-- "Opens new tab" icon badge (always visible) -->
        <span v-if="project.type === 'external'" class="project-card__ext-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      </div>

      <!-- Thumbnail strip (when multiple images) -->
      <div
        v-if="project.images.length > 1"
        class="project-card__thumbs"
        role="group"
        :aria-label="`${project.title} — screenshot viewer`"
      >
        <button
          v-for="(img, i) in project.images"
          :key="i"
          class="project-card__thumb"
          :class="{ 'is-active': activeIndex === i }"
          @click="activeIndex = i"
          :aria-label="img.alt"
          :aria-pressed="activeIndex === i"
        >
          <img :src="img.src" alt="" aria-hidden="true" />
        </button>
      </div>

    </div>

    <!-- ── Card body ──────────────────────────── -->
    <div class="project-card__body">

      <!-- Tech tags -->
      <div class="project-card__tags">
        <span
          v-for="tag in project.tech"
          :key="tag"
          class="project-card__tag"
        >{{ tag }}</span>
      </div>

      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__desc">{{ project.description }}</p>

      <!-- CTA -->
      <div class="project-card__footer">
        <a
          v-if="project.type === 'external'"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card__cta"
        >
          View Live
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
        <router-link
          v-else
          :to="`/projects/${project.id}`"
          class="project-card__cta"
        >
          View Details
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </router-link>
      </div>

    </div>

  </article>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const activeIndex = ref(0)
</script>

<style lang="scss" scoped>
// ── Card shell ───────────────────────────────
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  border-radius: 16px;
  overflow: hidden;
  transition:
    transform 0.32s ease,
    box-shadow 0.32s ease,
    border-color 0.32s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-border);
    box-shadow:
      0 16px 40px rgba(0, 0, 0, 0.22),
      0 0 0 1px var(--color-border);
  }
}

// ── Image area ───────────────────────────────
.project-card__image-area {
  flex-shrink: 0;
}

.project-card__image-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--color-bg-secondary);

  // Scale image on card hover (parent selector cascade)
  .project-card:hover & img {
    transform: scale(1.04);
  }
}

// ── Main image with crossfade ─────────────────
.project-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.5s ease;
}

.img-fade-enter-active,
.img-fade-leave-active {
  transition: opacity 0.18s ease;
}
.img-fade-enter-from,
.img-fade-leave-to {
  opacity: 0;
}

// ── Hover overlay (external link) ─────────────
.project-card__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(13, 13, 30, 0.78) 0%,
    rgba(30, 10, 50, 0.72) 100%
  );
  opacity: 0;
  transition: opacity 0.28s ease;
  text-decoration: none;
  z-index: 2;

  .project-card__image-wrap:hover & {
    opacity: 1;
  }
}

.project-card__overlay-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  border-radius: 100px;
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  backdrop-filter: blur(4px);
  transition: background 0.2s ease, border-color 0.2s ease;

  svg {
    width: 15px;
    height: 15px;
  }

  .project-card__overlay:hover & {
    background: rgba(255, 255, 255, 0.12);
    border-color: #ffffff;
  }
}

// ── External-link badge (always visible, top-right) ─
.project-card__ext-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: rgba(13, 13, 30, 0.65);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  z-index: 1;
  transition: opacity 0.28s ease;

  svg {
    width: 13px;
    height: 13px;
  }

  // Fade out when overlay is visible (avoids visual conflict)
  .project-card__image-wrap:hover & {
    opacity: 0;
  }
}

// ── Thumbnail strip ───────────────────────────
.project-card__thumbs {
  display: flex;
  gap: 6px;
  padding: 10px 12px;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border-subtle);
  transition: background var(--transition-base);
}

.project-card__thumb {
  width: 72px;
  height: 44px;
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid transparent;
  background: var(--color-bg-primary);
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 0.2s ease, opacity 0.2s ease;
  opacity: 0.6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  &.is-active {
    border-color: var(--color-accent-purple);
    opacity: 1;
  }

  &:hover:not(.is-active) {
    border-color: var(--color-border);
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent-purple);
    outline-offset: 2px;
  }
}

// ── Card body ─────────────────────────────────
.project-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  gap: var(--space-sm);
}

// ── Tech tags ────────────────────────────────
.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.project-card__tag {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent-green);
  background: var(--color-accent-green-dim);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 4px;
  padding: 2px 8px;
}

// ── Title ─────────────────────────────────────
.project-card__title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.3;
  margin-top: 2px;
}

// ── Description ───────────────────────────────
.project-card__desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
  flex: 1;
}

// ── CTA footer ────────────────────────────────
.project-card__footer {
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border-subtle);
  margin-top: var(--space-sm);
}

.project-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent-purple);
  text-decoration: none;
  transition: gap 0.2s ease, color 0.2s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  &:hover {
    color: var(--color-accent-green);
    gap: 0.6rem;

    svg {
      transform: translate(2px, -2px);
    }
  }
}
</style>
