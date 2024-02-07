<template>
  <h2 :id="id" class="mb-6 mt-12 flex items-center gap-2 text-4xl font-bold">
    <a v-if="id && generate" :href="`#${id}`" class="hover:underline">
      <slot />
    </a>
    <slot v-else />
    <button
      v-if="id && generate"
      class="flex origin-left scale-75 items-center justify-center text-neutral-500 hover:text-neutral-400"
      @click="copyLink"
    >
      <Icon name="ph:link" />
    </button>
  </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h1);
const copyLink = () => {
  if (!props.id) return;
  navigator.clipboard.writeText(`${window.location.href}#${props.id}`);
};
</script>
