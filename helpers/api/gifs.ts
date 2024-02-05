import api from '.';

const search = (params: any): Promise<any> => {
  return api.get('gif/search', {
    params: {
      ...params
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
