import { useNavigate } from 'react-router-dom';

import WagmiTransaction from '@libs/wagmi/samples/WagmiTransaction';

const TransactionTest = () => {
  const navigate = useNavigate();

  return (
    <>
      <WagmiTransaction />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          className="button__default fit-width"
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default TransactionTest;
