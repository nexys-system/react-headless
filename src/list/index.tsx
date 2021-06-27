import React from 'react';

import List from './init';

const Default = (): JSX.Element => (
  <List
    data={[{ name: 'Doe', firstName: 'John' }]}
    def={[
      { name: 'name', label: 'Name' },
      { name: 'firstName', label: 'First Name' }
    ]}
  />
);

export default Default;
