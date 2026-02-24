<template>
  <div class="projects">
    <div class="projects__container">

      <!-- ── Page header ──────────────────────── -->
      <header class="projects__page-header">
        <h1 class="projects__page-title">Projects</h1>
        <div class="projects__title-accent" aria-hidden="true"></div>
        <p class="projects__intro">
          A selection of personal projects and proofs of concept. More to come.
        </p>
      </header>

      <!-- ── Project grid ─────────────────────── -->
      <div class="projects__grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- ── Coming soon note ──────────────────── -->
      <div class="projects__more">
        <span class="projects__more-icon" aria-hidden="true">✦</span>
        <p>More projects coming soon — including client work and additional personal builds.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

import pongStartScreen from '@images/ping-pong-game-startscreen.jpg'
import pongGameplay    from '@images/ping-pong-game-screenshot.png'
import realestMain     from '@images/realestate-app-main-screen.jpg'
import realestModal    from '@images/realestate-app-modal.png'

const projects = [
  {
    id:          'pong-game',
    title:       'Retro Pong',
    type:        'external',
    url:         'https://ping-pong-game-app.netlify.app/',
    tech:        ['React JS'],
    description: 'A retro-style Pong game built with React. Features a polished start screen with keyboard control reference, live scoring for both players, and smooth paddle physics — a focused exercise in component state and game loop logic.',
    images: [
      { src: pongStartScreen, alt: 'Pong start screen showing game controls and a Start button' },
      { src: pongGameplay,    alt: 'Pong gameplay in action — paddles, ball, and live score'    }
    ]
  },
  {
    id:          'realest',
    title:       'Realest — Property Listings',
    type:        'external',
    url:         'https://realest.netlify.app/',
    tech:        ['React JS'],
    description: 'A proof-of-concept real estate listing app built with React. Browse a grid of properties, filter by criteria, and click any card to open a detail modal with expanded listing information — demonstrating data-driven UI composition and modal patterns.',
    images: [
      { src: realestMain,  alt: 'Real estate app main screen showing a filterable property listings grid' },
      { src: realestModal, alt: 'Property detail modal showing expanded listing info and stats'           }
    ]
  }
]
</script>

<style lang="scss" scoped>
// ── Page shell ───────────────────────────────
.projects {
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 1px);
  padding-bottom: var(--space-3xl);
}

.projects__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-xl);
}

// ── Page header ──────────────────────────────
.projects__page-header {
  margin-bottom: var(--space-2xl);
}

.projects__page-title {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
}

.projects__title-accent {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-green));
  border-radius: 2px;
  margin-bottom: 1.25rem;
}

.projects__intro {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
}

// ── Project grid ─────────────────────────────
.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

// ── "More coming" footer note ────────────────
.projects__more {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border-subtle);

  p {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
  }
}

.projects__more-icon {
  color: var(--color-accent-purple);
  font-size: 0.65rem;
  flex-shrink: 0;
  opacity: 0.7;
}
</style>
