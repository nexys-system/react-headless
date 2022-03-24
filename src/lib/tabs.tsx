import React from 'react';

export interface TabProps {
  tabIndex?: number;
  tabs: { label: string }[];
  setTabIndex: (d: number) => void;
}

const TabsGeneric =
  (
    Ul: ({ children }: { children: JSX.Element[] }) => JSX.Element,
    Li: (p: {
      label: string;
      isSelected: boolean;
      onClick: () => void;
    }) => JSX.Element
  ) =>
  ({ tabs, tabIndex = 0, setTabIndex }: TabProps) =>
    (
      <Ul>
        {tabs.map((tab, i) => (
          <Li
            key={i}
            label={tab.label}
            isSelected={i === tabIndex}
            onClick={() => setTabIndex(i)}
          />
        ))}
      </Ul>
    );

export default TabsGeneric;