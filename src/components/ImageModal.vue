<template>
  <div
    class="image-modal-overlay"
    role="dialog"
    aria-modal="true"
    aria-label="Image preview"
    @click.self="close"
    @keydown="onKeyDown"
  >
    <div class="image-modal-panel">
      <button
        ref="closeButton"
        type="button"
        class="image-modal-close"
        @click="close"
        @keydown="trapTab"
        aria-label="Close full-size image"
      >
        <span aria-hidden="true">×</span>
      </button>

      <div class="image-modal-content">
        <img
          class="image-modal-img"
          :src="src"
          :alt="alt"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true }
})

const emit = defineEmits(['close'])
const closeButton = ref(null)

function close () {
  emit('close')
}

function onKeyDown (event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    event.preventDefault()
    close()
  }
}

function trapTab (event) {
  if (event.key !== 'Tab') {
    return
  }

  event.preventDefault()
  nextTick(() => {
    closeButton.value?.focus()
  })
}

onMounted(() => {
  nextTick(() => {
    closeButton.value?.focus()
  })
})
</script>

<style scoped>
.image-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 12, 24, 0.88);
  padding: 1.5rem;
}

.image-modal-panel {
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
}

.image-modal-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 999px;
  background: rgba(13, 13, 30, 0.7);
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
}

.image-modal-close span {
    display: block;
    line-height: 1;
}

.image-modal-close:hover,
.image-modal-close:focus {
  background: rgb(13, 13, 30);
  outline: none;
  /* transform: scale(1.02); */
  box-shadow: 0 0 0 3px rgba(13, 13, 30, 0.14);
}

.image-modal-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 95vw;
  max-height: 95vh;
}

.image-modal-img {
  max-width: 95vw;
  max-height: 95vh;
  width: auto;
  height: auto;
  display: block;
  border-radius: 0.75rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}
</style>
