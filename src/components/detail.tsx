import DetailHeadless from "../lib/detail";
import PreLayout from "./layout";
import LoadDataAsync from "./load-data-async";
import { ToggleFromDef } from "./toggle";

const Detail = DetailHeadless(PreLayout, LoadDataAsync, ToggleFromDef);

export default Detail;
