import Nav from "../../components/tabs/nav";
import { TabNavigationProps } from "../../lib/tabs/type";

import links from "../../links";

const tabs: TabNavigationProps[] = [
  //{ label: 'Default', Component: () => <p>Default</p> },
  {
    label: "One",
    path: "/simple/one",
    Component: () => (
      <p>
        One <code>path: {window.location.pathname}</code>
      </p>
    ),
  },
  {
    label: "Two",
    path: "/simple/two",
    Component: () => (
      <p>
        Two <code>path: {window.location.pathname}</code>
      </p>
    ),
  },
];

const { link: tabUrlPrefix } = links.tabs;

export default () => <Nav tabs={tabs} pathPrefix={tabUrlPrefix} />;
