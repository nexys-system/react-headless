import React from 'react';

import * as T from './type';

const TabsGeneric =
  (Ul: (p: T.UlProps) => JSX.Element, Li: (p: T.LiProps) => JSX.Element) =>
  ({ tabs, tabIndex = 0, setTabIndex }: T.TabProps) =>
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
