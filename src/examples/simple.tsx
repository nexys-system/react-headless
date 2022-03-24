import React from 'react';

import List from '../components/list';

const data = [
  { name: 'Doe', firstName: 'John' },
  { name: 'Doe', firstName: 'Jane' }
];

const Simple = (): JSX.Element => (
  <List
    config={{ search: true }}
    data={data}
    def={[
      { name: 'name', label: 'Name' },
      { name: 'firstName', label: 'First Name' }
    ]}
  />
);

export default Simple;
