import React from 'react';
import { ColProps, HeaderProps, RowProps } from '../../lib/card';

import { ButtonProps } from '../../lib/layout/type';

export const Header = ({ title, description }: HeaderProps) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
);

export const Row = ({ children }: RowProps) => (
  <div className="row">{children}</div>
);

export const Col = ({ children, width }: ColProps) => (
  <div className={'col-md-' + width}>{children}</div>
);

export const BackBtn = ({ onClick }: ButtonProps) => (
  <div className="float-right">
    <button
      onClick={onClick}
      type="button"
      className=" btn-sm btn btn-secondary"
    >
      Back
    </button>
  </div>
);
