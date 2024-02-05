<template>
  <NuxtLink
    :to="props.to"
    class="flex flex-col gap-2"
    :target="props.to && isExternal(props.to) ? '_blank' : undefined"
  >
    <div
      class="relative aspect-video w-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-700 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-white after:opacity-0 after:transition-opacity after:content-[''] hover:after:opacity-5"
    >
      <span
        v-if="props.tag"
        class="absolute left-2 top-2 box-border rounded-full bg-neutral-800 px-3 py-1 font-hand text-xs text-neutral-100"
      >
        {{ props.tag }}
      </span>
      <img
        v-if="props.image"
        :src="props.image.src || props.image"
        :alt="props.image.alt"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="flex items-center justify-between">
      <span
        class="flex-1 text-neutral-400 transition-colors hover:text-neutral-100"
      >
        {{ props.title }}
      </span>
      <div class="flex items-center gap-2">
        <NuxtLink v-if="props.github" :to="props.github" target="_blank">
          <Icon
            name="akar-icons:github-fill"
            class="text-neutral-400 transition-colors hover:text-neutral-100"
          />
        </NuxtLink>
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
  title?: string;
  tag?: string;
  image?: { src: string; alt: string } | string;
  to?: string;
  github?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Project name",
  tag: undefined,
  image: undefined,
  to: undefined,
  github: undefined,
});

const isExternal = (url: string) => url.startsWith("http");
</script>
