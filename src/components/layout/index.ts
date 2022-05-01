import LayoutHeadless from '../../lib/layout';

import Card from '../card';
import Navs from '../tabs/nav';

import { Header, Col, Row, BackBtn } from './utils-ui';

export const Layout = LayoutHeadless({
  Card,
  Navs,
  Header,
  Col,
  Row,
  BackBtn
});

export default Layout;
