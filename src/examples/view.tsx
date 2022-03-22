import React from 'react';

import ViewGeneric, {
  LayoutProps,
  RowProps,
  ViewStructureUnit
} from '../lib/view';
import Card from '../components/card';

const Layout = ({ children }: LayoutProps) => (
  <Card>
    <>{children}</>
  </Card>
);

const Row = (p: RowProps) => (
  <li>
    {p.label}: {p.value}
  </li>
);

const View = ViewGeneric(Layout, Row);

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
