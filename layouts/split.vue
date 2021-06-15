<template>
    <div class="split">
        <slot />
    </div>
</template>

<style>
.split {
    height: 100%;
    @apply grid grid-cols-2 gap-8;
}
</style>
