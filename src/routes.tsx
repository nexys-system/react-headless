import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Public from './public';
import Layout from './layout/index';

import List from './examples/list';
import LayoutComponent from './examples/layout';
import View from './examples/view';

const Routes = (): JSX.Element => (
  <Layout>
    <Switch>
      <Route path={'/list'} component={List} />
      <Route path={'/layout'} component={LayoutComponent} />
      <Route path={'/view'} component={View} />
      <Route component={Public} />
    </Switch>
  </Layout>
);

export default Routes;
