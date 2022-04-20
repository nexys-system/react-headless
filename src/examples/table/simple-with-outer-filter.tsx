import React from 'react';

import List from '../../components/table';

const initialData = [
  { name: 'Doe', firstName: 'John' },
  { name: 'Doe', firstName: 'Jane' }
];

const Simple = (): JSX.Element => {
  const [data, setData] =
    React.useState<{ name: string; firstName: string }[]>(initialData);

  const handleClick = () => {
    setData([]);
  };

  return (
    <>
      <h1>List with outer filter</h1>

      <button className="btn btn-sm btn-primary" onClick={handleClick}>
        Click me
      </button>

      <List
        config={{ search: true }}
        data={data}
        def={[
          { name: 'name', label: 'Name' },
          { name: 'firstName', label: 'First Name' }
        ]}
      />
    </>
  );
};

export default Simple;
