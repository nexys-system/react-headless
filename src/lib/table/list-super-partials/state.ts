import { FiltersType } from '../../types';
import { State } from './type';

const getInitialState = <A>(
  data: A[] = [],
  sortAttribute?: keyof A,
  sortDescAsc: boolean = true,
  filters: FiltersType<A> = {}
): State<A> => {
  console.log('data, initial', data);

  return {
    data,
    filters,
    sortAttribute,
    sortDescAsc,
    loading: false,
    numberOfTotalRows: data && data.length ? data.length : 0,
    pageIdx: 1
  };
};

export default getInitialState;
