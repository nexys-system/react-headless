import React from "../../../_snowpack/pkg/react.js";
import {
  getPagination,
  getPageTiles
} from "../../../lib/list/utils/pagination-utils.js";
const classesCommon = [
  "h-8",
  "w-8",
  "mr-1",
  "flex",
  "justify-center",
  "items-center",
  "rounded-full",
  "cursor-pointer"
].join(" ");
const classesInactive = ["bg-gray-50", "hover:bg-gray-100"].join(" ");
const classesActive = ["bg-primary", "text-white"].join(" ");
const Pagination = ({
  n,
  nPerPage,
  idx,
  onClick
}) => {
  if (n === 0) {
    return null;
  }
  const {nPage} = getPagination(n, nPerPage);
  const pages = getPageTiles(idx, nPage);
  return /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Page navigation example"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "page-item"
  }, /* @__PURE__ */ React.createElement("a", {
    style: {cursor: "pointer"},
    className: "page-link",
    onClick: idx > 1 ? () => onClick(idx - 1) : void 0
  }, "Previous")), pages.map((page, i) => {
    if (page < 0) {
      return /* @__PURE__ */ React.createElement("li", {
        key: i
      }, /* @__PURE__ */ React.createElement("span", {
        "aria-current": "page",
        className: `${classesCommon} ${classesInactive}`
      }, "..."));
    }
    const isActive = idx === page;
    return /* @__PURE__ */ React.createElement("li", {
      className: `page-item` + (isActive ? " active" : ""),
      key: i
    }, /* @__PURE__ */ React.createElement("a", {
      style: {cursor: "pointer"},
      className: "page-link",
      onClick: () => onClick(page),
      "aria-current": "page"
    }, page));
  }), /* @__PURE__ */ React.createElement("li", {
    className: "page-item"
  }, /* @__PURE__ */ React.createElement("a", {
    style: {cursor: "pointer"},
    className: "page-link",
    onClick: idx < nPage ? () => onClick(idx + 1) : void 0
  }, "Right"))));
};
export default Pagination;
