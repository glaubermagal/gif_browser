import api from '.';

const search = (params: any): Promise<any> => {
  return api.get('gif/search', {
    params: {
      ...params
    },
  });
};

const clearHistory = (): Promise<any> => {
  return api.get('gif/clear-history');
};

export default {
  search,
  clearHistory
};
