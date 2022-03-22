import React from 'react';
import { getPagination } from '../../../lib/list/utils/pagination-utils';
import { PaginationProps } from '../../../lib/list/ui-type';

const Pagination = (props: PaginationProps): JSX.Element | null => {
  const { n, nPerPage, idx, onClick } = props;

  if (n === 0) {
    return null;
  }

  const { nPage } = getPagination(n, nPerPage);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
