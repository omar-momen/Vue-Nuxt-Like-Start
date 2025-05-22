// create a plugin that will call Fetch User and set the user in the store
import { useAuthStore } from '@/stores/auth';

const setInitData = {
  install: async() => {
    const authStore = useAuthStore();

    // Check if we have a valid token and user data
    const isValid = await authStore.checkAuth();

    if (isValid && !authStore.user) {
      await authStore.fetchUser();
    }
  },
};

export default setInitData;
