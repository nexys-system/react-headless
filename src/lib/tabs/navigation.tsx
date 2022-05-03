import React from 'react';
import { Route } from 'react-router-dom';

import * as T from '../../lib/tabs/type';

const isSelected = (path: string, pathname: string) => pathname.includes(path);

const isSelectedFromArray = (
  pathname: string,
  paths: T.TabNavigationProps[],
  tabPrefix: string
): string => {
  const f = paths.filter(x => isSelected(tabPrefix + (x.path || ''), pathname));

  if (f.length) {
    return f[0].path || '';
  }

  return '';
};

const Navigation =
  (
    Ul: ({ children }: T.UlProps) => JSX.Element,
    Li: (p: T.LiNavigation) => JSX.Element
  ) =>
  ({ tabs, pathPrefix = '' }: T.NavigationProps) => {
    const getPath = (path: string) => pathPrefix + path;
    const { pathname } = window.location;

    // sorting tabs so that nesting tabs work
    const sortedTabs = [...tabs].sort(
      (a, b) => (b.path || '').length - (a.path || '').length
    );

    // returns selecred path
    const selectedPath = isSelectedFromArray(pathname, sortedTabs, pathPrefix);

    return (
      <>
        <Ul>
          {tabs.map(({ label, path = '' }, i) => {
            const pathComplete = getPath(path);

            return (
              <Li
                key={i}
                path={pathComplete}
                isSelected={path === selectedPath}
                label={label}
              />
            );
          })}
        </Ul>

        {sortedTabs.map(({ path = '', Component }, i) => {
          const pathComplete = getPath(path);

          return <Route key={i} path={pathComplete} element={<Component />} />;
        })}
      </>
    );
  };

export default Navigation;
