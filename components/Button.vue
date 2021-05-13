<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  color: var(--geist-background);
  background-color: var(--geist-foreground);
  border: 1px solid var(--geist-foreground);
  border-radius: var(--geist-radius);
  padding: 6px 12px;
  @apply text-sm;
}
button:hover {
  color: var(--geist-foreground);
  background-color: var(--geist-background);
}
</style>
