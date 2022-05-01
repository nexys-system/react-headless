import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as T from '../../lib/tabs/type';

const isSelected = (path: string, pathname: string) => pathname.includes(path);

const Navigation =
  (
    Ul: ({ children }: T.UlProps) => JSX.Element,
    Li: (p: T.LiNavigation) => JSX.Element
  ) =>
  ({
    tabs,
    pathPrefix = ''
  }: // pathname = window.location.pathname
  {
    tabs: T.TabNavigation[];
    pathPrefix?: string;
    //pathname?: string;
  }) => {
    const getPath = (path?: string) => pathPrefix + (path || '');
    const { pathname } = window.location;

    return (
      <>
        <Ul>
          {tabs.map((tab, i) => {
            const path = getPath(tab.path);

            return (
              <Li
                key={i}
                path={path}
                isSelected={isSelected(path, pathname)}
                label={tab.label}
              />
            );
          })}
        </Ul>

        <Switch>
          {tabs.map((tab, i) => {
            const path = getPath(tab.path);

            return <Route key={i} path={path} component={tab.Component} />;
          })}
        </Switch>
      </>
    );
  };

export default Navigation;
