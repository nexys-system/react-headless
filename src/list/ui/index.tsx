import React from 'react';

import * as UIType from '../../lib/list/ui-type';
import { paginationBoundaries } from '../../lib/list/utils/pagination-utils';

const Loader = () => <p>Loading...</p>;

const Alert = ({
  // type = 'success',
  children
}: {
  children: React.ReactNode | JSX.Element;
  type?: 'error' | 'success' | 'info' | 'warning';
}): JSX.Element => <div className={'alert'}>{children}</div>;

const GlobalSearch = () => <></>;
const PopoverFilter = () => <></>;
const FilterUnit = () => <></>;

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
  OrderControllerProps
} from '../../lib/list/ui-type';

export const NoRow = (props: NoRowProps): JSX.Element | null => {
  if (props.n > 0) {
    return null;
  }

  return <Alert type="warning">No rows found</Alert>;
};

export const PaginationWrapper = (
  props: PaginationWrapperProps
): JSX.Element => {
  return (
    <nav>
      <ul className="pagination">{props.children}</ul>
    </nav>
  );
};

export const PaginationUnit = (
  props: PaginationUnitProps
): JSX.Element | null => {
  const { isActive, isDisabled, children, onClick } = props;

  // here we disable the button in case it is not valid
  if (isDisabled) {
    return null;
  }

  const className =
    'page-item' + (isActive ? ' active' : '') + (isDisabled ? ' disabled' : '');

  return (
    <li className={className}>
      <button className="page-link" onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export const ColCell = (props: ColCellProps): JSX.Element => {
  const { children, colSpan, style } = props;
  return (
    <td colSpan={colSpan} style={style}>
      {children}
    </td>
  );
};

export const HeaderUnit = (props: UIType.HeaderUnitProps): JSX.Element => {
  const { children } = props;

  return <th>{children}</th>;
};

const Icon = ({ name }: { name: string }) => <i className={'fa fa-' + name} />;

export const OrderControllerUpAndDown = (
  props: OrderControllerUpAndDownProps
): JSX.Element => {
  return (
    <span>
      <span key={'asc'} onClick={(): void => props.onClick(true)}>
        <ChevronUp />
      </span>
      <span key={'desc'} onClick={(): void => props.onClick(false)}>
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
        cursor: 'pointer',
        display: 'inline-block',
        color: descAsc === null ? '#ccc' : '#000'
      }}
      onClick={(): void => onClick(null)}
    >
      <Icon />
    </div>
  );
};

export const ListWrapper = (props: ListWrapperProps): JSX.Element => {
  const { children } = props;
  return <div className="table-responsive-sm">{children}</div>;
};

export const ListContainer = (props: ListContainerProps): JSX.Element => {
  const { children, maxHeight, stickyHeader = false } = props;
  return (
    <div className={'container'} style={maxHeight ? { maxHeight } : undefined}>
      <table className={'table table-striped'}>{children}</table>
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
      Showing {start + 1} to {Number(start) + Number(nPerPage) > n ? n : end} of{' '}
      {n} entries
    </p>
  );
};

export { FilterUnit, GlobalSearch, PopoverFilter, Loader };
