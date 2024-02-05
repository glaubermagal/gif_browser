import api from '.';

const search = (query: string): Promise<any> => {
  return api.get('gif/search', {
    params: {
      q: query,
    },
  });
};

const history = (): Promise<any> => {
  return api.get('gif/history');
};

export default {
  search,
  history
};
