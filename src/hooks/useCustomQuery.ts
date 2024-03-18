import type { UseQueryOptions } from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useCustomQuery = <Params, ReturnedData>({
  errorCallback,
  options,
  params,
  queryFn,
  queryKey,
}: {
  queryKey: string;
  params: ParamsType<Params>;
  queryFn: (params: ParamsType<Params>) => Promise<ReturnedData>;
  errorCallback?: (error?: unknown) => void;
  options?: Omit<UseQueryOptions, 'queryFn' | 'queryKey'>;
}) => {
  const query = useQuery({
    ...options,
    queryKey: [queryKey, params],
    queryFn: () => queryFn(params),
  });

  useEffect(() => {
    if (query.isError && query.error && errorCallback) {
      errorCallback(query.error);
    }
  }, [query.isError, query.error, errorCallback]);

  return { ...query, data: query.data as ReturnedData };
};
