import React from 'react';
import { ColProps, HeaderProps, RowProps } from '../lib/card';

import LayoutHeadless from '../lib/layout';
import { ButtonProps } from '../lib/layout/type';

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

const BackBtn = ({ onClick }: ButtonProps) => (
  <div className="float-right">
    <button
      onClick={onClick}
      type="button"
      className=" btn-sm btn btn-secondary"
    >
      Back
    </button>
  </div>
);

export const Layout = LayoutHeadless(Card, Tabs, Header, Col, Row, BackBtn);

export default Layout;
