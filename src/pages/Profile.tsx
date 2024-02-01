import {
  useWagmiAccount,
  useWagmiDisconnect,
  useWagmiEnsAvatar,
  useWagmiEnsName,
} from '@libs/wagmi/hooks';

const Profile = () => {
  const { address } = useWagmiAccount();
  const { disconnect } = useWagmiDisconnect();
  const { data: ensName } = useWagmiEnsName({ address });
  const { data: ensAvatar } = useWagmiEnsAvatar({ name: ensName! });

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
};

export default Profile;
