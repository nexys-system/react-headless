import { ActionType, Action, State } from './type';

const listSuperReducer = <A>(state: State<A>, action: Action): State<A> => {
  switch (action.type) {
    case ActionType.FETCH_DATA_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case ActionType.FETCH_DATA_SUCCESS: {
      const { data, numberOfTotalRows } = action.payload;
      return {
        ...state,
        loading: false,
        data,
        numberOfTotalRows
      };
    }

    case ActionType.FILTER_CHANGE: {
      const { filters, pageIdx } = action.payload;
      return {
        ...state,
        filters,
        pageIdx
      };
    }

    case ActionType.ORDER_CHANGE: {
      const { sortDescAsc, sortAttribute, pageIdx } = action.payload;
      return {
        ...state,
        sortDescAsc,
        sortAttribute,
        pageIdx
      };
    }

    case ActionType.PAGE_CHANGE: {
      const { pageIdx } = action.payload;
      return {
        ...state,
        pageIdx
      };
    }
  }

  // unreachable code
  // return state;
};

export default listSuperReducer;
