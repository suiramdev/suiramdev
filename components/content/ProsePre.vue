<template>
  <div class="my-6 flex flex-col gap-2">
    <span class="text-xs font-light text-neutral-400">
      {{ language }}
    </span>
    <pre
      class="flex overflow-x-scroll rounded-lg border border-neutral-700 bg-neutral-800 p-5"
      :class="props.class"
    >
      <slot />
    </pre>
  </div>
</template>

<script setup lang="ts">
interface Props {
  code: string;
  language?: string;
  filename?: string;
  highlights?: number[];
  meta?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  code: "",
  language: null,
  filename: null,
  highlights: () => [],
  meta: null,
  class: null,
});
</script>

<style>
pre code .line {
  display: block;
}
</style>
