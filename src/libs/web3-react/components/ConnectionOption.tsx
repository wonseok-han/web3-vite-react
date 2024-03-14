import { Option } from './Option';
import {
  ConnectionType,
  getHasMetaMaskExtensionInstalled,
} from '../connections';
import { METAMASK_URL } from '../constants';

interface ConnectionOptionsProps {
  activeConnectionType: ConnectionType | null;
  isConnectionActive: boolean;
  onActivate: (connectionType: ConnectionType) => void;
  onDeactivate: (connectionType: null) => void;
}

export const ConnectionOptions = ({
  activeConnectionType,
  isConnectionActive,
  onActivate,
  onDeactivate,
}: ConnectionOptionsProps) => {
  function getOptions(isActive: boolean) {
    const hasMetaMaskExtension = getHasMetaMaskExtensionInstalled();

    const isNoOptionActive =
      !isActive || (isActive && activeConnectionType === null);

    const metaMaskOption = hasMetaMaskExtension ? (
      <Option
        connectionType={ConnectionType.INJECTED}
        isConnected={activeConnectionType === ConnectionType.INJECTED}
        isEnabled={
          isNoOptionActive || activeConnectionType === ConnectionType.INJECTED
        }
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    ) : (
      <a href={METAMASK_URL}>
        <button>Install Metamask</button>
      </a>
    );

    const coinbaseWalletOption = (
      <Option
        connectionType={ConnectionType.COINBASE_WALLET}
        isConnected={activeConnectionType === ConnectionType.COINBASE_WALLET}
        isEnabled={
          isNoOptionActive ||
          activeConnectionType === ConnectionType.COINBASE_WALLET
        }
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    );

    const walletConnectOption = (
      <Option
        connectionType={ConnectionType.WALLET_CONNECT}
        isConnected={activeConnectionType === ConnectionType.WALLET_CONNECT}
        isEnabled={
          isNoOptionActive ||
          activeConnectionType === ConnectionType.WALLET_CONNECT
        }
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    );

    return (
      <>
        {metaMaskOption}
        {coinbaseWalletOption}
        {walletConnectOption}
      </>
    );
  }

  return <div className="connectors">{getOptions(isConnectionActive)}</div>;
};
