import '@assets/css/components/errorPage.scss';

interface ErrorPageProps {
  onClick?: () => void;
  error?: any;
}

const ErrorPage = ({ error, onClick }: ErrorPageProps) => {
  return (
    <div className="errorPage__wrap">
      <div className="errorPage__title">
        <label>Error:</label>
        <p>{error?.message}</p>
      </div>
      <div className="errorPage__content">
        <p>A failure has occurred. please try again.</p>
        <button
          className="button__default"
          onClick={() => {
            onClick?.();
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
