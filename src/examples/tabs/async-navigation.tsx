import Nav from "../../components/tabs/nav";
import { TabNavigationProps } from "../../lib/tabs/type";
import LoadDataAsync from "../../components/load-data-async";
import links from "../../links";
import { delay } from "../../lib/utils";

const {
  tabs: { link: tabUrlPrefix },
} = links;

const getData = (idx: number) => async (): Promise<string> => {
  console.log("loaded " + idx);
  await delay(1000);
  console.log("loading " + idx);
  return "hello async world " + idx;
};

const Comp = (idx: number) => (
  <LoadDataAsync
    Component={({ data }) => <p>{data}</p>}
    getData={getData(idx)}
  />
);

const tabs: TabNavigationProps[] = [
  {
    label: "Default",
    Component: () => Comp(0),
  },
  {
    label: "One",
    path: "/async/one",
    Component: () => Comp(1),
  },
  {
    label: "Two",
    path: "/async/two",
    Component: () => Comp(2),
  },
];

export default () => <Nav tabs={tabs} pathPrefix={tabUrlPrefix} />;
