import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import * as History from 'history';

import Public from './public';
import Layout from './layout/index'


const basename: string = import.meta.env.SNOWPACK_PUBLIC_URL || '';

console.log(`basename: ${basename}`);

const history = History.createBrowserHistory({
  basename
});

const Routes = (): JSX.Element => <Layout>gd</Layout>
 


export default Routes;
