import SuperList from "../../lib/table/list-super.js";
import {
  GlobalSearch,
  HeaderUnit,
  FilterUnit,
  OrderController,
  Row,
  ColCell,
  RecordInfo,
  NoRow,
  ListWrapper,
  ListContainer,
  ListHeader,
  ListBody,
  Loader
} from "./ui/index.js";
import Pagination from "./ui/pagination.js";
const List = (props) => SuperList({
  HeaderUnit,
  FilterUnit,
  OrderController,
  ColCell,
  GlobalSearch,
  NoRow,
  Row,
  ListWrapper,
  ListContainer,
  ListHeader,
  ListBody,
  RecordInfo,
  Pagination,
  Loader
})(props);
export default List;
