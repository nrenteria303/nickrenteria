<template>
  <div class="about">
    <div class="about__container">

      <!-- Page header -->
      <header class="about__page-header">
        <h1 class="about__page-title">About Me</h1>
        <div class="about__title-accent" aria-hidden="true"></div>
      </header>

      <!-- Two-column grid -->
      <div class="about__grid">

        <!-- ── Sidebar ────────────────────────── -->
        <aside class="about__sidebar">

          <div class="about__profile-card">
            <img
              :src="headshot"
              alt="Nick Renteria"
              class="about__photo"
              width="120"
              height="120"
            />
            <h2 class="about__profile-name">Nick Renteria</h2>
            <p class="about__profile-role">Frontend Architect &amp; UX/UI Engineer</p>

            <div class="about__stats">
              <div class="about__stat">
                <span class="about__stat-value">8+</span>
                <span class="about__stat-label">Years coding</span>
              </div>
              <div class="about__stat">
                <span class="about__stat-value">35+</span>
                <span class="about__stat-label">Sites launched</span>
              </div>
            </div>
          </div>

          <div class="about__personal">
            <h3 class="about__personal-heading">Outside the code</h3>
            <p>
              Born and raised in the Denver-metro area of Colorado, I now call Atlanta, GA home.
              I've been writing code for about 8 years — first as a freelancer building sites
              for local businesses, and for the past 5+ years as a Senior UX/UI Developer
              at BlueModus, Inc.
            </p>
            <p>
              When I'm not deep in a codebase, you'll usually find me watching movies,
              hanging out with my two cats, or behind a drum kit.
            </p>
          </div>

        </aside>

        <!-- ── Main content ───────────────────── -->
        <main class="about__main">

          <section class="about__section">
            <h2 class="about__section-title">What I Do</h2>
            <p class="about__lead">
              I'm a Frontend Architect and UX/UI Engineer with 5+ years of full-time experience
              building large-scale, production web platforms for enterprise and highly regulated
              clients — spanning finance, healthcare, education, logistics, and more.
            </p>
            <p>
              My specialty is the Vue.js ecosystem: component architecture, state management
              (Vuex / Pinia), build pipeline ownership, and accessibility-first implementation.
              I'm known internally as a Vue.js subject-matter expert and regularly own entire
              frontend systems end-to-end — from architecture decisions down to the last CSS rule.
            </p>
            <p>
              I've also expanded into backend territory within ASP.NET Core and Kentico CMS,
              which lets me deliver features vertically — frontend and backend together —
              reducing cross-team handoff overhead and shipping faster.
            </p>
          </section>

          <section class="about__section">
            <h2 class="about__section-title">Background &amp; Approach</h2>
            <p>
              My path to development was unconventional: I studied English at the University
              of Colorado, graduating Summa Cum Laude (3.86 GPA) with a minor in Mathematics.
              That background gave me a strong lens for precision, clarity, and communication —
              qualities I bring directly into code and client collaboration.
            </p>
            <p>
              I transitioned to web development through a formal mentorship program, and quickly
              found that combining technical rigor with design sensibility was exactly where I
              was supposed to be. I care deeply about accessibility (WCAG 2.x compliance is a
              baseline, not a checkbox), performance, and translating complex UX designs into
              clean, maintainable builds.
            </p>
          </section>

          <section class="about__section">
            <h2 class="about__section-title">Core Technologies</h2>
            <div class="about__skills-grid">
              <div
                v-for="group in skillGroups"
                :key="group.category"
                class="about__skill-group"
              >
                <h3 class="about__skill-category">{{ group.category }}</h3>
                <ul class="about__skill-list">
                  <li
                    v-for="item in group.items"
                    :key="item"
                    class="about__skill-item"
                  >{{ item }}</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="about__section">
            <h2 class="about__section-title">Notable Clients</h2>
            <p class="about__clients-note">
              A selection of organizations I've shipped production work for during my time
              at BlueModus:
            </p>
            <ul class="about__clients-list">
              <li
                v-for="client in clients"
                :key="client"
                class="about__clients-item"
              >{{ client }}</li>
            </ul>
          </section>

        </main>

      </div>
    </div>
  </div>
</template>

<script setup>
import headshot from '@images/headshot-2.jpg'

const skillGroups = [
  {
    category: 'Frontend',
    items: ['Vue.js / Vuex / Pinia', 'HTML5 / Pug', 'CSS3 / Sass / Tailwind', 'JavaScript ES6+', 'React JS']
  },
  {
    category: 'Build & Tooling',
    items: ['Vite', 'Node.js / npm / Yarn', 'Git', 'CI Pipelines', 'GitHub Copilot / AI tooling']
  },
  {
    category: 'Accessibility',
    items: ['WCAG 2.x compliance', 'WAI-ARIA patterns', 'Semantic HTML', 'Lighthouse / WAVE audits']
  },
  {
    category: 'CMS & Backend',
    items: ['Kentico / Xperience by Kentico', 'ASP.NET Core', 'C# / CSHTML', 'MVC / API Controllers']
  }
]

const clients = [
  'Ball Corporation',
  'Texas Association of School Boards',
  'Options Clearing Corporation',
  'UC San Diego (UCSD)',
  'American Medical Group Association',
  'Patterson Companies',
  'PEMCO Mutual Insurance',
  'Retail Industry Leaders Association',
  'United Community Bank',
  'Advancial Credit Union',
  'Truliant Federal Credit Union',
  'CaroTrans / Mainfreight',
  'Blue Rhino Propane / Ferrellgas',
  'Roehl Transportation',
  'Lytx'
]
</script>

<style lang="scss" scoped>
// ── Page shell ───────────────────────────────
.about {
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 1px);
  padding-bottom: var(--space-3xl);
}

.about__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-xl);
}

// ── Page header ──────────────────────────────
.about__page-header {
  margin-bottom: var(--space-2xl);
}

.about__page-title {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
}

.about__title-accent {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-green));
  border-radius: 2px;
}

// ── Grid ─────────────────────────────────────
.about__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);

  @media (min-width: 900px) {
    grid-template-columns: 320px 1fr;
    gap: var(--space-3xl);
    align-items: start;
  }
}

// ── Sidebar ──────────────────────────────────
.about__sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.about__profile-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-xs);
  transition: background var(--transition-base), border-color var(--transition-base);
}

.about__photo {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 3px solid transparent;
  background:
    linear-gradient(var(--color-bg-card), var(--color-bg-card)) padding-box,
    linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green)) border-box;
  margin-bottom: var(--space-sm);
}

.about__profile-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
}

.about__profile-role {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.02em;
  margin-bottom: var(--space-md);
}

.about__stats {
  display: flex;
  gap: var(--space-xl);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  justify-content: center;
}

.about__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.about__stat-value {
  font-family: var(--font-display);
  font-size: 1.625rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about__stat-label {
  font-size: 0.72rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

// ── Personal blurb ───────────────────────────
.about__personal {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: var(--space-lg) var(--space-xl);
  transition: background var(--transition-base), border-color var(--transition-base);
}

.about__personal-heading {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent-purple);
  margin-bottom: var(--space-md);
}

.about__personal p {
  font-size: 0.925rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
  margin-bottom: var(--space-sm);

  &:last-child { margin-bottom: 0; }
}

// ── Main content sections ────────────────────
.about__section {
  margin-bottom: var(--space-2xl);

  &:last-child { margin-bottom: 0; }
}

.about__section-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-sm);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 36px;
    height: 2px;
    background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-green));
    border-radius: 2px;
  }
}

.about__lead {
  font-size: 1.05rem;
  color: var(--color-text-primary);
  line-height: 1.8;
  margin-bottom: var(--space-md);
}

.about__main p {
  font-size: 0.975rem;
  color: var(--color-text-secondary);
  line-height: 1.85;
  margin-bottom: var(--space-md);

  &:last-child { margin-bottom: 0; }
}

// ── Skills grid ──────────────────────────────
.about__skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
}

.about__skill-group {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: var(--space-md) var(--space-lg);
  transition: background var(--transition-base), border-color var(--transition-base);
}

.about__skill-category {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent-purple);
  margin-bottom: var(--space-sm);
}

.about__skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about__skill-item {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.5;

  &::before {
    content: '▸ ';
    color: var(--color-accent-green);
    font-size: 0.75rem;
  }
}

// ── Clients list ─────────────────────────────
.about__clients-note {
  font-size: 0.925rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-md);
}

.about__clients-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  list-style: none;
  padding: 0;
  margin: 0;
}

.about__clients-item {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  background: var(--color-accent-purple-dim);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 4px 10px;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: var(--color-bg-card);
    color: var(--color-text-primary);
  }
}
</style>
