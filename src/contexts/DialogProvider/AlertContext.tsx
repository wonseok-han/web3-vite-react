import type { ButtonActionType } from '@components/dialog/AlertDialog/DialogButton';
import type { PropsWithChildren, ReactNode } from 'react';

import { createContext, useContext, useState, useCallback } from 'react';

import '@assets/css/components/dialog.scss';
import { AlertDialog } from '@components/dialog/AlertDialog';
import { classnames } from '@utils/lib';

/**
 * useAlert에 적용될 타입입니다.
 *
 * @property {ReactNode} title - 대화 상자의 제목입니다.
 * @property {ReactNode} content - 대화 상자의 내용입니다.
 * @property {Array<ButtonActionType>} modules - 대화 상자의 버튼 액션 유형입니다.
 * @property {string} customText - 대화 상자의 사용자 정의 텍스트입니다.
 */
type AlertDialogType = {
  title?: ReactNode;
  content?: ReactNode;
  modules?: Array<ButtonActionType>;
  customText?: string;
  isBackdropClose?: boolean;
};

/**
 * AlertContext의 기본 타입입니다.
 *
 * @property {AlertDialogType} args - AlertDialogType에 정의된 항목들의 객체입니다.
 * @property {Function} callBack - 대화상자가 닫힌 후 호출될 콜백 함수입니다.
 */
type AlertFunctionType = (
  args: AlertDialogType,
  callBack?: () => void
) => Promise<boolean>;

const AlertContext = createContext<AlertFunctionType | undefined>(undefined);

/**
 * `AlertProvider` 컴포넌트는 AlertContext를 제공합니다.
 * 이 컴포넌트는 자식 컴포넌트에게 Alert을 요청하는 기능을 제공하며, 활성화된 모든 Alert을 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props 객체입니다.
 * @param {ReactNode} props.children - AlertProvider 내부에 렌더링되는 자식 컴포넌트입니다.
 * @returns {JSX.Element} AlertContext.Provider와 활성화된 모든 Alert을 렌더링합니다.
 */
export const AlertProvider = ({ children }: PropsWithChildren) => {
  const [alerts, setAlerts] = useState<
    Array<
      AlertDialogType & { callBack?: () => void } & {
        resolve: (value: boolean) => void;
      }
    >
  >([]);

  /**
   *  새로운 Alert을 요청하는 함수입니다.
   *
   * @param {Object} options - Alert에 대한 옵션 객체입니다.
   * @param {Function} callBack - Alert에서 resolve 후 호출될 콜백 함수입니다.
   * @returns {Promise<boolean>} Alert이 resolve되면 Promise를 반환합니다.
   */
  const requestAlert = useCallback<AlertFunctionType>((options, callBack) => {
    return new Promise<boolean>((resolve) => {
      setAlerts((prev) => [...prev, { ...options, resolve, callBack }]);
    });
  }, []);

  const renderAlerts = () => {
    return (
      <div
        className={classnames(
          'dialog__background',
          alerts.length > 0 ? 'active' : ''
        )}
      >
        {alerts.map((alert, index) => (
          <AlertDialog
            key={`alert-${index}`}
            content={alert.content}
            customText={alert.customText}
            isBackdropClose={alert.isBackdropClose}
            isOpen={true}
            modules={alert.modules}
            title={alert.title}
            onClick={() => {
              alert?.callBack?.();
              resolveAlert(index, true);
            }}
            onClose={() => {
              alert?.callBack?.();
              resolveAlert(index, true);
            }}
          />
        ))}
      </div>
    );
  };

  /**
   * 현재 활성화된 모든 Alert에 대해 렌더링합니다.
   *
   * @returns {JSX.Element} 렌더링된 알림 요소들을 반환합니다.
   */
  const resolveAlert = (index: number, value: boolean) => {
    alerts[index].resolve(value);
    setAlerts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <AlertContext.Provider value={requestAlert}>
      {children}
      {renderAlerts()}
    </AlertContext.Provider>
  );
};

/**
 * `useAlert`는 AlertContext를 사용하는 커스텀 훅입니다.
 * 이 훅은 AlertProvider 내부에서만 사용해야 합니다.
 *
 * @returns {Function} Alert을 요청하는 함수를 반환합니다.
 * @throws {Error} AlertProvider 외부에서 사용될 경우 에러를 발생시킵니다.
 *
 * @example
 * const isOk = await alert({
 *   title: 'Alert',
 *   content: '이 작업을 수행하시겠습니까?',
 *   modules: ['custom'],
 *   customText: '커스텀버튼',
 * });
 *
 * if (isOk) {
 *   console.log('alert callback...');
 * }
 */
export const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};
