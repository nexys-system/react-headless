import React from 'react';

import Form, { FormDataShape } from './form';
import List from './list';

export default () => {
  const [data, setData] = React.useState<{ id: number; title: string }[]>([
    { id: 1, title: 'item #1' },
    { id: 2, title: 'item #2' }
  ]);

  const handleRemove = (id: number) => {
    if (confirm('Are you sure you would like to delete that entry?')) {
      setData(data.filter(x => x.id !== id));
    }
  };

  const handleSuccess = (d: FormDataShape, id: number) => {
    const item = { id, title: d.name };
    setData([...data, item]);
  };

  return (
    <>
      <h2>List with simple insert</h2>
      <List data={data} onRemove={handleRemove} />
      <br />
      <Form onSuccess={handleSuccess} />
    </>
  );
};
