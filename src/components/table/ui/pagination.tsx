import React from "react";

import {
  getPagination,
  getPageTiles,
} from "../../../lib/table/utils/pagination-utils";
import { PaginationProps } from "../../../lib/table/ui-type";

const Pagination = ({
  n, // number of records returned
  nPerPage, // number of records per page
  idx, // page index
  onClick, // onClick event
}: PaginationProps): JSX.Element | null => {
  if (n === 0) {
    return null;
  }

  const { nPage } = getPagination(n, nPerPage);
  const pages = getPageTiles(idx, nPage);

  return (
    <nav aria-label="Page navigation example" className="flex justify-center">
      <ul className="flex list-none">
        <li className="page-item">
          <button
            className="h-8 w-8 mr-1 flex justify-center items-center rounded-full cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={idx > 1 ? () => onClick(idx - 1) : undefined}
          >
            Previous
          </button>
        </li>

        {pages.map((page, i) => {
          if (page < 0) {
            return (
              <li key={i} className="flex items-center justify-center mx-1">
                <span>...</span>
              </li>
            );
          }

          const isActive = idx === page;

          return (
            <li key={i} className="flex items-center justify-center mx-1">
              <button
                className={`h-8 w-8 flex justify-center items-center rounded-full cursor-pointer ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => onClick(page)}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li className="page-item">
          <button
            className="h-8 w-8 mr-1 flex justify-center items-center rounded-full cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={idx < nPage ? () => onClick(idx + 1) : undefined}
          >
            Right
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
