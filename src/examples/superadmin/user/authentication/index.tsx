import { UserAuthentication, UserAuthenticationType } from "./type";
import LoadDataAsync from "../../../../components/load-data-async";

import Body from "./body";

const getUserAuthentications = (uuid: string) => {
  const data: UserAuthentication[] = [
    {
      uuid: "u1",
      value: "myemail@gmail.com",
      type: UserAuthenticationType.password,
      isEnabled: true,
    },
    {
      uuid: "u2",
      value: "myghusername",
      type: UserAuthenticationType.password,
      isEnabled: false,
    },
  ];

  return Promise.resolve(data);
};

export default ({ uuid }: { uuid: string }) => (
  <LoadDataAsync
    getData={() => getUserAuthentications(uuid)}
    Component={Body}
  />
);
