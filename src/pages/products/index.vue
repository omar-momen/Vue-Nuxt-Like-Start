<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
const counter = ref(0);
const counter2 = ref(0);

import { getProducts as getProductsService } from '@/services';
const { data, execute } = getProductsService({
  immediate: false,
  transform: (response) => ({ products: response.data.products.slice(0, 2) }),
  watch: [counter],
});

const getProducts = async() => {
  await execute();
  // TODO: any logic here
};

watch([counter2], async() => {
  await getProducts();
});

onMounted(async() => {
  await getProducts();
});
</script>

<template>
  <div>
    <h1>Products Page</h1>

    <div
      v-for="product in data?.products"
      :key="product.id"
    >
      <router-link :to="`/products/${product.id}`">
        {{ product.id }}
      </router-link>
    </div>

    <UButton @click="counter++">
      Increment {{ counter }}
    </UButton>

    <UButton @click="counter2++">
      Increment {{ counter2 }}
    </UButton>
  </div>
</template>