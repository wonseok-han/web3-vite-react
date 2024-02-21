import '@assets/css/components/tabs.scss';

import type { PropsWithChildren, ReactNode } from 'react';

import { useState } from 'react';

interface TabsProps {
  config: Array<{
    id: number;
    text: string;
    path?: string;
    content: ReactNode;
  }>;
}

const Tabs = ({ config }: PropsWithChildren<TabsProps>) => {
  const [active, setActive] = useState<number>(config[0].id);

  const handleTabClick = (changed: number) => {
    setActive(changed);
  };

  return (
    <div className="tabs__wrap">
      <div className="tabs__btn_wrap">
        {config.map((item) => (
          <div
            key={`tab-${item.id}`}
            className={`tabs__btn ${item.id === active ? 'active' : ''}`}
            onClick={() => handleTabClick(item.id)}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="tabs__contents_wrap">
        {config.map((item) => (
          <div
            key={`tab-content-${item.id}`}
            className={`tabs__content ${item.id === active ? 'active' : ''}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
