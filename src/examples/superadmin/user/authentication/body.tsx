import React from "react";
import Icon from "../../../../components/icon";

import Form from "./form";
import List from "./list";
import { FormDataShape, UserAuthentication } from "./type";

const Body = ({ data: dataIn }: { data: UserAuthentication[] }) => {
  const [data, setData] = React.useState<UserAuthentication[]>(dataIn);

  const [isInsert, setIsInsert] = React.useState<boolean>(false);
  const [edit, setEdit] = React.useState<
    { data: FormDataShape; uuid: string } | undefined
  >(undefined);

  const handleRemove = (uuid: string) => {
    if (confirm("Are you sure you would like to delete that entry?")) {
      setData(data.filter((x) => x.uuid !== uuid));
    }
  };

  const handleSuccess = (d: FormDataShape, uuid?: string) => {
    if (!uuid) {
      throw Error("can't be edited");
    }
    const item: UserAuthentication = { ...d, uuid };
    setData([...data, item]);
    setIsInsert(false);
  };

  const handleEdit = (d: UserAuthentication) => {
    const { uuid, ...data } = d;
    // const data: FormDataShape = { name: d.title, description: d.subtitle };
    setEdit({ data, uuid });
  };

  const handleSuccessEdit = (d: FormDataShape) => {
    if (!edit) {
      throw Error("can't be edited");
    }
    const { uuid } = edit;
    if (!uuid) {
      throw Error("can't be edited");
    }

    const newData = data.map((x) => {
      if (x.uuid === uuid) {
        return { ...d, uuid };
      }

      return x;
    });
    setData([...newData]);
    setEdit(undefined);
  };

  if (edit) {
    // note: when connecting to an api the update call should be different to the insert call, maybe needs two forms
    return <Form onSuccess={handleSuccessEdit} />;
  }

  if (isInsert) {
    return <Form onSuccess={handleSuccess} />;
  }

  return (
    <>
      <h2>Authentication</h2>
      <List data={data} onRemove={handleRemove} onEdit={handleEdit} />
      <br />
      <button
        onClick={() => setIsInsert(true)}
        type={"button"}
        className="btn btn-primary"
      >
        <Icon name="plus" />
      </button>
    </>
  );
};

export default Body;
