import React from 'react';

import { ghUrl } from './config';

const Default = (): JSX.Element => (
  <div>
    <i>browse menu</i>
    <p>
      <a href={ghUrl}>Source</a> available under MIT license.
    </p>
  </div>
);

export default Default;
