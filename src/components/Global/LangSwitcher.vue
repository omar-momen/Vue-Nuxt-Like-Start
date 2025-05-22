<template>
  <UButton @click="changeLang">
    {{ locale }}
  </UButton>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLang = () => {
  const newLang = locale.value === 'en' ? 'ar' : 'en';
  locale.value = newLang;
  // Save the selected language to localStorage
  localStorage.setItem('preferred-language', newLang);
  window.location.reload();
};

onMounted(() => {
  // Initialize language from localStorage or default to 'en'
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang) {
    locale.value = savedLang;
  }
});
</script>
