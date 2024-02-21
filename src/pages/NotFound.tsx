import { HomeButton } from '@components';

const NotFound = () => {
  return (
    <div className="errorPage__wrap">
      <div className="errorPage__title">
        <label>Error:</label>
        <p>404 Not Found</p>
      </div>
      <div className="errorPage__content">
        <p>Page is not exists. please try again.</p>
        <HomeButton />
      </div>
    </div>
  );
};

export default NotFound;
