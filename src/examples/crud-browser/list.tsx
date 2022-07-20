import LoadDataAsync from "../../components/load-data-async";
import List from "../../components/table";
import { Definition } from "../../lib/types";

const EntityList =
  <A,>(def: Definition<A>) =>
  ({ data }: { data: any[] }): JSX.Element =>
    <List config={{ search: false }} data={data} def={def} />;

export default <A,>(def: Definition<A>, getList: () => Promise<A[]>) =>
  () =>
    <LoadDataAsync Component={EntityList(def)} getData={getList} />;
