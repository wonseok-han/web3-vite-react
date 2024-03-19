import { useQueries, type UseQueryOptions } from '@tanstack/react-query';
import { useEffect } from 'react';

type QueryItemType<Params, ReturnedData> = {
  queryKey: string;
  params: Params;
  queryFn: (params: Params) => Promise<ReturnedData>;
  options?: Omit<UseQueryOptions, 'queryFn' | 'queryKey'>;
};
type PromiseType<T extends Promise<any>> =
  T extends Promise<infer R> ? R : never;

export const useCustomQueries = <
  Queries extends Array<QueryItemType<any, any>>,
>({
  errorCallback,
  queries,
}: {
  queries: Queries;
  errorCallback?: (error?: unknown) => void;
}) => {
  const result = useQueries({
    queries: queries.map((query) => ({
      ...query.options,
      queryKey: [query.queryKey, query.params],
      queryFn: () => query.queryFn(query.params),
    })),
  });

  useEffect(() => {
    const errorItem = result.find((item) => item.isError || item.error);

    if (errorItem?.isError && errorItem?.error && errorCallback) {
      errorCallback(errorItem.error);
    }
  }, [result, errorCallback]);

  return result.map((item) => ({
    ...item,
    data: item.data as PromiseType<ReturnType<Queries[number]['queryFn']>>,
  }));
};
