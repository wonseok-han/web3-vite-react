import type { ConnectionType } from '../connections';

import {
  getConnection,
  tryActivateConnector,
  tryDeactivateConnector,
} from '../connections';

export const Option = ({
  connectionType,
  isConnected,
  isEnabled,
  onActivate,
  onDeactivate,
}: {
  isEnabled: boolean;
  isConnected: boolean;
  connectionType: ConnectionType;
  onActivate: (connectionType: ConnectionType) => void;
  onDeactivate: (connectionType: null) => void;
}) => {
  const onClick = async () => {
    if (isConnected) {
      const deactivation = await tryDeactivateConnector(
        getConnection(connectionType).connector
      );
      // undefined means the deactivation failed
      if (deactivation === undefined) {
        return;
      }
      onDeactivate(deactivation);
      return;
    }

    const activation = await tryActivateConnector(
      getConnection(connectionType).connector
    );
    if (!activation) {
      return;
    }
    onActivate(activation);
    return;
  };

  return (
    <div>
      <button disabled={!isEnabled} onClick={onClick}>{`${
        isConnected ? 'Disconnect' : 'Connect'
      } ${connectionType}`}</button>
    </div>
  );
};
