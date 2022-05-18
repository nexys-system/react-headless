import PreLayout from "../../components/layout";
import PreLayoutNoRouter from "../../components/layout/no-router";
import { TabNavigationProps } from "../../lib/tabs/type";

import Navs from "../../components/tabs/nav";
import links from "../../links";
import def, { Data } from "./def";

const Layout = PreLayout(def);

const LayoutNoRouter = PreLayoutNoRouter(def);

const data: Data = { firstName: "Maria" };
const tabs: TabNavigationProps[] = [
  {
    label: "With Router",
    path: "/with-router",
    Component: () => <Layout data={data} />,
  },
  {
    label: "No Router",
    path: "/no-router",
    Component: () => <LayoutNoRouter data={data} />,
  },
];

const { link: tabUrlPrefix } = links.layout;

export default () => {
  return (
    <>
      <h1>Layout Showcase</h1>
      <Navs tabs={tabs} pathPrefix={tabUrlPrefix} />
    </>
  );
};
