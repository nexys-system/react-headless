import SuperList, { InnerProps } from '../../lib/list/list-super';
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
} from './ui';

import Pagination from './ui/pagination';

const List = <A>(props: InnerProps<A>): JSX.Element =>
  SuperList<A>({
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
