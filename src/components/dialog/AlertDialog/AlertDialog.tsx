import type { ButtonActionType } from './DialogButton';
import type { ReactNode } from 'react';

import { DialogActions } from '.';

/**
 * `AlertDialogProps`는 AlertDialog 컴포넌트의 props를 나타내는 인터페이스입니다.
 *
 * @property {ReactNode} title - 대화 상자의 제목입니다.
 * @property {ReactNode} content - 대화 상자의 내용입니다.
 * @property {Array<ButtonActionType>} modules - 대화 상자의 버튼 액션 유형입니다.
 * @property {string} customText - 대화 상자의 사용자 정의 텍스트입니다.
 * @property {boolean} isBackdropClose - 배경 클릭 시 대화 상자를 닫을지 여부를 결정합니다. 기본값은 true입니다.
 * @property {Function} onClick - 대화 상자의 버튼이 클릭될 때 호출되는 함수입니다.
 * @property {Function} onClose - 대화 상자가 닫힐 때 호출되는 함수입니다.
 */
type AlertDialogProps = {
  title?: ReactNode;
  content?: ReactNode;
  modules?: Array<ButtonActionType>;
  customText?: string;
  isBackdropClose?: boolean;
  onClick?: () => void;
  onClose?: () => void;
};

/**
 * `AlertDialog` 컴포넌트는 알림 대화 상자를 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props 객체입니다.
 * @param {ReactNode} props.title - 대화 상자의 제목입니다.
 * @param {ReactNode} props.content - 대화 상자의 내용입니다.
 * @param {Array<ButtonActionType>} props.modules - 대화 상자의 버튼 액션 유형입니다.
 * @param {string} props.customText - 대화 상자의 사용자 정의 텍스트입니다.
 * @param {boolean} props.isBackdropClose - 배경 클릭 시 대화 상자를 닫을지 여부를 결정합니다. 기본값은 true입니다.
 * @param {Function} props.onClick - 대화 상자의 버튼이 클릭될 때 호출되는 함수입니다.
 * @param {Function} props.onClose - 대화 상자가 닫힐 때 호출되는 함수입니다.
 * @returns {JSX.Element} AlertDialog 요소를 렌더링합니다.
 */
const AlertDialog = ({
  content,
  customText,
  isBackdropClose = true,
  modules = ['confirm'],
  onClick,
  onClose,
  title,
}: AlertDialogProps) => {
  return (
    <div
      className="dialog__container"
      onClick={() => isBackdropClose && onClose?.()}
    >
      <div className="dialog__header">{title}</div>
      <div className="dialog__content">{content}</div>
      <div className="dialog__actions">
        <DialogActions
          customText={customText}
          modules={modules}
          onClick={onClick}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default AlertDialog;
