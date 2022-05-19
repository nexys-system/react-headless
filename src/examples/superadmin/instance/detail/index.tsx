import { useParams } from "react-router-dom";

import Layout from "../../../../components/layout";
import LoadDataAsync from "../../../../components/load-data-async";
import links from "../../../../links";
import { Instance } from "../type";
import Permissions from "../../permissions";
import User from "../../user";

import Detail from "./detail";
import { InstanceData } from "../../data";

export default () => {
  const { uuid } = useParams<{ uuid?: string }>();

  if (typeof uuid !== "string") {
    throw Error("expected a uuid in the url");
  }

  const L = Layout<Instance>({
    cards: {
      Instance: [{ Component: ({ data }) => <Detail data={data} /> }],
      User: [
        { Component: ({ data }) => <User instance={{ uuid }} />, width: 12 },
      ],
      Permissions: [
        { Component: ({ data: { uuid } }) => <Permissions uuid={uuid} /> },
      ],
    },
    title: "Instance" + uuid,
    backRedirect: links.superadmin.link,
    pathPrefix: links.superadmin.link + `/${uuid}/detail`,
  });

  return (
    <LoadDataAsync Component={L} getData={() => InstanceData.getDetail(uuid)} />
  );
};
