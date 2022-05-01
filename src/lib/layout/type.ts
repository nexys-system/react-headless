import { CardProps, ColProps, RowProps } from '../card';
import { NavigationProps, TabNavigationProps, TabProps } from '../tabs/type';

export interface Card<A> {
  title?: string;
  subtitle?: string;
  Component: (props: { data: A; setData?: (a: A) => void }) => JSX.Element;
  width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export interface CardsWithTab<A> {
  [tabName: string]: Card<A>[];
}

export interface Layout<A> {
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  description?: string | JSX.Element;
  cards: Card<A>[] | CardsWithTab<A>;
  backRedirect?: string;
  pathPrefix?: string;
}

export interface ButtonProps {
  onClick: () => void;
}

export interface CardsWithTabProps<A> {
  cards: Card<A>[] | CardsWithTab<A>;
  data: A;
  setData: (a: A) => void;
}

export interface CardsWithNavProps<A> {
  cards: CardsWithTab<A>;
  data: A;
  setData: (a: A) => void;
}

export interface CardsOuterProps {
  Card: (p: CardProps) => JSX.Element;
  Col: (p: ColProps) => JSX.Element;
  Row: (p: RowProps) => JSX.Element;
  pathPrefix?: string;
}

export interface CardsWithTabsOuterProps extends CardsOuterProps {
  Tabs: (p: TabProps) => JSX.Element;
}

export interface CardsWithNavOuterProps extends CardsOuterProps {
  Navs: (p: NavigationProps) => JSX.Element;
  pathPrefix?: string;
}
