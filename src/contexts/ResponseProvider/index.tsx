import type { AxiosError } from 'axios';

import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
import { type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAlert } from '@contexts/DialogProvider/AlertContext';
import WagmiCustomProvider from '@libs/wagmi/components/WagmiCustomProvider';

import { ResponseHandlerProvider } from './ResponseHandlerContext';

type QueryClientProviderProps = {
  children: ReactElement;
};

/**
 * React Query의 QueryClient를 설정하고 애플리케이션에 제공하는 컴포넌트입니다.
 *
 * 이 컴포넌트는 React Query의 기본 설정을 정의하고, 전역적으로 사용할 수 있도록 QueryClient 인스턴스를 제공합니다.
 * 또한, API 요청의 에러 핸들링 로직을 구현하여, 네트워크 오류나 서버 응답 오류 시 사용자에게 알림을 제공합니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 props 객체입니다.
 * @param {ReactNode} props.children - QueryClientProvider 내부에 렌더링될 자식 컴포넌트들입니다.
 * @returns {ReactNode} QueryClientProvider와 자식 컴포넌트들을 렌더링하는 JSX를 반환합니다.
 *
 * @example
 * <QueryClientProvider>
 *   <App />
 * </QueryClientProvider>
 */
const ResponseProvider = ({ children }: QueryClientProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: false,
        // throwOnError: true,
      },
      mutations: {
        // throwOnError: true,
      },
    },
    queryCache: new QueryCache({
      onError: handleResponseError,
    }),
    mutationCache: new MutationCache({
      onError: handleResponseError,
    }),
  });

  const navigate = useNavigate();
  const alert = useAlert();

  /**
   * 응답 오류를 처리하는 `공통` 함수입니다.
   *
   * @async
   * @function handleResponseError
   * @param {unknown} error - 처리할 오류 객체입니다.
   * @returns {Promise<void>} - 오류 처리가 완료된 후에는 반환하지 않습니다.
   */
  async function handleResponseError(error: unknown) {
    const axiosError = error as AxiosError;

    const status = axiosError?.response?.status;

    if (status === 401) {
      await alert(
        {
          title: <p>사용자 정보가 만료되었습니다. 다시 로그인해주세요.</p>,
        },
        async () => {
          await new Promise((resolve) => {
            resolve('success');
          }).then(() => {
            // TODO: 로그아웃
            navigate('/');
          });
        }
      );
    } else if (status === 403) {
      await alert(
        {
          title: <p>사용자 정보가 일치하지 않습니다. 다시 로그인해주세요.</p>,
        },
        async () => {
          await new Promise((resolve) => {
            resolve('success');
          }).then(() => {
            // TODO: 로그아웃
            navigate('/');
          });
        }
      );
    } else {
      await alert({
        title: <p>{axiosError.code}</p>,
        content: <p>{axiosError.message}</p>,
      });
    }
  }

  return (
    <WagmiCustomProvider queryClient={queryClient}>
      <ResponseHandlerProvider onResponseError={handleResponseError}>
        {children}
      </ResponseHandlerProvider>
    </WagmiCustomProvider>
  );
};

export default ResponseProvider;
