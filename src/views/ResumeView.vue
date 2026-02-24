<template>
  <div class="resume">
    <div class="resume__container">

      <!-- ── Page header ──────────────────────── -->
      <header class="resume__page-header">
        <div class="resume__page-header-text">
          <h1 class="resume__page-title">Résumé</h1>
          <div class="resume__title-accent" aria-hidden="true"></div>
        </div>
        <a
          href="/files/Nick_Renteria_Resume.pdf"
          class="resume__download-btn btn"
          download
          aria-label="Download résumé as PDF"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </a>
      </header>

      <!-- ── Two-column grid ──────────────────── -->
      <div class="resume__grid">

        <!-- ── Main content ──────────────────── -->
        <main class="resume__main">

          <!-- Summary -->
          <section class="resume__section">
            <h2 class="resume__section-title">Professional Summary</h2>
            <div class="resume__summary">
              <p>
                Front-End Architect and UX/UI Engineer with 5+ years of full-time experience
                delivering large-scale, production web platforms for enterprise and highly
                regulated clients. Specialized in modern frontend architecture (Vue.js ecosystem),
                accessibility-first development, and translating complex UX designs into scalable,
                performant builds.
              </p>
              <p>
                Known internally as a Vue.js specialist and technical lead, frequently owning
                entire frontend systems end-to-end and working across frontend and backend layers
                to reduce delivery overhead and increase team velocity.
              </p>
            </div>
          </section>

          <!-- Experience -->
          <section class="resume__section">
            <h2 class="resume__section-title">Experience</h2>

            <!-- BlueModus -->
            <article class="resume__job">
              <div class="resume__job-header">
                <h3 class="resume__company">BlueModus, Inc.</h3>
                <span class="resume__location-badge">Denver, CO &mdash; Remote</span>
              </div>

              <div class="resume__roles">
                <div class="resume__role">
                  <span class="resume__role-title">Senior UX/UI Developer</span>
                  <span class="resume__role-dates">Nov 2021 – Present</span>
                </div>
                <div class="resume__role resume__role--secondary">
                  <span class="resume__role-title">UX/UI Developer</span>
                  <span class="resume__role-dates">Nov 2020 – Nov 2021</span>
                </div>
              </div>

              <p class="resume__job-desc">
                Senior frontend engineer contributing to complex, CMS-driven web platforms for
                enterprise, financial, healthcare, education, and logistics clients. Promoted to
                Senior UX/UI Developer after one year based on technical depth, ownership, and
                cross-team impact.
              </p>

              <div class="resume__contributions">
                <h4 class="resume__sub-heading">Key Contributions &amp; Achievements</h4>
                <ul class="resume__list">
                  <li v-for="item in bluemodusBullets" :key="item" class="resume__list-item">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div class="resume__clients-block">
                <h4 class="resume__sub-heading">Representative Clients</h4>
                <div class="resume__client-tags">
                  <span
                    v-for="client in bluemodusClients"
                    :key="client"
                    class="resume__client-tag"
                  >{{ client }}</span>
                </div>
              </div>
            </article>

            <!-- Freelance -->
            <article class="resume__job">
              <div class="resume__job-header">
                <h3 class="resume__company">Freelance &amp; Contract Web Development</h3>
              </div>

              <div class="resume__roles">
                <div class="resume__role">
                  <span class="resume__role-title">Web Developer</span>
                  <span class="resume__role-dates">2019 – 2020</span>
                </div>
              </div>

              <p class="resume__job-desc">
                Delivered small-to-mid-sized websites for local businesses and short-term
                contracts, focusing on foundational frontend development, accessibility
                fundamentals, and client communication. Provided early exposure to end-to-end
                delivery across the full project lifecycle.
              </p>
            </article>

          </section>
        </main>

        <!-- ── Sidebar ────────────────────────── -->
        <aside class="resume__sidebar">

          <!-- Skills -->
          <section class="resume__section">
            <h2 class="resume__section-title">Core Skills</h2>

            <div
              v-for="group in skillGroups"
              :key="group.category"
              class="resume__skill-group"
            >
              <h3 class="resume__skill-category">{{ group.category }}</h3>
              <div class="resume__tags">
                <span
                  v-for="skill in group.items"
                  :key="skill"
                  class="resume__tag"
                >{{ skill }}</span>
              </div>
            </div>
          </section>

          <!-- Education -->
          <section class="resume__section">
            <h2 class="resume__section-title">Education</h2>

            <div class="resume__education-item">
              <div class="resume__edu-school">University of Colorado</div>
              <div class="resume__edu-degree">
                Bachelor of Arts in English<br />
                <span class="resume__edu-minor">Minor in Mathematics</span>
              </div>
              <div class="resume__edu-meta">
                <span class="resume__edu-honor">Summa Cum Laude</span>
                <span class="resume__edu-gpa">GPA: 3.86</span>
              </div>
            </div>

            <div class="resume__education-item resume__education-item--training">
              <div class="resume__edu-school">Additional Training</div>
              <ul class="resume__edu-training-list">
                <li>Front End Mentorship Program — studied under Lead UX/UI Developer at BlueModus</li>
                <li>Ongoing professional development via online coursework (frontend, JavaScript, Vue.js)</li>
              </ul>
            </div>
          </section>

          <!-- Additional notes -->
          <section class="resume__section">
            <h2 class="resume__section-title">Additional</h2>
            <ul class="resume__notes-list">
              <li class="resume__notes-item">
                Eligible for senior frontend, senior UX engineer, and frontend platform roles
              </li>
              <li class="resume__notes-item">
                Strong preference for accessibility-forward, design-driven, and technically
                rigorous teams
              </li>
            </ul>
          </section>

        </aside>

      </div>
    </div>
  </div>
</template>

<script setup>
import { SKILL_GROUPS_RESUME as skillGroups, CLIENTS as bluemodusClients } from '../data/site.js'

const bluemodusBullets = [
  'Architected and built the complete frontend for six distinct Texas Association of School Boards websites, delivering consistent UX patterns across multiple properties',
  'Designed and implemented the CaroWise application ecosystem using Vue.js — 8 interconnected apps enabling CaroTrans customers to view bookings, analyze shipping costs, and create global shipments',
  'Personally contributed to the development and launch of 35+ client websites spanning finance, healthcare, education, logistics, and enterprise sectors',
  'Led accessibility audits and remediation efforts that brought dozens of websites into WCAG 2.0 compliance using Lighthouse, WAVE, and semantic, ARIA-aware component patterns',
  'Acted as internal Vue.js subject-matter expert, regularly debugging complex state, reactivity, and performance issues across active client projects',
  'Owned and maintained frontend build pipelines (Node, Vite, npm/Yarn), troubleshooting and modernizing tooling to improve stability and developer experience',
  'Worked directly with UX designers and Solution Leads to align designs, content models, and technical constraints prior to implementation, reducing rework and delivery risk',
  'Collaborated with client IT and engineering teams to integrate third-party tools, APIs, and enterprise systems into frontend builds',
  'Expanded backend responsibilities within ASP.NET Core and Kentico ecosystems, enabling vertically sliced feature delivery that reduced cross-team handoff overhead',
  'Leveraged AI-assisted development tools (GitHub Copilot, coding agents) to accelerate implementation and reduce repetitive engineering effort'
]

</script>

<style lang="scss" scoped>
// ── Page shell ───────────────────────────────
.resume {
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 1px);
  padding-bottom: var(--space-3xl);
}

.resume__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-xl);
}

// ── Page header ──────────────────────────────
.resume__page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
  flex-wrap: wrap;
}

.resume__page-header-text {
  flex: 1;
}

.resume__page-title {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
	width: fit-content;
}

.resume__title-accent {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-green));
  border-radius: 2px;
}

// ── Grid ─────────────────────────────────────
.resume__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);

  @media (min-width: 960px) {
    grid-template-columns: 1fr 320px;
    gap: var(--space-3xl);
    align-items: start;
  }
}

// ── Sections ─────────────────────────────────
.resume__section {
  margin-bottom: var(--space-2xl);

  &:last-child { margin-bottom: 0; }
}

.resume__section-title {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-accent-purple);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}

// ── Summary ───────────────────────────────────
.resume__summary {
  p {
    font-size: 0.975rem;
    color: var(--color-text-secondary);
    line-height: 1.85;
    margin-bottom: var(--space-md);

    &:last-child { margin-bottom: 0; }
  }
}

// ── Job entries ───────────────────────────────
.resume__job {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: var(--space-2xl);

  // Vertical accent line
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    bottom: 0;
    width: 2px;
    border-radius: 2px;
    background: linear-gradient(
      to bottom,
      var(--color-accent-purple),
      var(--color-accent-green)
    );
  }

  &:last-child { margin-bottom: 0; }
}

.resume__job-header {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-bottom: var(--space-sm);
}

.resume__company {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.resume__location-badge {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  background: var(--color-accent-purple-dim);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 2px 8px;
}

// ── Roles ─────────────────────────────────────
.resume__roles {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: var(--space-md);
}

.resume__role {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
}

.resume__role-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-accent-green);
}

.resume__role--secondary .resume__role-title {
  color: var(--color-text-secondary);
}

.resume__role-dates {
  font-size: 0.8rem;
  color: var(--color-text-secondary);

  .resume__role--secondary & {
    color: var(--color-text-secondary);
    opacity: 0.7;
  }
}

// ── Job description ───────────────────────────
.resume__job-desc {
  font-size: 0.925rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-lg);
}

// ── Sub-headings ──────────────────────────────
.resume__sub-heading {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-sm);
}

// ── Contributions list ────────────────────────
.resume__contributions {
  margin-bottom: var(--space-lg);
}

.resume__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.resume__list-item {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--color-accent-green);
    font-size: 0.75rem;
    top: 0.15em;
  }
}

// ── Client tags ───────────────────────────────
.resume__client-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs) var(--space-sm);
  margin-top: var(--space-sm);
}

.resume__client-tag {
  font-size: 0.775rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  border-radius: 5px;
  padding: 3px 9px;
  transition: border-color var(--transition-fast), color var(--transition-fast);

  &:hover {
    border-color: var(--color-border);
    color: var(--color-text-primary);
  }
}

// ── Sidebar: skill groups ─────────────────────
.resume__skill-group {
  margin-bottom: var(--space-lg);

  &:last-child { margin-bottom: 0; }
}

.resume__skill-category {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xs);
}

.resume__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.resume__tag {
  font-size: 0.775rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  background: var(--color-accent-purple-dim);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  padding: 3px 9px;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: var(--color-bg-card);
    color: var(--color-text-primary);
  }
}

// ── Education ─────────────────────────────────
.resume__education-item {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: var(--space-md) var(--space-lg);
  margin-bottom: var(--space-md);
  transition: background var(--transition-base), border-color var(--transition-base);

  &:last-child { margin-bottom: 0; }

  &--training {
    background: transparent;
    border-color: var(--color-border-subtle);
  }
}

.resume__edu-school {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.resume__edu-degree {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: var(--space-sm);
}

.resume__edu-minor {
  font-style: italic;
}

.resume__edu-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.resume__edu-honor {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-accent-green);
  background: var(--color-accent-green-dim);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 4px;
  padding: 2px 8px;
}

.resume__edu-gpa {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.resume__edu-training-list {
  list-style: none;
  padding: 0;
  margin: var(--space-xs) 0 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    line-height: 1.55;
    padding-left: 1.1rem;
    position: relative;

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--color-accent-purple);
      font-size: 0.72rem;
      top: 0.15em;
    }
  }
}

// ── Additional notes ──────────────────────────
.resume__notes-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.resume__notes-item {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: var(--color-accent-purple);
    font-size: 0.65rem;
    top: 0.25em;
  }
}
</style>
