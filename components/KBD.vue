<script lang="ts">
export default {
    props: {
        command: {
            type: Boolean,
            default: false,
        },
        shift: {
            type: Boolean,
            default: false,
        },
        option: {
            type: Boolean,
            default: false,
        },
        control: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<template>
    <kbd>
        <span v-if="command">⌘</span>
        <span v-if="shift">⇧</span>
        <span v-if="option">⌥</span>
        <span v-if="control">⌃</span>
        <span>
            <slot />
        </span>
    </kbd>
</template>

<style scoped>
kbd {
    background-color: var(--accents-1);
    padding: 0.15rem;
    border: 1px solid var(--accents-2);
    border-radius: var(--geist-radius);
    @apply text-sm tracking-tight;
}

span {
    margin: 0 0.2rem;
}
</style>
