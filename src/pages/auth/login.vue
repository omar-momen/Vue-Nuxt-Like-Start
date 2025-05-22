<route lang="yaml">
meta:
  layout: auth
</route>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const { redirect } = route.query;

const { login } = useAuthStore();

const loading = ref(false);
const error = ref<string | null>(null);

const submit = async() => {
  loading.value = true;
  error.value = null;

  try {
    const { error: loginError } = await login({
      username: 'emilys',
      password: 'emilyspass',
    });

    if (!loginError.value) {
      if (redirect) {
        await router.push(redirect as string);
      } else {
        await router.push('/');
      }
    } else {
      error.value = 'Login failed';
    }
  } catch (e) {
    console.error('Login error:', e);
    error.value = 'An unexpected error occurred';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <div
      v-if="error"
      class="error"
    >
      {{ error }}
    </div>
    <UButton
      :loading="loading"
      @click="submit"
    >
      Login
    </UButton>
  </div>
</template>

<style scoped>
.error {
  color: red;
  margin-bottom: 1rem;
}
</style>
