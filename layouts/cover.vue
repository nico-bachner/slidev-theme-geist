<template>
    <div class="cover">
        <div class="self-center">
            <slot />
        </div>
    </div>
</template>

<style>
.cover {
    @apply flex h-full;
}

.cover h1 {
    @apply text-6xl;
}

.cover h1 + p {
    @apply text-2xl mt-2;
}
</style>
