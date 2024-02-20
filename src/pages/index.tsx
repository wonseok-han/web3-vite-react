import type { ChangeEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import { useWagmiAccount } from '@libs/wagmi/hooks';
import WagmiConnect from '@libs/wagmi/samples/WagmiConnect';

import '@libs/wagmi/css/sample.scss';

const Home = () => {
  const navigate = useNavigate();
  const { isConnected } = useWagmiAccount();

  const handleNaviChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    console.log(value);
    if (value) {
      navigate(value);
    }
  };

  return (
    <>
      {isConnected && (
        <div>
          <label htmlFor="page-selector">페이지이동 👉 </label>
          <select id="page-selector" onChange={handleNaviChange}>
            <option value="">선택</option>
            <option value="/sign-message-test">SignMessageTest</option>
            <option value="/transaction-test">TransactionTest</option>
          </select>
        </div>
      )}
      <br />

      <WagmiConnect />
    </>
  );
};

export default Home;
