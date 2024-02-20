import Tabs from '@components/Tabs';

import '@libs/wagmi/css/sample.scss';
import WagmiSample from './WagmiSample';

const TABS_DATA = [
  {
    id: 1,
    text: 'Wagmi',
    path: '/wagmi-sample',
    content: <WagmiSample />,
  },
  {
    id: 2,
    text: 'web3-react',
    path: '/web3-react',
    content: <div>web3-react sample</div>,
  },
];

const Home = () => {
  return (
    <>
      <Tabs config={TABS_DATA} />
    </>
  );
};

export default Home;
