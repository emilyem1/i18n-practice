
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: '~/i18n.config.ts',
    locales: ['en', 'fr', 'es', 'ko'],
    defaultLocale: 'en'
  },
});

