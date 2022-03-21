import React from 'react';

import List from '../list';

const data = [
  { name: 'Doe', firstName: 'John' },
  { name: 'Doe', firstName: 'Jane' }
];

export default (): JSX.Element => (
  <List
    config={{ search: true }}
    data={data}
    def={[
      { name: 'name', label: 'Name' },
      { name: 'firstName', label: 'First Name' }
    ]}
  />
);
