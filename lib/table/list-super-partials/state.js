const getInitialState = (data = [], sortAttribute, sortDescAsc = true, filters = {}) => {
  const numberOfTotalRows = data.length;
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
