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

export default View;
