import { Suspense } from 'react';
import { Routes as RootRoutes, Route } from 'react-router-dom';

import { Loading } from '@components';
import NotFound from '@pages/NotFound';
import { convertToKebabCaseUrl } from '@utils/lib';

const COMPONENTS: Record<string, { [key: string]: unknown }> = import.meta.glob(
  [`/src/pages/**/*`],
  { eager: true }
);

const components = Object.keys(COMPONENTS)
  .filter((component) => !component.includes('components/'))
  .map((component) => {
    const path = component
      .replace(/\/src\/pages|index|\.tsx$/g, '')
      .replace(/\[\.{3}.+\]/, '*')
      .replace(/\[([a-zA-Z0-9_]+)\]/g, ':$1');

    return { path, element: COMPONENTS[component].default };
  });

export default function Routes() {
  return (
    <RootRoutes>
      {components.map(({ element, path }) => {
        const Element = element as any;

        return (
          <Route
            key={path}
            path={convertToKebabCaseUrl(path)}
            Component={() => (
              <Suspense fallback={<Loading isLoading />}>
                <Element />
              </Suspense>
            )}
          />
        );
      })}
      <Route element={<NotFound />} path="*" />
    </RootRoutes>
  );
}
