import React from 'react';

import PreLayout from '../../components/layout';
import PreLayoutNoRouter from '../../components/layout/no-router';

import Navs from '../../components/tabs/nav';
import links from '../../links';
import def, { Data } from './def';

const Layout = PreLayout(def);

const LayoutNoRouter = PreLayoutNoRouter(def);

export default () => {
  const data: Data = { firstName: 'Maria' };

  return (
    <>
      <h1>Layout Showcase</h1>

      <Navs
        tabs={[
          {
            label: 'With Router',
            path: '/with-router',
            Component: () => <Layout data={data} />
          },
          {
            label: 'No Router',
            path: '/no-router',
            Component: () => <LayoutNoRouter data={data} />
          }
        ]}
        pathPrefix={links.layout.link}
      />
    </>
  );
};
