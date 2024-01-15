import { ViewStructureUnit } from "../lib/view";
import ViewGeneric, { toViewStructure } from "../lib/view";
import ToggleHeadless, { LayoutProps } from "../lib/toggle";
import { FormViewDef, FormWrapperOnActionProps } from "../lib/form/type";
import PreForm from "./form/generator";
import { Row } from "./view";

const View = ViewGeneric(Row);

const LayoutView = ({ setIsForm, children }: LayoutProps) => (
  <>
    {children}
    <button
      className="text-xs bg-gray-600 hover:bg-gray-700 text-white py-1 px-3 rounded"
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
      className="text-xs bg-gray-600 hover:bg-gray-700 text-white py-1 px-3 rounded"
      onClick={() => setIsForm(false)}
    >
      Back
    </button>
  </>
);

const PreToggle = <A, Out>(
  structure: ViewStructureUnit<A>[],
  Form: (p: FormWrapperOnActionProps<A, Out>) => JSX.Element
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
