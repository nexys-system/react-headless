import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

import React from "./_snowpack/pkg/react.js";
import {Router, Switch, Route} from "./_snowpack/pkg/react-router-dom.js";
import * as History from "./_snowpack/pkg/history.js";
import Public from "./public.js";
const Layout = ({children}) => /* @__PURE__ */ React.createElement(React.Fragment, null, children);
const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL || "";
console.log(`basename: ${basename}`);
const history = History.createBrowserHistory({
  basename
});
const Routes = () => /* @__PURE__ */ React.createElement(Router, {
  history
}, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
  component: () => /* @__PURE__ */ React.createElement(Public, null)
}))));
export default Routes;
