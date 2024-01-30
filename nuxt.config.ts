// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/content",
    "nuxt-marquee",
    "@hypernym/nuxt-gsap",
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
