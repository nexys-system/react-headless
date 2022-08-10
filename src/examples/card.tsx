import React from "react";

import Card from "../components/card";

export default () => {
  return (
    <>
      <h1>Card</h1>
      <Card title={"my title"} subtitle={"my subtitle"}>
        <p>same content</p>
      </Card>
    </>
  );
};
