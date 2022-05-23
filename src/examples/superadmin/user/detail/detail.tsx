import { ToggleFromDef } from "../../../../components/toggle";
import { FormUIType, FormViewDef } from "../../../../lib/form/type";
import { UserData } from "../../data";
import { User } from "../type";

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

export default ToggleFromDef(def, UserData.update);
