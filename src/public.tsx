import React from 'react';

import List from './list';

const Default = (): JSX.Element => (
  <div>
    <List
      data={[{ name: 'Doe', firstName: 'John' }]}
      def={[
        { name: 'name', label: 'Name' },
        { name: 'firstName', label: 'First Name' }
      ]}
    />

    <p>
      <a href="https://github.com/Nexysweb/mui-list-ts">Source</a> available
      under MIT license.
    </p>
  </div>
);

export default Default;
