<template>
  <NuxtLink :to="props.to" class="flex flex-col gap-2">
    <div
      class="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/5 bg-white/5 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-white after:opacity-0 after:transition-opacity after:content-[''] hover:after:opacity-5"
    >
      <span
        v-if="props.tag"
        class="absolute left-2 top-2 box-border rounded-full bg-neutral-800 px-3 py-1 font-hand text-xs text-neutral-100"
      >
        {{ props.tag }}
      </span>
      <img
        v-if="props.src"
        :src="props.src"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="flex items-center justify-between">
      <span
        class="flex-1 text-neutral-400 transition-colors hover:text-neutral-100"
      >
        {{ props.name }}
      </span>
      <div class="flex items-center gap-2">
        <Icon
          name="ph:arrow-square-out"
          class="text-neutral-400 transition-colors hover:text-neutral-100"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  name?: string;
  tag?: string;
  src?: string;
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: "Project name",
  tag: undefined,
  src: undefined,
  to: "",
});
</script>
