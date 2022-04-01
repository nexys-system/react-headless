import React from 'react';

import TabsGeneric from '../lib/tabs';

const getClassName = (isSelected: boolean) => {
  const classNames = ['nav-link'];

  if (isSelected) {
    classNames.push('active');
  }

  return classNames.join(' ');
};

const Li = ({
  label,
  onClick,
  isSelected
}: {
  label: string;
  onClick: () => void;
  isSelected: boolean;
}) => (
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
const Ul = ({ children }: { children: JSX.Element[] }) => (
  <ul className="nav nav-pills">{children}</ul>
);
const Tabs = TabsGeneric(Ul, Li);

export default Tabs;
