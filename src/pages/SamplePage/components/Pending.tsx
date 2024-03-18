import type { PropsWithChildren } from 'react';

import { CustomErrorBoundary } from '@components';

const PendComponent = ({ onReset }: { onReset?: () => void }) => {
  return (
    <div>
      <div>pending...</div>
      <button onClick={() => onReset?.()}>재시도</button>
    </div>
  );
};

const Pending = ({ children }: PropsWithChildren) => {
  return (
    <CustomErrorBoundary ErrorComponent={PendComponent}>
      {children}
    </CustomErrorBoundary>
  );
};

export default Pending;
