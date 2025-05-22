<template>
  <div class="theme-switcher">
    <UButton
      variant="ghost"
      aria-label="Theme-changer"
      @click="isDark = !isDark"
    >
      <UIcon
        v-if="!isDark"
        name="i-lucide-moon"
        class="text-primary"
      />
      <UIcon
        v-else
        name="i-lucide-sun"
        class="text-primary"
      />
    </UButton>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
const mode = useColorMode();

const isDark = computed({
  get() {
    return mode.value === 'dark';
  },
  set() {
    mode.value = mode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>
