import type { ConnectionType } from '../connections';

import { useResponseHandler } from '@contexts/ResponseProvider/ResponseHandlerContext';

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
  const { onResponseError } = useResponseHandler();

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
    ).catch((error) => onResponseError(error));
    if (!activation) {
      return;
    }
    onActivate(activation);
    return;
  };

  return (
    <div
      aria-disabled={!isEnabled}
      className="web3React__connect_item_box"
      onClick={onClick}
    >
      {connectionType}
    </div>
  );
};
