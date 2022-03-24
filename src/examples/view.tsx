import React from 'react';

import View from '../components/view';
import { ViewStructureUnit } from '../lib/view';

interface Data {
  firstName: string;
  lastName: string;
  email: string;
}

const data: Data = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com'
};

const structure: ViewStructureUnit<Data>[] = [
  { label: 'First Name', value: 'firstName' },
  { label: 'Last Name', value: 'lastName' },
  {
    label: 'Email',
    value: x => (
      <a href={'mailto:' + x.email}>
        <code>{x.email}</code>
      </a>
    )
  }
];

export default () => <View data={data} structure={structure} />;
