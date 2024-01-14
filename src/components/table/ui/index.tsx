import React from "react";

import * as UIType from "../../../lib/table/ui-type";
import { paginationBoundaries } from "../../../lib/table/utils/pagination-utils";

import {
  PaginationUnitProps,
  NoRowProps,
  ListWrapperProps,
  ListContainerProps,
  ListBodyProps,
  RecordInfoProps,
  ListHeaderProps,
  RowProps,
  ColCellProps,
  PaginationWrapperProps,
  OrderControllerUpAndDownProps,
  OrderControllerProps,
} from "../../../lib/table/ui-type";
import Icon from "../../icon";

const Loader = () => <p>Loading...</p>;

const Alert = ({
  children,
  type = "info",
}: {
  children: React.ReactNode | JSX.Element;
  type?: "error" | "success" | "info" | "warning";
}): JSX.Element => {
  let bgColor = "bg-blue-100";
  switch (type) {
    case "error":
      bgColor = "bg-red-100";
      break;
    case "success":
      bgColor = "bg-green-100";
      break;
    case "warning":
      bgColor = "bg-yellow-100";
      break;
  }
  return <div className={`p-4 ${bgColor}`}>{children}</div>;
};

const GlobalSearch = (props: UIType.GlobalSearchProps) => {
  if (!props.search) {
    return <></>;
  }

  return (
    <div className="mb-3 w-3/4 max-w-sm">
      <input
        type="text"
        className="form-control p-2 border border-gray-300 rounded"
        onChange={(v) =>
          props.onChange({ name: "globalSearch", value: v.target.value })
        }
        placeholder={"start typing ..."}
      />
    </div>
  );
};

const PopoverFilter = () => <></>;
const FilterUnit = () => <></>;

export const NoRow = (props: NoRowProps): JSX.Element | null => {
  if (props.n > 0) {
    return null;
  }

  return <Alert type="warning">No rows found</Alert>;
};

export const ColCell = ({
  children,
  colSpan,
  style,
}: ColCellProps): JSX.Element => (
  <td colSpan={colSpan} style={style}>
    {children}
  </td>
);

export const HeaderUnit = (props: UIType.HeaderUnitProps): JSX.Element => {
  const { children } = props;

  return <th>{children}</th>;
};

export const OrderControllerUpAndDown = (
  props: OrderControllerUpAndDownProps
): JSX.Element => {
  return (
    <span>
      <span key={"asc"} onClick={(): void => props.onClick(true)}>
        <ChevronUp />
      </span>
      <span key={"desc"} onClick={(): void => props.onClick(false)}>
        <ChevronDown />
      </span>
    </span>
  );
};

const ChevronUp = () => <Icon name="chevron-up" />;
const ChevronDown = () => <Icon name="chevron-down" />;
const SortDefault = () => <Icon name="arrow" />;

export const OrderController = (props: OrderControllerProps): JSX.Element => {
  const { onClick, descAsc } = props;

  let Icon = SortDefault;
  if (descAsc !== null) {
    Icon = descAsc ? ChevronUp : ChevronDown;
  }

  return (
    <div
      style={{
        cursor: "pointer",
        display: "inline-block",
        color: descAsc === null ? "#ccc" : "#000",
      }}
      onClick={(): void => onClick(null)}
    >
      <Icon />
    </div>
  );
};

export const ListWrapper = (props: ListWrapperProps): JSX.Element => {
  const { children } = props;
  return <div className="overflow-x-auto">{children}</div>;
};

export const ListContainer = (props: ListContainerProps): JSX.Element => {
  const { children, maxHeight, stickyHeader = false } = props;
  return (
    <div
      className="container mx-auto"
      style={maxHeight ? { maxHeight } : undefined}
    >
      <table className="table-auto w-full">{children}</table>
    </div>
  );
};

export const Row = (props: RowProps): JSX.Element => {
  const { children } = props;
  return <tr>{children}</tr>;
};

export const ListHeader = (props: ListHeaderProps): JSX.Element => {
  const { children } = props;
  return <thead>{children}</thead>;
};

export const ListBody = ({ children }: ListBodyProps): JSX.Element => (
  <tbody>{children}</tbody>
);

export const RecordInfo = (props: RecordInfoProps): JSX.Element | null => {
  const { nPerPage, idx, n } = props;

  if (n === 0) {
    return null;
  }

  const { start, end } = paginationBoundaries(idx, nPerPage);

  return (
    <p className="pull-right">
      Showing {start + 1} to {Number(start) + Number(nPerPage) > n ? n : end} of{" "}
      {n} entries
    </p>
  );
};

export const PaginationWrapper = (
  props: PaginationWrapperProps
): JSX.Element => {
  return (
    <nav>
      <ul className="flex list-none">{props.children}</ul>
    </nav>
  );
};

export const PaginationUnit = (
  props: PaginationUnitProps
): JSX.Element | null => {
  const { isActive, isDisabled, children, onClick } = props;

  if (isDisabled) {
    return null;
  }

  const className =
    "px-4 py-2 mx-1 border border-gray-300 rounded" +
    (isActive ? " bg-blue-500 text-white" : " bg-white") +
    (isDisabled ? " opacity-50 cursor-not-allowed" : "");

  return (
    <li className="flex">
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export { FilterUnit, GlobalSearch, PopoverFilter, Loader };
