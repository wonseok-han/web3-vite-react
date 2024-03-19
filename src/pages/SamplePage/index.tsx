import { Tabs } from '@components';

import AlertSample from './components/AlertSample';
import ApiSample from './components/ApiSample';
import Pending from './components/Pending';

const TAB_CONFIG = [
  {
    id: 1,
    text: 'Alert',
    content: <AlertSample />,
  },
  {
    id: 2,
    text: 'Api',
    content: (
      <Pending>
        <ApiSample />
      </Pending>
    ),
  },
];

const SamplePage = () => {
  return (
    <div>
      <Tabs config={TAB_CONFIG} />
    </div>
  );
};

export default SamplePage;
