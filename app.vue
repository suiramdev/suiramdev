<template>
  <div>
    <NavigationBar />
    <div class="px-4 md:px-16">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const title = "Marius Nouchet's portfolio";
const description =
  "Discover my portfolio, filled with diverse content including blog posts that share my worldview, professional insights, and introspective thoughts.";

const route = useRoute();

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: useRuntimeConfig().public.baseURL + route.fullPath,
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: "summary",
});

useHead({
  titleTemplate: "%s - suiramdev",
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
