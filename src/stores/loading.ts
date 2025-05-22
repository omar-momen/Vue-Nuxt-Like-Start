export const useLoadingStore = defineStore('loading', () => {
  const appLoading = ref(true);
  const setAppLoading = (value: boolean) => {
    appLoading.value = value;
  };

  const pageLoading = ref(true);
  const setPageLoading = (value: boolean) => {
    pageLoading.value = value;
  };

  const httpCallRunning = ref(false);
  const setHttpCallRunning = (value: boolean) => {
    httpCallRunning.value = value;
  };

  return { appLoading, setAppLoading, pageLoading, setPageLoading, httpCallRunning, setHttpCallRunning };
});
