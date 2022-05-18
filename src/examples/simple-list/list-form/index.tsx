import React from 'react';
import Icon from '../../../components/icon';

import Form, { FormDataShape } from './form';
import List from './list';

export default () => {
  const [data, setData] = React.useState<
    { id: number; title: string; subtitle: string }[]
  >([
    { id: 1, title: 'item #1', subtitle: 'sub#1' },
    { id: 2, title: 'item #2', subtitle: 'sub#2' }
  ]);

  const [isInsert, setIsInsert] = React.useState<boolean>(false);
  const [edit, setEdit] = React.useState<
    { data: FormDataShape; id: number } | undefined
  >(undefined);

  const handleRemove = (id: number) => {
    if (confirm('Are you sure you would like to delete that entry?')) {
      setData(data.filter(x => x.id !== id));
    }
  };

  const handleSuccess = (d: FormDataShape, id?: number) => {
    if (!id) {
      throw Error("can't be edited");
    }
    const item = { id, title: d.name, subtitle: d.description };
    setData([...data, item]);
    setIsInsert(false);
  };

  const handleEdit = (d: { id: number; title: string; subtitle: string }) => {
    const data: FormDataShape = { name: d.title, description: d.subtitle };
    setEdit({ data, id: d.id });
  };

  const handleSuccessEdit = (d: FormDataShape) => {
    if (!edit) {
      throw Error("can't be edited");
    }
    const { id } = edit;
    if (!id) {
      throw Error("can't be edited");
    }

    const newData = data.map(x => {
      if (x.id === id) {
        return { title: d.name, subtitle: d.description, id };
      }

      return x;
    });
    setData([...newData]);
    setEdit(undefined);
  };

  if (edit) {
    // note: when connecting to an api the update call should be different to the insert call, maybe needs two forms
    return <Form onSuccess={handleSuccessEdit} data={{ dataIn: edit.data }} />;
  }

  if (isInsert) {
    return <Form onSuccess={handleSuccess} />;
  }

  return (
    <>
      <h2>List with Form</h2>
      <List data={data} onRemove={handleRemove} onEdit={handleEdit} />
      <br />
      <button
        onClick={() => setIsInsert(true)}
        type={'button'}
        className="btn btn-primary"
      >
        <Icon name="plus" />
      </button>
    </>
  );
};
