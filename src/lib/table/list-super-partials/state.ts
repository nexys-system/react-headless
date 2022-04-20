import { FiltersType } from '../../types';
import { State } from './type';

const getInitialState = <A>(
  data: A[] = [],
  sortAttribute?: keyof A,
  sortDescAsc: boolean = true,
  filters: FiltersType<A> = {}
): State<A> => {
  // console.log('initial state', data);
  const numberOfTotalRows: number = data.length;

  return {
    data,
    filters,
    sortAttribute,
    sortDescAsc,
    numberOfTotalRows,
    loading: false,
    pageIdx: 1
  };
};

export default getInitialState;
