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

  const handleRemove = (id: number) => {
    if (confirm('Are you sure you would like to delete that entry?')) {
      setData(data.filter(x => x.id !== id));
    }
  };

  const handleSuccess = (d: FormDataShape, id: number) => {
    const item = { id, title: d.name, subtitle: d.description };
    setData([...data, item]);
    setIsInsert(false);
  };

  if (isInsert) {
    return <Form onSuccess={handleSuccess} />;
  }

  return (
    <>
      <h2>List with Form</h2>
      <List data={data} onRemove={handleRemove} />
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
