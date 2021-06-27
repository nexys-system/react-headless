import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Public from './public';
import List from './list';
import Form from './form';
import Layout from './layout/index';
import { links } from './links';

const Routes = (): JSX.Element => (
  <Layout>
    <Switch>
      <Route path={links.list.link} component={List} />
      <Route path={links.form.link} component={Form} />
      <Route component={Public} />
    </Switch>
  </Layout>
);

export default Routes;
