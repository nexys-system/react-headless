import React from "react";

import StatusChange from "../components/status-change";

const status = [
  { id: 1, label: "active" },
  { id: 2, label: "pending" },
  { id: 3, label: "inactive" },
];

export default () => {
  return (
    <>
      <h3>Status Change</h3>
      <StatusChange status={status} onChange={(s) => alert(`chosen ${s}`)} />
      <br />
      <br />
      <StatusChange status={status} selected={3} onChange={() => {}} />
    </>
  );
};
