export interface HeaderProps {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
}

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: JSX.Element;
}

export interface RowProps {
  children: JSX.Element[] | JSX.Element;
}

export interface ColProps extends RowProps {
  width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
