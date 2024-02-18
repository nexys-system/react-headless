import React from "react";

export interface HeaderProps {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
}

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export interface RowProps {
  children: React.ReactNode;
}

export interface ColProps extends RowProps {
  width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
