export const API_URLS = {
  getUser: () => `/v1/users/list`,
  getList: (params: { lab_id: string }) => `/v1/users/list/${params.lab_id}`,
};
