import React from "react";

import ViewGeneric, { LayoutProps, RowProps } from "../lib/view";
import Card from "../components/card";

const Layout = ({ children }: LayoutProps) => (
  <Card>
    <>{children}</>
  </Card>
);

export const Row = (p: RowProps) => (
  <dl className="flex flex-wrap">
    <dt className="font-semibold w-1/3">{p.label}:</dt>
    <dd className="w-2/3">{p.value}</dd>
  </dl>
);

const View = ViewGeneric(Row, Layout);

export default View;
