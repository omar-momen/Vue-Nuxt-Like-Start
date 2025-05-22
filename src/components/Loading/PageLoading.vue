<template>
  <div
    v-if="loading.pageLoading"
    class="fixed inset-0 w-full h-full z-[9998] flex justify-center items-center"
  >
    <div class="absolute inset-0 bg-white/70 backdrop-blur-sm" />
    <div class="relative z-10">
      <div class="w-10 h-10 border-3 border-[#f3f3f3] border-t-[#3498db] rounded-full animate-spin" />
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = useLoadingStore();
</script>
