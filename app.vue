<template>
  <div>
    <SpeedInsights />
    <AppSideBar />
    <div class="md:ml-60">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
