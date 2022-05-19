import { Route, Routes } from "react-router-dom";
import List from "./list";
import Detail from "./detail";

export default () => {
  return (
    <Routes>
      <Route path={"/"} element={<List />} />
      <Route path={"/:uuid/detail/*"} element={<Detail />} />
    </Routes>
  );
};
