import React from 'react';

import { ColorContext } from '../types/misc';

export default ({
  colorContext = 'primary'
}: {
  colorContext?: ColorContext;
}) => (
  <div className={`spinner-border text-${colorContext}`} role="status">
    <span className="sr-only">Loading...</span>
  </div>
);
