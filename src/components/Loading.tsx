import type { PropsWithChildren } from 'react';

import '@assets/css/components/loading.scss';

type LoadingProps = {
  isLoading: boolean;
};

const Loading = ({ children, isLoading }: PropsWithChildren<LoadingProps>) => {
  return (
    <div className={`loading_backdrop ${isLoading ? 'active' : ''}`}>
      <div className="loading_bar">{children}</div>
    </div>
  );
};

export default Loading;
