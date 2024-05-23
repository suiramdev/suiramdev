<template>
  <h2 :id="$props.id" class="group mb-6 mt-16 text-3xl font-bold">
    <slot />
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span
            v-if="$props.id && generate"
            class="ml-2 select-none text-muted-foreground opacity-0 hover:cursor-pointer group-hover:opacity-100"
          >
            #
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy link</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h2);
</script>
