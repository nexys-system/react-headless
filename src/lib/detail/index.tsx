import React from "react";
import { LoadDataAsyncProps } from "../components";
import { DetailProps } from "../detail/type";
import { FormViewDef } from "../form/type";
import * as T from "../layout/type";

const DetailHeadless =
  (
    PreLayout: <A>(p: T.Layout<A>) => (p: { data: A }) => JSX.Element,
    LoadDataAsync: <A>(p: LoadDataAsyncProps<A>) => JSX.Element,
    ToggleFromDef: <A, Out>(
      def: FormViewDef<A>[],
      apiCall: (data: A) => Promise<Out>
    ) => ({ data }: { data: A }) => JSX.Element
  ) =>
  <A, Out = any>({
    cards: preCards = [],
    defToggle,
    asyncCalls,
    detailCardTitle = "Detail",
    ...rest
  }: DetailProps<A, Out>) => {
    const Toggle = ToggleFromDef(defToggle, asyncCalls.updateData);

    const CardDetail = { title: detailCardTitle, Component: Toggle };

    const cards = [CardDetail, ...preCards];

    const def: T.Layout<A> = { ...rest, cards };

    const Layout = PreLayout<A>(def);

    return <LoadDataAsync getData={asyncCalls.getData} Component={Layout} />;
  };

export default DetailHeadless;
