import { NuxtConfig } from "@nuxt/types"

const config: NuxtConfig = {
   ssr: false,

   head: {
      title: "devChallenges",
      titleTemplate: "devChallenges - %s",
      htmlAttrs: {
         lang: "en",
      },
      meta: [
         { charset: "utf-8" },
         { name: "viewport", content: "width=device-width, initial-scale=1" },
         { hid: "description", name: "description", content: "" },
         { name: "format-detection", content: "telephone=no" },
      ],
      link: [
         { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      ],
   },

   css: [],

   scss: [],

   plugins: [],

   components: true,

   buildModules: [
      "@nuxt/typescript-build",
      "@nuxtjs/google-fonts",
   ],

   modules: [],

   build: {},

   googleFonts: {
      families: {
         Poppins: [400, 500, 600],
         "Material+Icons": true,
         "Material+Icons+Outlined": true,
         "Material+Icons+Rounded": true,
         "Material+Icons+Sharp": true,
         "Material+Icons+Two+Tone": true,
      },
      display: "swap",
      useStylesheet: true,
   },
}

export default config
