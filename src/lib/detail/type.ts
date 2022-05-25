import { FormViewDef } from "../form/type";
import * as T from "../layout/type";

export type DetailProps<A, Out> = Omit<T.Layout<A>, "cards"> & {
  detailCardTitle?: string;
  cards?: T.Card<A>[];
  defToggle: FormViewDef<A>[];
  asyncCalls: {
    getData: () => Promise<A>;
    updateData: (a: A) => Promise<Out>;
  };
};
