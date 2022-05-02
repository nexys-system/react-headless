import LayoutHeadless from "../../lib/layout/index.js";
import Card from "../card.js";
import Navs from "../tabs/nav.js";
import {Header, Col, Row, BackBtn} from "./utils-ui.js";
export const Layout = LayoutHeadless({
  Card,
  Navs,
  Header,
  Col,
  Row,
  BackBtn
});
export default Layout;
