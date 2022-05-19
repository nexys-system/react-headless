import { ToggleFromDef } from "../../../../components/toggle";
import { FormUIType, FormViewDef } from "../../../../lib/form/type";
import { User } from "../type";

interface Out {
  id: number;
}

const apiCall = async (): Promise<Out> => {
  return { id: 2 };
};

const def: FormViewDef<User>[] = [
  {
    label: "First Name",
    name: "firstName",
    uiType: FormUIType.Text,
    optional: false,
  },
  {
    label: "Last Name",
    name: "lastName",
    uiType: FormUIType.Text,
    optional: false,
  },
];

export default ToggleFromDef(def, apiCall);
