import { Link } from "react-router-dom";
import LoadDataAsync from "../../../components/load-data-async";
import List from "../../../components/table";
import { Definition } from "../../../lib/types";
import links from "../../../links";
import { InstanceData } from "../data";
import { Instance } from "./type";

const def: Definition<Instance> = [
  { name: "name", label: "Country name" },
  {
    name: "uuid",
    label: "",
    render: (x) => (
      <Link to={links.superadmin.link + `/${x.uuid}/detail`}>Edit</Link>
    ),
  },
];

const InstanceList = ({ data }: { data: Instance[] }): JSX.Element => (
  <List config={{ search: true }} data={data} def={def} />
);

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <h1>Instances</h1>

    {children}
  </>
);

export default () => (
  <Layout>
    <LoadDataAsync Component={InstanceList} getData={InstanceData.getList} />
  </Layout>
);
