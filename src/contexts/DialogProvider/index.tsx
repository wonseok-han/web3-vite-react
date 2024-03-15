import type { PropsWithChildren } from 'react';

import { AlertProvider } from './AlertContext';

/**
 * `DialogProvider` 컴포넌트는 `AlertProvider`를 자식 컴포넌트에게 제공합니다.
 * 이 컴포넌트는 Alert 기능을 사용할 수 있도록 `AlertProvider`를 자식 컴포넌트에게 전달합니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props 객체입니다.
 * @param {ReactNode} props.children - DialogProvider 내부에 렌더링되는 자식 컴포넌트입니다.
 * @returns {JSX.Element} AlertProvider와 그의 자식 컴포넌트를 렌더링합니다.
 */
const DialogProvider = ({ children }: PropsWithChildren) => {
  return <AlertProvider>{children}</AlertProvider>;
};

export default DialogProvider;
