import { createI18n } from 'vue-i18n';

import en from './locales/en';
import ar from './locales/ar';

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: localStorage.getItem('preferred-language') || 'ar',
  fallbackLocale: localStorage.getItem('preferred-language') || 'ar',
  messages: {
    en,
    ar,
  },
  globalInjection: true, // Enables global injection of $t function
  silentTranslationWarn: true, // Suppress warnings for missing translations
  silentFallbackWarn: true, // Suppress warnings for fallback translations
});

export default i18n;
