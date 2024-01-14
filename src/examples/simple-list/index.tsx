import React from "react";

import ListAdd from "./list-add";
import ListForm from "./list-form";
import ListPosition from "./list-position";

export default () => (
  <>
    <h1 className="text-2xl font-bold mb-4">Simple list</h1>

    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-1/2 px-2 mb-4">
        <ListAdd />
      </div>

      <div className="w-full md:w-1/2 px-2 mb-4">
        <ListForm />
      </div>

      <div className="w-full md:w-1/2 px-2 mb-4">
        <ListPosition />
      </div>
    </div>
  </>
);
