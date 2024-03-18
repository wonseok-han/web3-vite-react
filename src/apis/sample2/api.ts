import { axiosFetch } from '@utils/common/axios';
import { API_URLS } from 'apis/sample/urls';

type UserType = {
  user_id: number;
  user_nm: string;
};

export const API = {
  getUsers: async (): Promise<UserType> => {
    const response = await axiosFetch<UserType>(API_URLS.getUser());
    return response.data;
  },
  getLabUsers: async (
    params: ParamsType<{ lab_id: string }>
  ): Promise<UserType> => {
    const response = await axiosFetch<UserType>(API_URLS.getList(params));
    return response.data;
  },
};
