import React from "react";

import ListAssign from "../../../components/list-assign";
import LoadDataAsync from "../../../components/load-data-async";
import { Item } from "../../../lib/list-assign";
import { getPermissions, updatePermission } from "../data";

const ListAssign2 = ({ data: dataIn }: { data: Item<number>[] }) => {
  const [data, setData] = React.useState(dataIn);

  const onUpdate = async (id: number) => {
    await updatePermission(id);
    const d = data.map((d) => {
      if (d.id === id) {
        return { ...d, assigned: !d.assigned };
      }

      return d;
    });

    setData([...d]);
  };

  return <ListAssign<number> data={data} updatePromise={onUpdate} />;
};

export default ({ uuid }: { uuid: string }) => (
  <LoadDataAsync Component={ListAssign2} getData={() => getPermissions(uuid)} />
);
