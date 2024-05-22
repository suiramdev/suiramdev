<template>
  <NuxtLink class="group">
    <div class="aspect-video w-full overflow-hidden rounded-lg bg-muted">
      <img
        v-if="$props.image"
        :src="$props.image.src"
        :alt="$props.image.alt"
        class="h-full w-full object-cover transition-transform group-hover:scale-110"
      />
    </div>
    <div class="mt-2">
      <span class="text-xl font-semibold group-hover:underline">
        {{ title }}
      </span>
      <span class="mt-2 line-clamp-6 text-sm text-muted-foreground">
        {{ description }}
      </span>
      <div class="mt-4 space-x-2 text-sm">
        <span>9 min read</span>
        <span v-if="$props.publishedAt" class="text-muted-foreground">
          {{
            new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date($props.publishedAt))
          }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  publishedAt?: Date | string;
  image?: { src: string; alt: string };
}

defineProps<Props>();
</script>
