<template>
  <div>
    <h1 :id="$props.id" class="mb-6 mt-16 text-5xl font-bold">
      <slot />
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>();
</script>
