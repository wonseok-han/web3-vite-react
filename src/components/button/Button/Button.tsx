import type { PropsWithChildren } from 'react';

import '@assets/css/components/button.scss';
import { classnames } from '@utils/lib';

/**
 * `BUTTON_TYPE_MAP`은 버튼 유형을 나타내는 객체입니다.
 */
const BUTTON_TYPE_MAP = {
  DEFAULT: 'default',
  CANCEL: 'cancel',
} as const;
/**
 * `ButtonType`은 버튼의 유형을 나타내는 타입입니다.
 * 이 타입은 BUTTON_TYPE_MAP 객체의 키를 사용하여 정의됩니다.
 */
type ButtonType = (typeof BUTTON_TYPE_MAP)[keyof typeof BUTTON_TYPE_MAP];

/**
 * `ButtonProps`는 Button 컴포넌트의 props를 나타내는 인터페이스입니다.
 *
 * @property {ButtonType} type - 버튼의 유형입니다. 기본값은 'default'입니다.
 * @property {Function} onClick - 버튼이 클릭될 때 호출되는 함수입니다.
 */
type ButtonProps = {
  type?: ButtonType;
  onClick?: () => void;
};

/**
 * `Button` 컴포넌트는 클릭 가능한 버튼 요소를 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props 객체입니다.
 * @param {ReactNode} props.children - Button 컴포넌트 내부에 렌더링되는 자식 요소입니다.
 * @param {ButtonType} props.type - 버튼의 유형입니다. 기본값은 'default'입니다.
 * @param {Function} props.onClick - 버튼이 클릭될 때 호출되는 함수입니다.
 * @returns {JSX.Element} Button 요소를 렌더링합니다.
 */
const Button = ({
  children,
  onClick,
  type = 'default',
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={classnames('button__container', type)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
