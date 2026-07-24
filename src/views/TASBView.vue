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
          <span class="proj__company">BlueModus × Texas Association of school Boards</span>
          <div class="proj__tags" aria-label="Technologies used">
            <span class="proj__tag" v-for="tag in tech" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <h1 class="proj__title">The TASB Website Ecosystem</h1>
        <div class="proj__title-accent" aria-hidden="true"></div>
      </header>

      <!-- ── Auth notice ─────────────────────── -->
      <div class="proj__auth-notice" role="note">
        <p>
          The sites and apps discussed on this page are under the control of TASB and BlueModus (my previous employer). The versions I worked on directly are still live, and the links here represent my development work based on what I have seen on each page as of July 2026. I will continue to monitor the sites and update/remove links as necessary to accurately represent to the best of my ability the work I did for TASB. If you have any questions about the work I did, please feel free to reach out to me directly.
        </p>
      </div>

      <!-- ── Architecture overview ───────────── -->
      <section class="proj__section">
        <h2 class="proj__section-title">Architecture Overview</h2>
        <p>
          When we first started working with TASB we had a large task ahead of us: to unify and modernize the front-end architecture of three separate TASB sites. I was responsible for the full frontend development and maintenance of these sites, which included engineering a large, responsive, and widely configurable component library and architecting the overall FE codebase to ensure the theming and styling remained consistent within any given site.
        </p>
        <p>
          The basic FE setup involved templating using Pug (which would then be converted into Handlebars templates for an ASP.NET Core BE), custom SCSS styling, and vanilla JS/jQuery for the UI/UX functionality. But since we were building three separate websites (at least at first), we needed a way to share generic styling across the three sites while also allowing for site-specific overrides. To accomplish this, I created a shared SCSS library that contained the base styles and variables, which could be imported into each site's SCSS partial files. This allowed us to maintain a consistent look and feel across all three sites while still allowing for customization where necessary.
        </p>
        <p>
          This lead to the launch of the first three websites we built for TASB: <a href="https://www.firstpublic.com/" target="_blank" rel="noopener noreferrer">First Public</a>, <a href="https://www.tasbbenefits.com/" target="_blank" rel="noopener noreferrer">TASB Benefits Cooperative</a>, and <a href="https://www.lonestarinvestmentpool.com/" target="_blank" rel="noopener noreferrer">Lone Star Investment Pool</a>.
        </p>
      </section>

      <!-- ── The Scope Grows ───────────── -->
      <section class="proj__section">
        <h2 class="proj__section-title">The Scope Grows</h2>
        <p>
          TASB was thrilled with the work we did on the first three sites, and they had a new set of challenges for us: five new sites, including their main TASB.org site, and a new search application that would allow users to search across all of the resources, articles, and events on any given TASB site. I was again responsible for the full frontend development and maintenance of these new sites, which included broadening the configurability of the component library to meet new design requirements, and a whole host of new components specific to these sites. 
        </p>
        <p>
          The search app would be Vue-based, and would also require configurability depending on the site it was being used on and the type of content being searched. The app was configurable based on data attributes present on the initializing HTML element, which allowed us to use the same app across multiple sites and content types. The also needed to be able to handle a large amount of data and provide a fast and responsive user experience, which required careful consideration of the app's architecture and performance optimizations.
        </p>
        <p>
          Throughout the process, I worked closely with designers, back-end developers, the TASB technical team, and other stakeholders to ensure that the final product met the needs of TASB and their users. The end result was a set of five new sites and a powerful search application that provided a seamless user experience across all of TASB's resources.
        </p>
        <ul class="proj__site-list">
          <li v-for="site in siteList" :key="site.id">
            <a :href="site.url" target="_blank" rel="noopener noreferrer">{{ site.name }}</a>
          </li>
        </ul>
      </section>

      <!-- ── Additional work for TASB ───────────── -->
      <section class="proj__section">
        <h2 class="proj__section-title">Additional Work for TASB</h2>
        <p>
          As time went on, there were additional projects that I worked on for TASB, including an interactive timeline component for TASB.org and TASB RMF (<a href='https://www.tasb.org/about/history' target='_blank' rel='noopener noreferrer'>TASB.org History Timeline</a> and <a href='https://www.tasbrmf.org/about/rmf-history' target='_blank' rel='noopener noreferrer'>TASB RMF History Timeline</a>), and much simpler Vue apps like the Worker's compensation Organization Lookup app on this page: <a href='https://www.tasbrmf.org/claims/report-a-claim' target='_blank' rel='noopener noreferrer'>https://www.tasbrmf.org/claims/report-a-claim</a>. TASB was a client that I'm enormously grateful I got the chance to work for with BlueModus, and I learned a lot about building large-scale front-end architectures and working with a team of talented designers and developers.
        </p>
      </section>

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

const tech = ['Pug and Handlebars markup templating', 'Custom SCSS', 'Vanilla JS/jQuery', 'Vue', 'Kontent CMS']

const techGroups = [
  {
    category: 'Overall Frontend',
    items: [
      'Pug/Handlebars markup templating',
      'Custom SCSS styling and shared design tokens',
      'Vanilla JS/jQuery for UI/UX interactions',
      'Custom FE compiler for Pug templates and SCSS styling',
    ]
  },
  {
    category: 'Search App',
    items: [
      'Vue 2 w/ Options API',
      'Vuex store modules for cross-app state management',
      'Configurable setup via data-* attributes',
      'View toggling',
      'Search filtering and sorting',
      'Search result pagination',
    ]
  },
  {
    category: 'Platform',
    items: [
      'Kontent Headless CMS',
      'Handlebars templates',
      'Custom CMS field types and editors',
      'ASP.NET Core backend',
      'Multi-site / multi-brand deployment'
    ]
  }
]

const siteList = [
  {
    name: 'TASB.org',
    id: 'tasb-org',
    url: 'https://www.tasb.org/'
  },
  {
    name: 'TASB.org Site Search',
    id: 'tasb-org-search',
    url: 'https://www.tasb.org/search'
  },
  {
    name: 'TASB.org News & Insights Search',
    id: 'tasb-org-news-insights',
    url: 'https://www.tasb.org/news-insights'
  },
  {
    name: 'TASB.org Resources Search',
    id: 'tasb-org-resources',
    url: 'https://www.tasb.org/resources'
  },
  {
    name: 'TASB.org Training & Events Search',
    id: 'tasb-org-training-events',
    url: 'https://www.tasb.org/training-events'
  },
  {
    name: 'TASB Risk Management Fund',
    id: 'tasb-risk-management-fund',
    url: 'https://www.tasbrmf.org/'
  },
  {
    name: 'TASB RMF Site Search',
    id: 'tasb-rmf-site-search',
    url: 'https://www.tasbrmf.org/search'
  },
  {
    name: 'TASB RMF Training & Events Search',
    id: 'tasb-rmf-training-events',
    url: 'https://www.tasbrmf.org/training-events'
  },
  {
    name: 'TASB RMF News & Insights Search',
    id: 'tasb-rmf-insights',
    url: 'https://www.tasbrmf.org/resources/insights'
  },
  {
    name: 'TASB RMF Law eSource Search',
    id: 'tasb-rmf-esource',
    url: 'https://www.tasb.org/resources/esource'
  },
  {
    name: 'TASB Community Colleges',
    id: 'tasb-community-colleges',
    url: 'https://www.tasbcolleges.org/'
  },
  {
    name: 'BuyBoard.com',
    id: 'buyboard-com',
    url: 'https://www.buyboard.com'
  },
  {
    name: 'BoardBook.com',
    id: 'boardbook-com',
    url: 'https://www.boardbook.com'
  }
]
</script>
