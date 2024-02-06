// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: "https://suiram.dev",
      posthogPublicKey: "",
      posthogHost: "https://app.posthog.com",
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
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
