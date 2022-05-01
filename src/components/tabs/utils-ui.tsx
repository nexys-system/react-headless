import React from 'react';
import { Link } from 'react-router-dom';
import { getClassName } from './utils';
import * as T from '../../lib/tabs/type';

export const Li = ({ label, onClick, isSelected }: T.LiProps) => (
  <li className="nav-item">
    <a
      className={getClassName(isSelected)}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {label}
    </a>
  </li>
);

export const LiNav = ({ label, path, isSelected }: T.LiNavigation) => (
  <li className="nav-item">
    <Link to={path} className={getClassName(isSelected)}>
      {label}
    </Link>
  </li>
);

export const Ul = ({ children }: T.UlProps) => (
  <ul className="nav nav-pills">{children}</ul>
);
