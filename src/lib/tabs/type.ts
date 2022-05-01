export interface UlProps {
  children: JSX.Element[];
}
export interface LiProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface LiNavigation {
  label: string;
  path: string;
  isSelected: boolean;
}

export interface TabProps {
  tabIndex?: number;
  tabs: { label: string }[];
  setTabIndex: (d: number) => void;
}

export interface TabNavigationProps {
  label: string;
  path?: string;
  Component: () => JSX.Element;
}

export interface NavigationProps {
  tabs: TabNavigationProps[];
  pathPrefix?: string;
}
