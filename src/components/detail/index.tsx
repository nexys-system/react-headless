import DetailHeadless from "../../lib/detail";
import PreLayout from "../layout";
import { LayoutNoFrame } from "../layout";
import LoadDataAsync from "../load-data-async";
import { ToggleFromDef } from "../toggle";

export const Detail = DetailHeadless(PreLayout, LoadDataAsync, ToggleFromDef);

export const DetailNoFrame = DetailHeadless(
  LayoutNoFrame,
  LoadDataAsync,
  ToggleFromDef
);

export default Detail;
