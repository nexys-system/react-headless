import LayoutHeadless from '../../lib/layout';

import Card from '../card';
import Tabs from '../tabs';

import { Header, Col, Row, BackBtn } from './utils-ui';

export const Layout = LayoutHeadless({
  Card,
  Tabs,
  Header,
  Col,
  Row,
  BackBtn
});

export default Layout;
