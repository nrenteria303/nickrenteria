<template>
  <div class="contact">
    <div class="contact__container">

      <!-- ── Page header ──────────────────────── -->
      <header class="contact__page-header">
        <div>
          <h1 class="contact__page-title">Contact</h1>
          <div class="contact__title-accent" aria-hidden="true"></div>
        </div>
        <p class="contact__intro">
          Have a project in mind, a question about my work, or just want to connect?
          Drop me a line — I read everything.
        </p>
      </header>

      <!-- ── Success state ────────────────────── -->
      <div v-if="formState === 'success'" class="contact__success" role="alert">
        <div class="contact__success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 class="contact__success-heading">Message sent!</h2>
        <p class="contact__success-body">
          Thanks for reaching out. I'll get back to you as soon as I can.
        </p>
        <button class="contact__success-reset" @click="resetForm">
          Send another message
        </button>
      </div>

      <!-- ── Form ─────────────────────────────── -->
      <form
        v-else
        ref="formEl"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="contact__form"
        novalidate
        @submit.prevent="handleSubmit"
      >
        <!-- Required for Netlify AJAX submission -->
        <input type="hidden" name="form-name" value="contact" />

        <!-- Honeypot: visible only to bots, hidden from real users -->
        <div class="contact__honeypot" aria-hidden="true">
          <label for="bot-field">Leave this empty:</label>
          <input
            id="bot-field"
            name="bot-field"
            type="text"
            tabindex="-1"
            autocomplete="off"
          />
        </div>

        <!-- Row 1: Name + Email -->
        <div class="contact__row">
          <div class="contact__field">
            <label class="contact__label" for="contact-name">
              Full Name
              <span class="contact__required-mark" aria-label="required">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              class="contact__input"
              :class="{ 'contact__input--error': errors.name }"
              v-model="form.name"
              placeholder="Jane Smith"
              autocomplete="name"
              :aria-describedby="errors.name ? 'error-name' : undefined"
              :aria-invalid="!!errors.name"
            />
            <span v-if="errors.name" id="error-name" class="contact__error" role="alert">
              {{ errors.name }}
            </span>
          </div>

          <div class="contact__field">
            <label class="contact__label" for="contact-email">
              Email Address
              <span class="contact__required-mark" aria-label="required">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              class="contact__input"
              :class="{ 'contact__input--error': errors.email }"
              v-model="form.email"
              placeholder="jane@example.com"
              autocomplete="email"
              :aria-describedby="errors.email ? 'error-email' : undefined"
              :aria-invalid="!!errors.email"
            />
            <span v-if="errors.email" id="error-email" class="contact__error" role="alert">
              {{ errors.email }}
            </span>
          </div>
        </div>

        <!-- Row 2: Website + Phone -->
        <div class="contact__row">
          <div class="contact__field">
            <label class="contact__label" for="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="url"
              class="contact__input"
              :class="{ 'contact__input--error': errors.website }"
              v-model="form.website"
              placeholder="https://yoursite.com"
              autocomplete="url"
              :aria-describedby="errors.website ? 'error-website' : undefined"
              :aria-invalid="!!errors.website"
            />
            <span v-if="errors.website" id="error-website" class="contact__error" role="alert">
              {{ errors.website }}
            </span>
          </div>

          <div class="contact__field">
            <label class="contact__label" for="contact-phone">Phone Number</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              class="contact__input"
              v-model="form.phone"
              placeholder="+1 (555) 555-5555"
              autocomplete="tel"
            />
          </div>
        </div>

        <!-- Reason for contact -->
        <div class="contact__field">
          <label class="contact__label" for="contact-reason">
            Reason for Contact
            <span class="contact__required-mark" aria-label="required">*</span>
          </label>
          <textarea
            id="contact-reason"
            name="reason"
            class="contact__input contact__textarea"
            :class="{ 'contact__input--error': errors.reason }"
            v-model="form.reason"
            placeholder="Tell me what's on your mind — a project, a question, an opportunity..."
            rows="6"
            :aria-describedby="errors.reason ? 'error-reason' : undefined"
            :aria-invalid="!!errors.reason"
          ></textarea>
          <span v-if="errors.reason" id="error-reason" class="contact__error" role="alert">
            {{ errors.reason }}
          </span>
        </div>

        <!-- Form footer: required note + submit -->
        <div class="contact__form-footer">
          <p class="contact__required-note">
            <span class="contact__required-mark" aria-hidden="true">*</span>
            Required fields
          </p>

          <div class="contact__submit-group">
            <!-- Submission error -->
            <p v-if="formState === 'error'" class="contact__submit-error" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Something went wrong. Please try again.
            </p>

            <button
              type="submit"
              class="contact__submit-btn btn"
              :class="{ 'contact__submit-btn--loading': formState === 'submitting' }"
              :disabled="formState === 'submitting'"
            >
              <svg v-if="formState === 'submitting'" class="contact__spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              {{ formState === 'submitting' ? 'Sending…' : 'Send Message' }}
            </button>
          </div>
        </div>

      </form>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formEl    = ref(null)
const formState = ref('idle') // 'idle' | 'submitting' | 'success' | 'error'

const form = reactive({
  name:    '',
  email:   '',
  website: '',
  phone:   '',
  reason:  ''
})

const errors = reactive({
  name:    '',
  email:   '',
  website: '',
  reason:  ''
})

// ── Validation ────────────────────────────────
function validate() {
  errors.name    = ''
  errors.email   = ''
  errors.website = ''
  errors.reason  = ''

  let valid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required.'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
    valid = false
  }

  if (form.website.trim()) {
    try {
      new URL(form.website.trim())
    } catch {
      errors.website = 'Please enter a valid URL (e.g., https://yoursite.com).'
      valid = false
    }
  }

  if (!form.reason.trim()) {
    errors.reason = 'Please tell me why you\'re reaching out.'
    valid = false
  }

  return valid
}

// ── Submission ────────────────────────────────
async function handleSubmit(e) {
  if (!validate()) return

  formState.value = 'submitting'

  try {
    const formData = new FormData(e.target)
    await fetch('/', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    new URLSearchParams(formData).toString()
    })
    formState.value = 'success'
  } catch {
    formState.value = 'error'
  }
}

function resetForm() {
  form.name    = ''
  form.email   = ''
  form.website = ''
  form.phone   = ''
  form.reason  = ''
  errors.name    = ''
  errors.email   = ''
  errors.website = ''
  errors.reason  = ''
  formState.value = 'idle'
}
</script>

<style lang="scss" scoped>
// ── Page shell ───────────────────────────────
.contact {
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 1px);
  padding-bottom: var(--space-3xl);
}

.contact__container {
  max-width: 760px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-xl);
}

// ── Page header ──────────────────────────────
.contact__page-header {
  margin-bottom: var(--space-2xl);
}

.contact__page-title {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
	width: fit-content;
}

.contact__title-accent {
  width: 56px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-green));
  border-radius: 2px;
  margin-bottom: 1.25rem;
}

.contact__intro {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 540px;
}

// ── Success state ────────────────────────────
.contact__success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-3xl) var(--space-xl);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  gap: var(--space-md);
}

.contact__success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--color-accent-green-dim);
  border: 1.5px solid rgba(16, 185, 129, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-green);

  svg {
    width: 28px;
    height: 28px;
  }
}

.contact__success-heading {
  font-size: 1.625rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.contact__success-body {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  max-width: 380px;
}

.contact__success-reset {
  margin-top: var(--space-sm);
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent-purple);
  background: transparent;
  border: 1.5px solid var(--color-border);
  border-radius: 8px;
  padding: 0.6rem 1.25rem;
  cursor: pointer;
  transition:
    border-color var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    border-color: var(--color-accent-purple);
  }
}

// ── Honeypot: visually hidden, not display:none
// (display:none can cause some bots to skip it)
.contact__honeypot {
  position: absolute;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}

// ── Form layout ──────────────────────────────
.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  position: relative;
}

.contact__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

// ── Labels ───────────────────────────────────
.contact__label {
  font-family: var(--font-display);
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
}

.contact__required-mark {
  color: var(--color-accent-purple);
  margin-left: 2px;
}

// ── Inputs ───────────────────────────────────
.contact__input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--color-bg-card);
  border: 1.5px solid var(--color-border-subtle);
  border-radius: 8px;
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.5;
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    background var(--transition-base);
  appearance: none;

  &::placeholder {
    color: var(--color-text-secondary);
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent-purple);
    box-shadow: 0 0 0 3px var(--color-accent-purple-dim);
  }

  &--error {
    border-color: #ef4444;

    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
    }
  }
}

.contact__textarea {
  resize: vertical;
  min-height: 140px;
}

// ── Inline error messages ────────────────────
.contact__error {
  font-size: 0.8rem;
  color: #ef4444;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '!';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    background: #ef4444;
    color: #ffffff;
    border-radius: 50%;
    font-size: 0.65rem;
    font-weight: 700;
    flex-shrink: 0;
  }
}

// ── Form footer ──────────────────────────────
.contact__form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-md);
  padding-top: var(--space-sm);
}

.contact__required-note {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 3px;
}

.contact__submit-group {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.contact__submit-error {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: #ef4444;
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
}

// ── Submit button ────────────────────────────
.contact__submit-btn {

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }

  &--loading {
    pointer-events: none;
  }
}

// ── Spinner animation ─────────────────────────
.contact__spinner {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>
