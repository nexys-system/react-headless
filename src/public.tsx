import React from 'react';

import { ghUrl } from './config';

const Default = (): JSX.Element => (
  <div>
    <p>Select from the menu</p>

    <hr />
    <p>
      <a href={ghUrl}>Source</a> available under MIT license.
    </p>
  </div>
);

export default Default;
