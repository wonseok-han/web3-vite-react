import '@assets/css/components/tabs.scss';
import type { PropsWithChildren, ReactNode } from 'react';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface TabsProps {
  config: Array<{
    id: number;
    text: string;
    path?: string;
    content: ReactNode;
  }>;
  isRoute?: boolean;
}

const Tabs = ({
  children,
  config,
  isRoute = false,
}: PropsWithChildren<TabsProps>) => {
  const [active, setActive] = useState<number>(config[0].id);
  const navigate = useNavigate();

  const handleTabClick = (changed: number, path: string) => {
    if (isRoute) {
      setActive(changed);
      navigate(path);
    } else {
      setActive(changed);
    }
  };

  useEffect(() => {
    if (isRoute) {
      navigate(config.find((item) => item.id === active)?.path || '');
    }
  }, [active, isRoute, config, navigate]);

  return (
    <div className="tabs__wrap">
      <div className="tabs__btn_wrap">
        {config.map((item) => (
          <div
            key={`tab-${item.id}`}
            className={`tabs__btn ${item.id === active ? 'active' : ''}`}
            onClick={() => handleTabClick(item.id, item.path || '')}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="tabs__contents_wrap">
        {isRoute
          ? children
          : config.map((item) => (
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
