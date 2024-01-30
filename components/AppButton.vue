<template>
  <component
    :is="props.to ? NuxtLink : 'button'"
    :to="props.to"
    class="relative box-border flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full border-t px-4 py-2 text-lg font-medium"
    :class="{
      'border-indigo-400 bg-indigo-500 transition-all hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-400':
        props.variant === 'primary',
      'border-neutral-700 bg-neutral-800 transition-colors hover:border-neutral-600 hover:bg-neutral-700':
        props.variant === 'secondary',
    }"
    :target="props.to && isExternal(props.to) ? '_blank' : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

interface Props {
  variant?: "primary" | "secondary";
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  to: undefined,
});

const isExternal = (url: string) => url.startsWith("http");
</script>
