// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Weather App",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
    },
  },

  modules: [],
  content: {},
  typescript: {
    strict: true,
  },
  css: ["@/assets/styles/main.scss", "v-calendar/dist/style.css"],
  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
  },
});
