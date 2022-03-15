import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Public from './public';
import Layout from './layout/index';

import L3 from './examples/layout';

const Routes = (): JSX.Element => (
  <Layout>
    <Switch>
      <Route path={'/layout'} component={L3} />
      <Route component={Public} />
    </Switch>
  </Layout>
);

export default Routes;
