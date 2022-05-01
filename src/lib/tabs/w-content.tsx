import React from 'react';

import * as T from './type';

const PreTabsWithContent =
  (Tabs: (p: T.TabProps) => JSX.Element) =>
  ({ tabs }: { tabs: { label: string; Content: () => JSX.Element }[] }) => {
    const [tabIndex, setTabIndex] = React.useState<number>(0);

    const { Content } = tabs[tabIndex];

    return (
      <>
        <Tabs tabs={tabs} setTabIndex={setTabIndex} tabIndex={tabIndex} />
        <Content />
      </>
    );
  };

export default PreTabsWithContent;
