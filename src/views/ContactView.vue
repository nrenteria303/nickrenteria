<template>
  <div class="placeholder-page">
    <div class="placeholder-page__content">
      <p class="placeholder-page__eyebrow">Coming soon</p>
      <h1 class="placeholder-page__title">Contact</h1>
      <p class="placeholder-page__body">
        A contact form is on its way. For now, feel free to reach out
        via LinkedIn or email.
      </p>
      <div class="placeholder-page__actions">
        <router-link to="/" class="placeholder-page__btn placeholder-page__btn--ghost">
          ← Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.placeholder-page {
  min-height: 100vh;
  padding-top: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: var(--space-xl);

  &__content {
    text-align: center;
    max-width: 520px;
  }

  &__eyebrow {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-accent-green);
    margin-bottom: var(--space-sm);
  }

  &__title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    background: linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--space-md);
  }

  &__body {
    font-size: 1.05rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-xl);
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-family: var(--font-display);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition:
      background var(--transition-fast),
      color var(--transition-fast),
      border-color var(--transition-fast);

    &--ghost {
      background: transparent;
      border: 1.5px solid var(--color-border);
      color: var(--color-text-secondary);

      &:hover {
        border-color: var(--color-accent-purple);
        color: var(--color-accent-purple);
      }
    }
  }
}
</style>
