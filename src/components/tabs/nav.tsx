import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { getClassName } from '../../components/tabs/index';

export interface TabNavigation {
  label: string;
  path?: string;
  Component: () => JSX.Element;
}

const isSelected = (path: string, pathname: string) => pathname.includes(path);

const Nav = ({
  tabs,
  pathPrefix = ''
}: // pathname = window.location.pathname
{
  tabs: TabNavigation[];
  pathPrefix?: string;
  //pathname?: string;
}) => {
  const getPath = (path?: string) => pathPrefix + (path || '');
  const { pathname } = window.location;

  return (
    <>
      <ul className="nav nav-pills">
        {tabs.map((tab, i) => {
          const path = getPath(tab.path);

          return (
            <li key={i} className="nav-item">
              <Link
                to={path}
                className={getClassName(isSelected(path, pathname))}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        {tabs.map((tab, i) => {
          const path = getPath(tab.path);

          return <Route key={i} path={path} component={tab.Component} />;
        })}
      </Switch>
    </>
  );
};

export default Nav;
