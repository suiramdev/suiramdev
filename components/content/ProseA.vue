<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="text-indigo-400 underline hover:text-indigo-500"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
});
</script>
