import { useAccount } from 'wagmi';

import Profile from './Profile';
import WalletOptions from './WalletOptions';

const Home = () => {
  const { isConnected } = useAccount();
  if (isConnected) return <Profile />;
  return <WalletOptions />;
};

export default Home;
