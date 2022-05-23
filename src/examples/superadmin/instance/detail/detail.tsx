import { ToggleFromDef } from "../../../../components/toggle";
import { FormUIType, FormViewDef } from "../../../../lib/form/type";
import { InstanceData } from "../../data";
import { Instance } from "../type";

const def: FormViewDef<Instance>[] = [
  {
    label: "Name",
    name: "name",
    uiType: FormUIType.Text,
    optional: false,
  },
];

export default ToggleFromDef(def, InstanceData.update);
