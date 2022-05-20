import { Link } from "react-router-dom";
import LoadDataAsync from "../../../components/load-data-async";
import List from "../../../components/table";
import { Definition } from "../../../lib/types";
import links from "../../../links";
import { UserData } from "../data";
import { User } from "./type";

const def = (instance: { uuid: string }): Definition<User> => [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "last Name" },
  {
    name: "uuid",
    label: "",
    render: (x) => (
      <Link
        to={
          links.superadmin.link +
          `/${instance.uuid}/detail/user/${x.uuid}/detail`
        }
      >
        Edit
      </Link>
    ),
  },
];

const UserList = ({
  data,
  instance,
}: {
  data: User[];
  instance: { uuid: string };
}): JSX.Element => (
  <List config={{ search: true }} data={data} def={def(instance)} />
);

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <h1>Users</h1>

    {children}
  </>
);

export default ({ instance }: { instance: { uuid: string } }) => (
  <Layout>
    <LoadDataAsync
      Component={({ data }) => <UserList instance={instance} data={data} />}
      getData={UserData.getList}
    />
  </Layout>
);
