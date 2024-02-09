<template>
  <div class="flex flex-col gap-2">
    <NuxtLink
      :to="props.to"
      class="relative aspect-video w-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-700 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-white after:opacity-0 after:transition-opacity after:content-[''] hover:after:opacity-5"
    >
      <img
        v-if="props.image"
        :src="props.image.src || props.image"
        :alt="props.image.alt"
        class="h-full w-full object-cover"
      />
    </NuxtLink>
    <div class="flex items-center justify-between">
      <NuxtLink :to="props.to">
        <span
          class="flex-1 text-neutral-400 transition-colors hover:text-neutral-100"
        >
          {{ props.title }}
        </span>
      </NuxtLink>
      <div class="flex items-center gap-2">
        <NuxtLink v-if="props.github" :to="props.github" target="_blank">
          <Icon
            name="akar-icons:github-fill"
            class="text-neutral-400 transition-colors hover:text-neutral-100"
          />
        </NuxtLink>
        <NuxtLink :to="props.external" :target="_blank">
          <Icon
            name="ph:arrow-square-out"
            class="text-neutral-400 transition-colors hover:text-neutral-100"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  image?: { src: string; alt: string } | string;
  to?: string;
  external?: string;
  github?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Project name",
  image: undefined,
  to: undefined,
  external: undefined,
  github: undefined,
});
</script>
