import '@assets/css/components/errorPage.scss';

/**
 * `ErrorPageProps`는 ErrorPage 컴포넌트의 props를 나타내는 인터페이스입니다.
 *
 * @property {Function} onReset - "다시 시도" 버튼이 클릭될 때 호출되는 함수입니다.
 * @property {any} error - 오류 객체입니다. 이 객체는 status와 message 속성을 가질 수 있습니다.
 */
type ErrorPageProps = {
  onReset?: () => void;
  error?: any;
};

/**
 * `ErrorPage` 컴포넌트는 오류 페이지를 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props 객체입니다.
 * @param {Function} props.onClick - "다시 시도" 버튼이 클릭될 때 호출되는 함수입니다.
 * @param {any} props.error - 오류 객체입니다. 이 객체는 status와 message 속성을 가질 수 있습니다.
 * @returns {JSX.Element} 오류 페이지 요소를 렌더링합니다.
 */
const ErrorPage = ({ error, onReset }: ErrorPageProps) => {
  return (
    <div className="errorPage__wrap">
      <h1>Error Page</h1>
      <div className="errorPage__status">
        {!error?.status && <p>{error.status}</p>}
      </div>
      <div className="errorPage__title">
        <p>{`Error: ${error?.message}`}</p>
      </div>
      <div className="errorPage__content">
        <p>A failure has occurred. please try again.</p>
        <button
          className="button__container"
          onClick={() => {
            onReset?.();
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
