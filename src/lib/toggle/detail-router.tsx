import React from "react";
import { Routes, Route } from "react-router-dom";

const DetailRouterGeneric =
  <A,>(
    View: ({ data }: { data: A }) => JSX.Element,
    Edit: ({ data }: { data: A }) => JSX.Element
  ) =>
  ({ data }: { data: A }) => {
    return (
      <Routes>
        <Route path="/" element={<View data={data} />} />
        <Route path="/edit" element={<Edit data={data} />} />
      </Routes>
    );
  };
    
export default DetailRouterGeneric;
