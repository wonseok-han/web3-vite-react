import { useNavigate } from 'react-router-dom';

import { useWagmiAccount } from '@libs/wagmi/hooks';
import WagmiConnect from '@libs/wagmi/samples/WagmiConnect';

import '@libs/wagmi/css/sample.scss';

const Home = () => {
  const navigate = useNavigate();
  const { isConnected } = useWagmiAccount();

  return (
    <>
      <WagmiConnect />

      <br />
      <br />
      {isConnected && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="button__default fit-width"
            onClick={() => navigate('/transaction-test')}
          >
            Next Page
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
