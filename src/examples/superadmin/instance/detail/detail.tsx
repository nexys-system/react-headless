import { ToggleFromDef } from "../../../../components/toggle";
import { FormUIType, FormViewDef } from "../../../../lib/form/type";
import { Instance } from "../type";

interface Out {
  id: number;
}

const apiCall = async (): Promise<Out> => {
  return { id: 2 };
};

const def: FormViewDef<Instance>[] = [
  {
    label: "Name",
    name: "name",
    uiType: FormUIType.Text,
    optional: false,
  },
];

export default ToggleFromDef(def, apiCall);
