import type { ButtonActionType } from './DialogButton';

import DialogButton from './DialogButton';

/**
 * `DialogActionsProps`는 DialogActions 컴포넌트의 props를 나타내는 인터페이스입니다.
 *
 * @property {Array<ButtonActionType>} modules - 대화 상자의 버튼 액션 유형입니다.
 * @property {string} customText - 대화 상자의 사용자 정의 텍스트입니다.
 * @property {Function} onClick - 대화 상자의 버튼이 클릭될 때 호출되는 함수입니다.
 * @property {Function} onClose - 대화 상자가 닫힐 때 호출되는 함수입니다.
 */
export type DialogActionsProps = {
  modules: Array<ButtonActionType>;
  customText?: string;
  onClick?: () => void;
  onClose?: () => void;
};

/**
 * `DialogActions` 컴포넌트는 대화 상자의 액션 버튼들을 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props 객체입니다.
 * @param {Array<ButtonActionType>} props.modules - 대화 상자의 버튼 액션 유형입니다.
 * @param {string} props.customText - 대화 상자의 사용자 정의 텍스트입니다.
 * @param {Function} props.onClick - 대화 상자의 버튼이 클릭될 때 호출되는 함수입니다.
 * @param {Function} props.onClose - 대화 상자가 닫힐 때 호출되는 함수입니다.
 * @returns {JSX.Element} DialogButton 요소들을 렌더링합니다.
 */
const DialogActions = ({
  customText,
  modules,
  onClick,
  onClose,
}: DialogActionsProps) => {
  return (
    <>
      {modules?.map((module, index) => (
        <DialogButton
          key={`dialog-button-${index}`}
          customText={customText}
          type={module}
          onClick={onClick}
          onClose={onClose}
        />
      ))}
    </>
  );
};

export default DialogActions;
