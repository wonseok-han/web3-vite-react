import '@assets/css/components/tabs.scss';

import {
  useState,
  type PropsWithChildren,
  useEffect,
  useCallback,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type RouteTabsProps = {
  config: Array<{
    id: number;
    text: string;
    path?: string;
  }>;
};

const RouteTabs = ({ children, config }: PropsWithChildren<RouteTabsProps>) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState<number>(
    config.find((item) => item?.path === location.pathname)?.id || config[0].id
  );

  const handleTabClick = useCallback(
    (changed: number, path: string) => {
      setActive(changed);
      navigate(path);
    },
    [navigate]
  );

  useEffect(() => {
    if (location.pathname === '/') {
      handleTabClick(config[0].id, config[0].path || '');
    }
  }, [location, config, handleTabClick]);

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
      <div className="tabs__contents_wrap">{children}</div>
    </div>
  );
};

export default RouteTabs;
