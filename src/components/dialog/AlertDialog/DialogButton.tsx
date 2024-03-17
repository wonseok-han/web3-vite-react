import { Button } from '@components/button/Button';

/**
 * `BUTTON_ACTION_MAP`은 버튼 액션 유형을 나타내는 객체입니다.
 */
export const BUTTON_ACTION_MAP = {
  CLOSE: 'close', // 닫기
  CANCEL: 'cancel', // 취소
  CONFIRM: 'confirm', // 확인
  REGISTER: 'register', // 등록
  UPDATE: 'update', // 수정
  DELETE: 'delete', // 삭제
  CUSTOM: 'custom', // 사용자 정의
} as const;
/**
 * `ButtonActionType`은 버튼 액션 유형을 나타내는 타입입니다.
 * 이 타입은 BUTTON_ACTION_MAP 객체의 키를 사용하여 정의됩니다.
 */
export type ButtonActionType =
  (typeof BUTTON_ACTION_MAP)[keyof typeof BUTTON_ACTION_MAP];

/**
 * `DialogButtonProps`는 DialogButton 컴포넌트의 props를 나타내는 인터페이스입니다.
 *
 * @property {ButtonActionType} type - 버튼의 액션 유형입니다.
 * @property {string} customText - 버튼의 사용자 정의 텍스트입니다.
 * @property {Function} onClick - 버튼이 클릭될 때 호출되는 함수입니다.
 * @property {Function} onClose - 버튼이 닫힐 때 호출되는 함수입니다.
 */
type DialogButtonProps = {
  type: ButtonActionType;
  customText?: string;
  onClick?: () => void;
  onClose?: () => void;
};

/**
 * `DialogButton` 컴포넌트는 대화 상자의 버튼을 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props 객체입니다.
 * @param {ButtonActionType} props.type - 버튼의 액션 유형입니다.
 * @param {string} props.customText - 버튼의 사용자 정의 텍스트입니다.
 * @param {Function} props.onClick - 버튼이 클릭될 때 호출되는 함수입니다.
 * @param {Function} props.onClose - 버튼이 닫힐 때 호출되는 함수입니다.
 * @returns {JSX.Element} Button 요소를 렌더링합니다.
 */
const DialogButton = ({
  customText,
  onClick,
  onClose,
  type,
}: DialogButtonProps) => {
  const renderButton = (
    type: ButtonActionType,
    customText?: string,
    handlers?: {
      onClick?: DialogButtonProps['onClick'];
      onClose?: DialogButtonProps['onClose'];
    }
  ) => {
    switch (type) {
      case BUTTON_ACTION_MAP.CLOSE:
        return <Button onClick={handlers?.onClose}>닫기</Button>;
      case BUTTON_ACTION_MAP.CANCEL:
        return (
          <Button type="cancel" onClick={handlers?.onClose}>
            취소
          </Button>
        );
      case BUTTON_ACTION_MAP.CONFIRM:
        return <Button onClick={handlers?.onClick}>확인</Button>;
      case BUTTON_ACTION_MAP.REGISTER:
        return <Button onClick={handlers?.onClick}>등록</Button>;
      case BUTTON_ACTION_MAP.UPDATE:
        return <Button onClick={handlers?.onClick}>수정</Button>;
      case BUTTON_ACTION_MAP.DELETE:
        return <Button onClick={handlers?.onClick}>삭제</Button>;
      case BUTTON_ACTION_MAP.CUSTOM:
        return <Button onClick={handlers?.onClick}>{customText}</Button>;
      default:
        throw new Error('Invalid ButtonActionType');
    }
  };

  if (!type) {
    throw new Error(
      'When using DialogButton Component, type props are required.'
    );
  }
  return <>{type && renderButton(type, customText, { onClick, onClose })}</>;
};

export default DialogButton;
