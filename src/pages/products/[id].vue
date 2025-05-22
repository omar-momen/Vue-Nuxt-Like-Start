<script setup lang="ts">
const { id } = useRoute().params;

import type { Product } from '@/types';

const { data } = await axiosFetch<Product>(`/products/${id}`);
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
