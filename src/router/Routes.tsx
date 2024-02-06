import { Suspense } from 'react';
import { Routes as RootRoutes, Route } from 'react-router-dom';

import { convertToKebabCaseUrl } from '@libs/utils';

const COMPONENTS: Record<string, { [key: string]: unknown }> = import.meta.glob(
  [`/src/pages/**/*`],
  { eager: true }
);

const components = Object.keys(COMPONENTS).map((component) => {
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
              <Suspense fallback={<div>loading...</div>}>
                <Element />
              </Suspense>
            )}
          />
        );
      })}
    </RootRoutes>
  );
}
