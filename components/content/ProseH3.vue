<template>
  <h3 :id="$props.id" class="group mb-2 mt-8 text-2xl font-semibold">
    <slot />
    <TooltipProvider>
      <Tooltip v-if="$props.id && generate">
        <TooltipTrigger>
          <span
            class="ml-2 select-none text-muted-foreground opacity-0 hover:cursor-pointer hover:opacity-100 group-hover:opacity-100"
          >
            #
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy link</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </h3>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h3);
</script>
