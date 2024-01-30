<template>
  <NuxtLink
    class="flex flex-col gap-4 rounded-xl border border-white/5 p-4 transition-colors hover:bg-white/5"
  >
    <img
      v-if="props.cover"
      :src="props.cover"
      class="aspect-video w-full rounded-3xl border border-white/5 bg-white/5 object-cover"
    />
    <span class="flex-1 text-lg font-medium">{{ props.title }}</span>
    <span class="font-hand text-neutral-400">
      {{
        new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(props.publishedAt))
      }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  publishedAt: Date | string;
  cover?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Understanding Web3, the Future of the Internet",
  publishedAt: "October 15, 2021",
  cover: undefined,
});
</script>
