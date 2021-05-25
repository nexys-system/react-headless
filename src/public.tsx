import React from 'react';

import List from './list';
import { ghUrl } from './config';

const Default = (): JSX.Element => (
  <div>
    <List
      data={[{ name: 'Doe', firstName: 'John' }]}
      def={[
        { name: 'name', label: 'Name' },
        { name: 'firstName', label: 'First Name' }
      ]}
    />

    <hr/>
    <p>
      <a href={ghUrl}>Source</a> available
      under MIT license.
    </p>
  </div>
);

export default Default;
