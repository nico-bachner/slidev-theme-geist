<template>
  <div class="note">
    <strong>Note:</strong>
    <slot />
  </div>
</template>

<style scoped>
.note {
  border: 0.5px solid var(--accents-2);
  border-radius: var(--geist-radius);
  max-width: max-content;
  padding: 3px 12px;
  @apply text-sm;
}
.note > strong {
  margin-right: 0.5rem;
}
</style>
