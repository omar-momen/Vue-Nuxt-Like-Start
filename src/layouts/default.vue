<script setup lang="ts">
const loading = useLoadingStore();

const onPending = () => {
  loading.setPageLoading(true);
};
const onResolve = () => {
  loading.setPageLoading(false);
};
</script>

<template>
  <div class="default-layout">
    <header>
      <h1>Default Layout</h1>
      <AppNav />
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <Suspense
          @pending="onPending"
          @resolve="onResolve"
        >
          <div>
            <component :is="Component" />
          </div>
          <template #fallback>
            <PageLoading />
          </template>
        </Suspense>
      </router-view>
    </main>

    <AppFooter />
  </div>
</template>
