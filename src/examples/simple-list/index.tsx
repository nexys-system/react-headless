import React from 'react';

import ListAdd from './list-add';
import ListForm from './list-form';

export default () => (
  <>
    <h1>Simple list</h1>

    <div className="row">
      <div className="col-md-6">
        <ListAdd />
      </div>

      <div className="col-md-6">
        <ListForm />
      </div>
    </div>
  </>
);
