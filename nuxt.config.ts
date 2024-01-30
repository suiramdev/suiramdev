// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || "https://localhost:3000",
    },
  },
  css: ["~/assets/styles/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxthq/studio",
    "nuxt-marquee",
    "@hypernym/nuxt-gsap",
    "nuxt-gtag",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
