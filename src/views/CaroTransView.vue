<template>
  <div class="proj">
    <div class="proj__container">

      <!-- ── Back link ───────────────────────── -->
      <router-link to="/projects" class="proj__back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Projects
      </router-link>

      <!-- ── Page header ─────────────────────── -->
      <header class="proj__header">
        <div class="proj__meta">
          <span class="proj__company">BlueModus × CaroTrans</span>
          <div class="proj__tags" aria-label="Technologies used">
            <span class="proj__tag" v-for="tag in tech" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <h1 class="proj__title">Authenticated Shipping Center</h1>
        <div class="proj__title-accent" aria-hidden="true"></div>
      </header>

      <!-- ── Auth notice ─────────────────────── -->
      <div class="proj__auth-notice" role="note">
        <svg class="proj__auth-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
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
      <section class="proj__section">
        <h2 class="proj__section-title">Architecture Overview</h2>
        <p>
          I architected a production "authenticated shipping center" as a suite of Vue micro-apps
          embedded into a Kentico/Pug CMS site. Rather than forcing a monolithic SPA, the UI is
          delivered as ~8 page-scoped Vue islands (7 root <code>App.vue</code> apps), each
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
      <section class="proj__section">
        <h2 class="proj__section-title">Screenshots</h2>
        <div class="proj__gallery">
          <figure
            v-for="shot in screenshots"
            :key="shot.caption"
            class="proj__figure"
          >
            <div class="proj__figure-wrap">
              <a
                href="#"
                class="proj__figure-link"
                @click.prevent="openModal(shot, $event)"
                :aria-label="`Open full-size image: ${shot.caption}`"
              >
                <img
                  :src="shot.src"
                  :alt="shot.alt"
                  class="proj__figure-img"
                  loading="lazy"
                />
              </a>
            </div>
            <figcaption class="proj__figcaption">
              <span class="proj__figcaption-title">{{ shot.caption }}</span>
              <span class="proj__figcaption-desc">{{ shot.desc }}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <ImageModal
        v-if="isModalOpen"
        :src="modalImage.src"
        :alt="modalImage.alt"
        @close="closeModal"
      />

      <!-- ── Tech stack ──────────────────────── -->
      <section class="proj__section">
        <h2 class="proj__section-title">Tech Stack &amp; Methods</h2>
        <div class="proj__tech-grid">
          <div
            v-for="group in techGroups"
            :key="group.category"
            class="proj__tech-group"
          >
            <h3 class="proj__tech-category">{{ group.category }}</h3>
            <ul class="proj__tech-list">
              <li
                v-for="item in group.items"
                :key="item"
                class="proj__tech-item"
              >{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import '../assets/styles/_internalProjectPage.scss'

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
import ImageModal    from '../components/ImageModal.vue'

const tech = ['Vue 2', 'Vuex', 'Vue Options API', 'vue-router', 'Webpack', 'Kentico CMS', 'Google Maps API']

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
      'Vue 2 w/ Options API',
      '~8 page-scoped micro-app instances',
      '<script setup> in 6 core workflow apps',
      'data-* contract mounting pattern'
    ]
  },
  {
    category: 'State Management',
    items: [
      'Vuex — 8 stores (cross-app standard)',
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
      'Kentico CMS + CSHTML templates',
      'ASP.NET Core backend',
      'GA4 analytics via vue-gtag',
      'Multi-site / multi-brand deployment'
    ]
  }
]

import { nextTick, ref } from 'vue'

const modalImage = ref({ src: '', alt: '' })
const isModalOpen = ref(false)
const lastThumbnail = ref(null)

function openModal (shot, event) {
  lastThumbnail.value = event.currentTarget instanceof HTMLElement ? event.currentTarget : null
  modalImage.value = { src: shot.src, alt: shot.alt }
  isModalOpen.value = true
}

function closeModal () {
  isModalOpen.value = false
  nextTick(() => {
    lastThumbnail.value?.focus()
  })
}
</script>
