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
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxthq/studio",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/eslint",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
  },
  shadcn: {
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
});
