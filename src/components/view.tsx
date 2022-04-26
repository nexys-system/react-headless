import React from 'react';

import ViewGeneric, { LayoutProps, RowProps } from '../lib/view';
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

const View = ViewGeneric(Row, Layout);

export default View;
