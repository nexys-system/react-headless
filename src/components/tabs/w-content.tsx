import React from 'react';

import Tabs from '.';

const TabsWithContent = ({
  tabs
}: {
  tabs: { label: string; Content: () => JSX.Element }[];
}) => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const { Content } = tabs[tabIndex];

  return (
    <>
      <Tabs tabs={tabs} setTabIndex={setTabIndex} tabIndex={tabIndex} />
      <Content />
    </>
  );
};

export default TabsWithContent;
