import { useParams } from "react-router-dom";

import Layout from "../../../../components/layout";
import LoadDataAsync from "../../../../components/load-data-async";
import links from "../../../../links";
import { User } from "../type";

import Detail from "./detail";

const getInstance = (uuid: string): Promise<User> =>
  Promise.resolve({ uuid, firstName: "my fn " + uuid, lastName: "my ln " });

export default ({ instance }: { instance: { uuid: string } }) => {
  const { uuid } = useParams<{ uuid?: string }>();

  if (typeof uuid !== "string") {
    throw Error("expected a uuid in the url");
  }

  const baseUrl = links.superadmin.link + `/${instance.uuid}/detail/user`;

  const L = Layout<User>({
    cards: [{ Component: ({ data }) => <Detail data={data} /> }],
    title: "User" + uuid,
    backRedirect: baseUrl,
    pathPrefix: baseUrl + `/${uuid}/detail`,
  });

  return <LoadDataAsync Component={L} getData={() => getInstance(uuid)} />;
};
