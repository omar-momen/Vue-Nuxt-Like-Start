<script setup lang="ts">
import router from './router';

const loading = useLoadingStore();

// Handle initial app loading
router.isReady().then(() => {
  loading.setAppLoading(false);
});

// Handle page loading
router.beforeEach(() => {
  loading.setPageLoading(true);
});

router.afterEach(() => {
  loading.setPageLoading(false);
});
</script>

<template>
  <UApp>
    {{ $t('welcome') }}
    <LangSwitcher />
    <ThemeSwitcher />
    <AppLoading />
    <RouterView />
  </UApp>
</template>
