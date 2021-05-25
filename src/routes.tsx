import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Public from './public';
import Layout from './layout/index';

const Routes = (): JSX.Element => (
  <Layout>
    <Switch>
      <Route component={Public} />
    </Switch>
  </Layout>
);

export default Routes;
