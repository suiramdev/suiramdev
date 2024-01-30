<template>
  <NuxtLink
    :to="props.to"
    class="relative flex min-h-10 items-center gap-2 overflow-hidden rounded-lg p-1.5 text-sm after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-white after:opacity-0 after:content-[''] hover:after:opacity-5"
    :class="{
      'after:opacity-5': props.to === $route.path || forceActive,
    }"
    :rel="isExternal(props.to) ? 'noopener noreferrer' : undefined"
  >
    <div
      v-if="$slots.icon"
      class="flex h-7 w-7 items-center justify-center rounded-md"
      :class="props.iconClass"
    >
      <slot name="icon" />
    </div>
    <slot />
    <Icon
      v-if="isExternal(props.to)"
      name="ph:arrow-square-out"
      class="ml-auto h-4 w-4"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  to?: string;
  iconClass?: string;
  forceActive?: boolean;
}

const isExternal = (url: string) => url.startsWith("http");

const props = withDefaults(defineProps<Props>(), {
  to: "",
  iconClass: "bg-neutral-800 text-neutral-300 fill-neutral-300",
  forceActive: false,
});
</script>
