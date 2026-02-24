<template>
  <div class="ct">
    <div class="ct__container">

      <!-- ── Back link ───────────────────────── -->
      <router-link to="/projects" class="ct__back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Projects
      </router-link>

      <!-- ── Page header ─────────────────────── -->
      <header class="ct__header">
        <div class="ct__meta">
          <span class="ct__company">BlueModus × CaroTrans</span>
          <div class="ct__tags" aria-label="Technologies used">
            <span class="ct__tag" v-for="tag in tech" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <h1 class="ct__title">Authenticated Shipping Center</h1>
        <div class="ct__title-accent" aria-hidden="true"></div>
      </header>

      <!-- ── Auth notice ─────────────────────── -->
      <div class="ct__auth-notice" role="note">
        <svg class="ct__auth-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <p>
          The apps in this project live behind user authentication walls on the
          live CaroTrans website — accessible only to registered shipping agents
          and customers. A live link isn't possible here, but the screenshots
          below and the architecture overview illustrate the full scope of what
          was built.
        </p>
      </div>

      <!-- ── Architecture overview ───────────── -->
      <section class="ct__section">
        <h2 class="ct__section-title">Architecture Overview</h2>
        <p>
          I architected a production "authenticated shipping center" as a suite of Vue micro-apps
          embedded into a Kentico/Pug CMS site. Rather than forcing a monolithic SPA, the UI is
          delivered as ~15 page-scoped Vue islands (14 root <code>App.vue</code> apps), each
          mounted into a server-rendered page and configured via <code>data-*</code> contracts.
          This keeps first-load scope tight, preserves CMS authoring workflows, and still delivers
          app-grade interactions for bookings, rating/quotes, sailing schedules, documents, and
          agent operations.
        </p>
        <p>
          The ecosystem is unified by shared infrastructure: a consistent bootstrap layer
          (<code>rootData</code> injection), centralized axios interceptors for login-aware error
          handling (mitt-driven UI events), and a shared token model (localStorage-backed session
          state) that works across independently deployed bundles. The net effect is a cohesive
          product surface where deep links, role-gated navigation, and multi-step workflows
          behave consistently — without requiring a single global runtime.
        </p>
      </section>

      <!-- ── Screenshot gallery ──────────────── -->
      <section class="ct__section">
        <h2 class="ct__section-title">Screenshots</h2>
        <div class="ct__gallery">
          <figure
            v-for="shot in screenshots"
            :key="shot.caption"
            class="ct__figure"
          >
            <div class="ct__figure-wrap">
              <img
                :src="shot.src"
                :alt="shot.alt"
                class="ct__figure-img"
                loading="lazy"
              />
            </div>
            <figcaption class="ct__figcaption">
              <span class="ct__figcaption-title">{{ shot.caption }}</span>
              <span class="ct__figcaption-desc">{{ shot.desc }}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- ── Tech stack ──────────────────────── -->
      <section class="ct__section">
        <h2 class="ct__section-title">Tech Stack &amp; Methods</h2>
        <div class="ct__tech-grid">
          <div
            v-for="group in techGroups"
            :key="group.category"
            class="ct__tech-group"
          >
            <h3 class="ct__tech-category">{{ group.category }}</h3>
            <ul class="ct__tech-list">
              <li
                v-for="item in group.items"
                :key="item"
                class="ct__tech-item"
              >{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import ctBooking    from '@images/carotrans/ct_project_booking-app-page.png'
import ctAgents     from '@images/carotrans/ct_project_agents-corner.jpg'
import ctDock       from '@images/carotrans/ct_project_dock-receipt-portal.jpg'
import ctContainers from '@images/carotrans/ct_project_containers-list.png'
import ctSailSched  from '@images/carotrans/ct_project_select-sail-sched.jpg'
import ctFcl        from '@images/carotrans/ct_project_fcl-form.png'
import ctLtl        from '@images/carotrans/ct_project_ltl-form.jpg'
import ctExporting  from '@images/carotrans/ct_project_exporting-form.png'
import ctPort       from '@images/carotrans/ct_project_origin-port-finder.jpg'
import ctPwReset    from '@images/carotrans/ct_project_pw-reset.jpg'

const tech = ['Vue 3', 'Vuex', 'Pinia', 'vue-router', 'Webpack', 'Kentico CMS']

const screenshots = [
  {
    src:     ctBooking,
    alt:     'CaroTrans booking app interface showing a multi-step container booking form',
    caption: 'Booking App',
    desc:    'Multi-step container booking workflow'
  },
  {
    src:     ctAgents,
    alt:     'Agents Corner portal showing a tabbed navigation and agent-specific tools',
    caption: 'Agents Corner',
    desc:    'URL-driven portal with full vue-router navigation'
  },
  {
    src:     ctDock,
    alt:     'Dock Receipt Portal showing a complex multi-field operations form',
    caption: 'Dock Receipt Portal',
    desc:    'Form-heavy operational workflow — the one Pinia-powered app in the suite'
  },
  {
    src:     ctContainers,
    alt:     'Container tracking list view showing status, container numbers, and filters',
    caption: 'Container Tracking',
    desc:    'Real-time container status list view'
  },
  {
    src:     ctSailSched,
    alt:     'Sailing schedule selection interface with route options and departure dates',
    caption: 'Sailing Schedules',
    desc:    'Searchable schedule selection interface'
  },
  {
    src:     ctFcl,
    alt:     'FCL rate request form with origin, destination, and cargo fields',
    caption: 'FCL Rate Request',
    desc:    'Full container load quoting form'
  },
  {
    src:     ctLtl,
    alt:     'LTL rate request form for less-than-load shipment quoting',
    caption: 'LTL Rate Request',
    desc:    'Less-than-load quoting form'
  },
  {
    src:     ctExporting,
    alt:     'Export documentation form with shipper, consignee, and cargo fields',
    caption: 'Export Documentation',
    desc:    'Multi-field exporting workflow'
  },
  {
    src:     ctPort,
    alt:     'Origin port finder showing a searchable list of departure ports',
    caption: 'Origin Port Finder',
    desc:    'Port search and selection tool'
  },
  {
    src:     ctPwReset,
    alt:     'CaroTrans branded login and password reset screen',
    caption: 'Session Management',
    desc:    'Branded login and password reset'
  }
]

const techGroups = [
  {
    category: 'Frontend',
    items: [
      'Vue 3 (Composition + Options API)',
      '~15 page-scoped micro-app instances',
      '<script setup> in 6 core workflow apps',
      'data-* contract mounting pattern'
    ]
  },
  {
    category: 'State Management',
    items: [
      'Vuex — 8 stores (cross-app standard)',
      'Pinia — Dock Receipts workflow',
      'localStorage-backed session tokens',
      'mitt for cross-app event coordination'
    ]
  },
  {
    category: 'Routing',
    items: [
      'vue-router in Agents Corner',
      'URL-driven deep-link workflows',
      'Role-gated navigation',
      'Multi-step workflow state management'
    ]
  },
  {
    category: 'Data & Resilience',
    items: [
      'axios with centralized interceptors',
      'Login-aware error handling (mitt events)',
      'AbortController request cancellation',
      'lodash debounce',
      'Environment-safe CMS editor guards'
    ]
  },
  {
    category: 'Build & Tooling',
    items: [
      'Webpack multi-entry (per brand/site)',
      'PugPlugin for CMS template output',
      'Shared SCSS tokens and mixins',
      'Per-project yarn dev scripts'
    ]
  },
  {
    category: 'Platform',
    items: [
      'Kentico CMS + Pug templates',
      'ASP.NET Core backend',
      'GA4 analytics via vue-gtag',
      'Multi-site / multi-brand deployment'
    ]
  }
]
</script>

<style lang="scss" scoped>
// ── Page shell ───────────────────────────────
.ct {
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 1px);
  padding-bottom: var(--space-3xl);
}

.ct__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-xl);
}

// ── Back link ─────────────────────────────────
.ct__back {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  margin-bottom: var(--space-2xl);
  transition: color var(--transition-fast), gap var(--transition-fast);

  svg {
    width: 15px;
    height: 15px;
    transition: transform var(--transition-fast);
    flex-shrink: 0;
  }

  &:hover {
    color: var(--color-accent-purple);
    gap: 0.6rem;

    svg {
      transform: translateX(-3px);
    }
  }
}

// ── Page header ───────────────────────────────
.ct__header {
  margin-bottom: var(--space-2xl);
}

.ct__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.ct__company {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent-green);
}

.ct__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.ct__tag {
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

.ct__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
  width: fit-content;
  line-height: 1.15;
}

.ct__title-accent {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-green));
  border-radius: 2px;
}

// ── Auth notice ───────────────────────────────
.ct__auth-notice {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent-purple);
  border-radius: 10px;
  padding: var(--space-lg) var(--space-xl);
  margin-bottom: var(--space-2xl);
  transition: background var(--transition-base), border-color var(--transition-base);

  p {
    font-size: 0.925rem;
    color: var(--color-text-secondary);
    line-height: 1.75;
    margin: 0;
  }
}

.ct__auth-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-accent-purple);
  margin-top: 2px;
}

// ── Sections ──────────────────────────────────
.ct__section {
  margin-bottom: var(--space-3xl);

  &:last-child { margin-bottom: 0; }
}

.ct__section-title {
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

// ── Architecture prose ────────────────────────
.ct__section > p {
  font-size: 0.975rem;
  color: var(--color-text-secondary);
  line-height: 1.85;
  margin-bottom: var(--space-md);

  &:last-child { margin-bottom: 0; }

  code {
    font-family: 'Menlo', 'Consolas', monospace;
    font-size: 0.875em;
    color: var(--color-accent-purple);
    background: var(--color-accent-purple-dim);
    border-radius: 4px;
    padding: 1px 5px;
  }
}

// ── Screenshot gallery ────────────────────────
.ct__gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.ct__figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-border);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);

    .ct__figure-img {
      transform: scale(1.03);
    }
  }
}

.ct__figure-wrap {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-bg-secondary);
}

.ct__figure-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.4s ease;
}

.ct__figcaption {
  padding: var(--space-sm) var(--space-md);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ct__figcaption-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.ct__figcaption-desc {
  font-size: 0.775rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
}

// ── Tech stack grid ───────────────────────────
.ct__tech-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.ct__tech-group {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: var(--space-md) var(--space-lg);
  transition: background var(--transition-base), border-color var(--transition-base);
}

.ct__tech-category {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent-purple);
  margin-bottom: var(--space-sm);
}

.ct__tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.ct__tech-item {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.5;

  &::before {
    content: '▸ ';
    color: var(--color-accent-green);
    font-size: 0.75rem;
  }
}
</style>
