import { useParams } from "react-router-dom";

import Layout from "../../../../components/layout";
import LoadDataAsync from "../../../../components/load-data-async";
import links from "../../../../links";
import { User } from "../type";

import Detail from "./detail";
import StatusChange from "./status";
import Permissions from "./permissions";
import AccessToken from "./access-token";
import Authentication from "../authentication";
import { UserData } from "../../data";

export default ({ instance }: { instance: { uuid: string } }) => {
  const { uuid } = useParams<{ uuid?: string }>();

  if (typeof uuid !== "string") {
    throw Error("expected a uuid in the url");
  }

  const baseUrl = links.superadmin.link + `/${instance.uuid}/detail/user`;

  const L = Layout<User>({
    cards: {
      User: [
        { Component: ({ data }) => <Detail data={data} /> },
        {
          Component: ({ data }) => (
            <StatusChange statusId={1} uuid={data.uuid} />
          ),
        },
        { Component: ({ data }) => <Authentication uuid={data.uuid} /> },
      ],
      Permissions: [
        { Component: ({ data }) => <Permissions uuid={data.uuid} /> },
        { Component: ({ data }) => <AccessToken user={{ uuid: data.uuid }} /> },
      ],
    },
    title: "User" + uuid,
    backRedirect: baseUrl,
    pathPrefix: baseUrl + `/${uuid}/detail`,
  });

  return (
    <LoadDataAsync Component={L} getData={() => UserData.getDetail(uuid)} />
  );
};
