import type { ReactElement } from 'react';

import { createContext, useContext } from 'react';

type ResponseHandlerProps = {
  onResponseError: (error: unknown) => void;
};

const ResponseHandlerContext = createContext({} as ResponseHandlerProps);

/**
 * API 응답 오류를 처리하는 Context Provider 컴포넌트입니다.
 *
 * 이 컴포넌트는 `onResponseError` 함수를 컨텍스트를 통해 하위 컴포넌트에 제공합니다.
 * 하위 컴포넌트는 `children` 프로퍼티를 통해 자식 컴포넌트로 전달되어 `onResponseError` 함수에 접근할 수 있습니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 props 객체입니다.
 * @param {ReactElement} props.children - 컨텍스트 프로바이더 내부에 렌더링될 자식 컴포넌트들입니다.
 * @param {(error: unknown) => void} props.onResponseError - 응답 오류를 처리할 함수입니다.
 * @returns {ReactElement} 컨텍스트 프로바이더와 자식 컴포넌트들을 렌더링하는 JSX를 반환합니다.
 *
 * @example
 * import { useResponseHandler } from '@context/ResponseHandler';
 * const { onResponseError } = useResponseHandler();
 * onResponseError(error);
 */
export const ResponseHandlerProvider = ({
  children,
  onResponseError,
}: {
  children: ReactElement;
  onResponseError: (error: unknown) => void;
}) => {
  return (
    <ResponseHandlerContext.Provider value={{ onResponseError }}>
      {children}
    </ResponseHandlerContext.Provider>
  );
};

export const useResponseHandler = () => useContext(ResponseHandlerContext);
