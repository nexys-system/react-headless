import React from "react";

import Tabs from "../../components/tabs/index";
import TabsWithContent from "../../components/tabs/w-content";

import Nav from "./navigation";
import NestedNavigation from "./nested-navigation";

const tabs = [{ label: "one" }, { label: "two" }];

export default () => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  return (
    <>
      <h1>Tabs</h1>

      <h2>Simple Tabs</h2>
      <Tabs tabs={tabs} setTabIndex={setTabIndex} tabIndex={tabIndex} />

      <h2>Tabs With Content</h2>

      <TabsWithContent
        tabs={[
          { label: "one", Content: () => <p>One</p> },
          { label: "two", Content: () => <p>Two</p> },
        ]}
      />

      <h2>Navigation</h2>

      <Nav />

      <h2>Nested Navigation</h2>

      <NestedNavigation />
    </>
  );
};
