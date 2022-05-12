import React from "react";

import StatusChange from "../components/status-change";
import { delay } from "../lib/utils";

const status = [
  { id: 1, label: "active" },
  { id: 2, label: "pending" },
  { id: 3, label: "inactive" },
];

export default () => {
  return (
    <>
      <h3>Status Change</h3>
      <h4>Simple</h4>
      <StatusChange
        status={status}
        onChange={(s) => Promise.resolve(alert(`chosen ${s}`))}
      />
      <br />
      <br />
      <h4>With loading state</h4>
      <StatusChange
        status={status}
        selected={3}
        onChange={async () => {
          await delay(1000);
        }}
      />
    </>
  );
};
