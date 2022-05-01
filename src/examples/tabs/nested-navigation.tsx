import React from 'react';

import Nav, { TabNavigation } from '../../components/tabs/nav';

import links from '../../links';

const tabsInside: TabNavigation[] = [
  {
    label: 'One One',
    path: '/one',
    Component: () => (
      <p>
        One One <code>{window.location.pathname}</code>
      </p>
    )
  },
  {
    label: 'One Two',
    path: '/two',
    Component: () => <p>One Two {window.location.pathname}</p>
  }
];

const { link: tabUrlPrefix } = links.tabs;

const tabs: TabNavigation[] = [
  {
    label: 'One',
    path: '/one',
    Component: () => (
      <Nav
        tabs={tabsInside}
        pathPrefix={tabUrlPrefix + '/one'}
        // pathname={window.location.pathname}
      />
    ) // for nested, need to pass changing props, else it will not be reloaded
  },
  {
    label: 'Two',
    path: '/two',
    Component: () => <p>Two {window.location.pathname}</p>
  }
];

export default () => <Nav tabs={tabs} pathPrefix={tabUrlPrefix} />;
