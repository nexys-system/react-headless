import LayoutHeadless from "../../lib/layout";

import Card from "../card";
import CardNoFrame from "../card/no-frame";
import Navs from "../tabs/nav";

import { Header, Col, Row, BackBtn } from "./utils-ui";

export const Layout = LayoutHeadless({
  Card,
  Navs,
  Header,
  Col,
  Row,
  BackBtn,
});

export const LayoutNoFrame = LayoutHeadless({
  Card: CardNoFrame,
  Navs,
  Header,
  Col,
  Row,
  BackBtn,
});

export default Layout;
