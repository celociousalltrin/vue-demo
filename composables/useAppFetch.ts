export const useAppFetch: typeof useFetch = (request, opts?) => {
  const config = useRuntimeConfig();
  console.log("🚀 ~ config:", config);

  return useFetch(request, { baseURL: config.public.baseURL, ...opts });
};
