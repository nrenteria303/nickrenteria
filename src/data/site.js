/**
 * Shared site-wide data constants.
 * Import from here rather than duplicating arrays across components.
 */

// ─────────────────────────────────────────────
// Navigation
// Used by: AppHeader.vue, HomeView.vue
// ─────────────────────────────────────────────

export const NAV_LINKS = [
  { to: '/about',    label: 'About'    },
  { to: '/resume',   label: 'Résumé'   },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  }
]

// ─────────────────────────────────────────────
// Clients
// Canonical list sourced from résumé copy.
// Used by: AboutView.vue (notable clients tags),
//          ResumeView.vue (BlueModus representative clients)
// ─────────────────────────────────────────────

export const CLIENTS = [
  'Ball Corporation',
  'Texas Association of School Boards',
  'Options Clearing Corporation',
  'University of California San Diego (UCSD)',
  'American Medical Group Association',
  'Medical Group Management Association',
  'Patterson Companies',
  'PEMCO Mutual Insurance',
  'Retail Industry Leaders Association',
  'Lytx',
  'United Community Bank',
  'Advancial Credit Union',
  'Truliant Federal Credit Union',
  'Excite Credit Union',
  'Blue Rhino Propane',
  'Ferrellgas',
  'Roehl Transportation',
  'Sullair / Hitachi',
  'Mainfreight',
  'CaroTrans'
]

// ─────────────────────────────────────────────
// Skill groups — About page (summary view)
//
// Four high-level categories with grouped,
// human-readable entries. Intentionally more
// condensed than the résumé version — this is
// a scannable overview, not a full technical list.
//
// Used by: AboutView.vue
// ─────────────────────────────────────────────

export const SKILL_GROUPS_ABOUT = [
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

// ─────────────────────────────────────────────
// Skill groups — Résumé page (full detail view)
//
// Six granular categories with individual skill
// entries that mirror the résumé copy exactly.
// Intentionally more detailed than the About
// version — this is a complete technical inventory.
//
// Used by: ResumeView.vue
// ─────────────────────────────────────────────

export const SKILL_GROUPS_RESUME = [
  {
    category: 'Frontend',
    items: ['HTML', 'Pug', 'CSS', 'Sass / SCSS', 'Tailwind', 'Vanilla JS', 'React JS', 'Vue JS', 'Vuex', 'Pinia']
  },
  {
    category: 'Build & Tooling',
    items: ['Node.js', 'npm', 'Yarn', 'Vite', 'Git', 'CI Pipelines']
  },
  {
    category: 'Accessibility',
    items: ['WCAG 2.x', 'WAI-ARIA', 'Semantic HTML', 'Accessible Components']
  },
  {
    category: 'CMS & Backend',
    items: ['ASP.NET Core', 'Kentico 13', 'Kentico Xperience', 'Xperience by Kentico', 'C#', 'CSHTML', 'MVC', 'API Controllers']
  },
  {
    category: 'Collaboration',
    items: ['UX-to-Dev Translation', 'Client Technical Coordination', 'Solution Architecture Alignment']
  },
  {
    category: 'AI & Productivity',
    items: ['GitHub Copilot', 'AI Coding Agents', 'Workflow Automation']
  }
]
