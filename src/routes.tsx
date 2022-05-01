import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Public from './public';
import Layout from './layout/index';

import List from './examples/table';
import LayoutComponent from './examples/layout';
import View from './examples/view';
import Card from './examples/card';
import Form from './examples/form';
import LoadDataAsync from './examples/load-data';
import Notifications from './examples/notifications';
import Code from './examples/code';
import ListAssign from './examples/list-assign';
import Buttons from './examples/buttons';
import Download from './examples/downloads';
import SimpleList from './examples/simple-list';
import Toggle from './examples/toggle';
import Tabs from './examples/tabs';
import FileUpload from './examples/file-upload';
import Detail from './examples/detail';

import { links } from './links';

const Routes = (): JSX.Element => (
  <Layout>
    <Switch>
      <Route path={links.list.link} component={List} />
      <Route path={links.layout.link} component={LayoutComponent} />
      <Route path={links.view.link} component={View} />
      <Route path={links.card.link} component={Card} />
      <Route path={links.form.link} component={Form} />
      <Route path={links.loadDataAsync.link} component={LoadDataAsync} />
      <Route path={links.notifications.link} component={Notifications} />
      <Route path={links.code.link} component={Code} />
      <Route path={links.listAssign.link} component={ListAssign} />
      <Route path={links.buttons.link} component={Buttons} />
      <Route path={links.download.link} component={Download} />
      <Route path={links.simpleList.link} component={SimpleList} />
      <Route path={links.toggle.link} component={Toggle} />
      <Route path={links.tabs.link} component={Tabs} />
      <Route path={links.fileUpload.link} component={FileUpload} />
      <Route path={links.detail.link} component={Detail} />
      <Route component={Public} />
    </Switch>
  </Layout>
);

export default Routes;
