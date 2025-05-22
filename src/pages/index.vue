<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
</script>
<template>
  <div>
    <pre class="my-10">
     User: {{ authStore.user }}
   </pre>
  </div>
</template>
