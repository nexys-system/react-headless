import LayoutHeadless from "../../lib/layout/index.js";
import Card from "../card.js";
import Tabs from "../tabs/index.js";
import {Header, Col, Row, BackBtn} from "./utils-ui.js";
export const Layout = LayoutHeadless({
  Card,
  Tabs,
  Header,
  Col,
  Row,
  BackBtn
});
export default Layout;
