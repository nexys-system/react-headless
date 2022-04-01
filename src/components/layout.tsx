import React from 'react';
import { ColProps, HeaderProps, RowProps } from '../lib/card';

import LayoutHeadless from '../lib/layout';

import Card from './card';
import Tabs from './tabs';

const Header = ({ title, description }: HeaderProps) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
);

const Row = ({ children }: RowProps) => <div className="row">{children}</div>;

const Col = ({ children, width }: ColProps) => (
  <div className={'col-md-' + width}>{children}</div>
);

export const Layout = LayoutHeadless(Card, Tabs, Header, Col, Row);

export default Layout;
