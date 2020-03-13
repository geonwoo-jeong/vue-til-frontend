import store from '@/store';

export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function(config) {
      config.headers.Authorization = store.state.token;
      return config;
    },
    function(error) {
      return error;
    },
  );

  return instance;
}
