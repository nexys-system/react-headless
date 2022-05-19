import { Route, Routes } from "react-router-dom";
import List from "./list";
import Detail from "./detail";

export default ({ instance }: { instance: { uuid: string } }) => {
  return (
    <Routes>
      <Route path={"/"} element={<List instance={instance} />} />
      <Route
        path={"/:uuid/detail/*"}
        element={<Detail instance={instance} />}
      />
    </Routes>
  );
};
