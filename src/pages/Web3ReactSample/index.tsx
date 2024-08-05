import type { ChangeEvent } from 'react';

import { useWeb3React } from '@web3-react/core';
import { useNavigate } from 'react-router-dom';

import Web3React from '@libs/web3-react/samples/Web3React';

const Web3ReactSample = () => {
  const navigate = useNavigate();
  const { isActive } = useWeb3React();

  const handleNaviChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    console.log(value);
    if (value) {
      navigate(value);
    }
  };

  return (
    <>
      {isActive && (
        <div>
          <label htmlFor="page-selector">페이지이동 👉 </label>
          <select id="page-selector" onChange={handleNaviChange}>
            <option value="">선택</option>
            <option value="/web3-react-sample/sign-message-test">
              SignMessageTest
            </option>
          </select>
        </div>
      )}
      <br />

      <Web3React />
    </>
  );
};

export default Web3ReactSample;
