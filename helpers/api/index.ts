interface Options extends RequestInit {
  params?: Record<string, any>;
}

const fetchApi = async (path: string, options: Options = {}) => {
  const { params, ...otherOptions } = options;

  const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}${queryString}`, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      ...otherOptions,
    });

    const isJson = response.headers.get('content-type')?.includes('application/json');

    return isJson ? response.json() : response;
  } catch (err) {
    console.error('[fetchApi]', { path, queryString, err });
  }

  return;
};

const createApi = () => ({
  get: (path: string, options?: Options) => fetchApi(path, { ...options, method: 'GET' }),
  post: (path: string, options?: Options) => fetchApi(path, { ...options, method: 'POST' }),
  put: (path: string, options?: Options) => fetchApi(path, { ...options, method: 'PUT' }),
  delete: (path: string, options?: Options) => fetchApi(path, { ...options, method: 'DELETE' }),
});

export default createApi();
