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

const title = "Marius Nouchet's portfolio";
const description =
  "Discover my portfolio, filled with diverse content including blog posts that share my worldview, professional insights, and introspective thoughts.";

const route = useRoute();

useSeoMeta({
  ogTitle: title,
  ogDescription: description,
  ogUrl: useRuntimeConfig().public.BASE_URL + route.fullPath,
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: "summary",
});

useHead({
  title,
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
    },
  ],
});
</script>
