import React from 'react';

import {
  getPagination,
  getPageTiles
} from '../../../lib/table/utils/pagination-utils';
import { PaginationProps } from '../../../lib/table/ui-type';
// import { ChevronLeftIcon, ChevronRightIcon } from "../../../icons";

const classesCommon = [
  'h-8',
  'w-8',
  'mr-1',
  'flex',
  'justify-center',
  'items-center',
  'rounded-full',
  'cursor-pointer'
].join(' ');
const classesInactive = ['bg-gray-50', 'hover:bg-gray-100'].join(' ');
const classesActive = ['bg-primary', 'text-white'].join(' ');

const Pagination = ({
  n, // number of records returned
  nPerPage, // number of records per page
  idx, // page idx
  onClick // onClick event
}: PaginationProps): JSX.Element | null => {
  if (n === 0) {
    return null;
  }

  // get number of pages
  const { nPage } = getPagination(n, nPerPage);

  // const pages: (number | null)[] = new Array(nPage)
  //   .fill(1)
  //   .map((_x, i) => i + 1);
  const pages = getPageTiles(idx, nPage);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            style={{ cursor: 'pointer' }}
            className="page-link"
            onClick={idx > 1 ? () => onClick(idx - 1) : undefined}
          >
            Previous
          </a>
        </li>

        {pages.map((page, i) => {
          if (page < 0) {
            return (
              <li key={i}>
                <span
                  aria-current="page"
                  className={`${classesCommon} ${classesInactive}`}
                >
                  ...
                </span>
              </li>
            );
          }

          const isActive = idx === page;

          return (
            <li className={`page-item` + (isActive ? ' active' : '')} key={i}>
              <a
                style={{ cursor: 'pointer' }}
                className="page-link"
                onClick={() => onClick(page)}
                aria-current="page"
              >
                {page}
              </a>
            </li>
          );
        })}

        <li className="page-item">
          <a
            style={{ cursor: 'pointer' }}
            className="page-link"
            onClick={idx < nPage ? () => onClick(idx + 1) : undefined}
          >
            {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
            Right
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
