<script setup lang="ts">
const router = useRouter();
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();

const logout = async() => {
  await authStore.logout();
  router.push('/auth/login');
};
</script>

<template>
  <div>
    <nav>
      <div>
        <router-link to="/">
          Home
        </router-link> |
        <router-link to="/products">
          Products
        </router-link> |
        <router-link to="/auth/login">
          Login
        </router-link>
      </div>

      <UButton
        v-if="authStore.user"
        color="primary"
        @click="logout"
      >
        Logout
      </UButton>
    </nav>
  </div>
</template>