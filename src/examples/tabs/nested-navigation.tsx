import Nav from "../../components/tabs/nav";
import { TabNavigationProps } from "../../lib/tabs/type";

import links from "../../links";

const tabsInside2: TabNavigationProps[] = [
  {
    label: "Default nested 2",
    Component: () => <p>Default nested</p>,
  },
  {
    label: "One One One",
    path: "/one",
    Component: () => (
      <p>
        One One <code>{window.location.pathname}</code>
      </p>
    ),
  },
  {
    label: "One Two",
    path: "/two",
    Component: () => <p>One Two {window.location.pathname}</p>,
  },
];

const tabsInside: TabNavigationProps[] = [
  {
    label: "Default nested",
    Component: () => <p>Default nested</p>,
  },
  {
    label: "One One",
    path: "/one",
    Component: () => (
      /*<p>
        One One <code>{window.location.pathname}</code>
      </p>*/
      <Nav
        tabs={tabsInside2}
        pathPrefix={tabUrlPrefix + "/one/one"}
        // pathname={window.location.pathname}
      />
    ),
  },
  {
    label: "One Two",
    path: "/two",
    Component: () => <p>One Two {window.location.pathname}</p>,
  },
];

const { link: tabUrlPrefix } = links.tabs;

const tabs: TabNavigationProps[] = [
  {
    label: "Default",
    Component: () => <p>Default</p>,
  },
  {
    label: "One",
    path: "/one",
    Component: () => (
      <Nav
        tabs={tabsInside}
        pathPrefix={tabUrlPrefix + "/one"}
        // pathname={window.location.pathname}
      />
    ), // for nested, need to pass changing props, else it will not be reloaded
  },
  {
    label: "Two",
    path: "/two",
    Component: () => <p>Two {window.location.pathname}</p>,
  },
];

export default () => <Nav tabs={tabs} pathPrefix={tabUrlPrefix} />;
