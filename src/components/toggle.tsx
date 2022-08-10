import { FormWrapperProps } from "../lib/form/form-wrapper";
import { ViewStructureUnit } from "../lib/view";
import ViewGeneric, { RowProps, toViewStructure } from "../lib/view";
import ToggleHeadless, { LayoutProps } from "../lib/toggle";
import { FormViewDef } from "../lib/form/type";
import PreForm from "./form/generator";

const Row = (p: RowProps) => (
  <li>
    {p.label}: {p.value}
  </li>
);

const View = ViewGeneric(Row);

const LayoutView = ({ setIsForm, children }: LayoutProps) => (
  <>
    {children}
    <button
      className="btn btn-sm btn-secondary"
      onClick={() => setIsForm(true)}
    >
      Edit
    </button>
  </>
);

const LayoutForm = ({ setIsForm, children }: LayoutProps) => (
  <>
    {children}
    <button
      className="btn btn-sm btn-secondary"
      onClick={() => setIsForm(false)}
    >
      Back
    </button>
  </>
);

const PreToggle = <A, Out>(
  structure: ViewStructureUnit<A>[],
  Form: (p: FormWrapperProps<A, Out>) => JSX.Element
) => ToggleHeadless(structure, Form, View, LayoutView, LayoutForm);

export const ToggleFromDef = <A, Out>(
  def: FormViewDef<A>[],
  apiCall: (data: A) => Promise<Out>
) => {
  const F = PreForm(def, apiCall);

  const structure: ViewStructureUnit<A>[] = toViewStructure(def);
  return ToggleHeadless(structure, F, View, LayoutView, LayoutForm);
};

export default PreToggle;
