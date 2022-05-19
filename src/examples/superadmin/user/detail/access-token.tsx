import LoadDataAsync from "../../../../components/load-data-async";
import List from "../../../../components/table";
import { Definition } from "../../../../lib/types";
import { AccessToken } from "../type";

const getAccessTokens = (user: { uuid: string }) => {
  const d: AccessToken[] = [
    { uuid: "u1", token: "t1", date: "2021-23-23" },
    { uuid: "u2", token: "t2", date: "2021-23-23" },
  ];
  return Promise.resolve(d);
};

const def: Definition<AccessToken> = [
  { name: "token", label: "Token" },
  { name: "date", label: "Date" },
  {
    name: "uuid",
    label: "",
    render: (x) => <button className="btn btn-danger">Delete</button>,
  },
];

const TokenList = ({ data }: { data: AccessToken[] }): JSX.Element => (
  <List config={{ search: false }} data={data} def={def} />
);

export default ({ user }: { user: { uuid: string } }) => (
  <LoadDataAsync
    Component={({ data }) => <TokenList data={data} />}
    getData={() => getAccessTokens(user)}
  />
);
