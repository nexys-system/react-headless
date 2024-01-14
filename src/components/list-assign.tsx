// taken from https://material-ui.com/components/lists/#list-controls
import React from "react";
import { Checkbox } from "../components/form/inputs";
import { ListWrapperProps } from "../lib/table/ui-type";
import ListAssign, { UnitUIProps } from "../lib/list-assign";

const Loader = ({ isLoading }: { isLoading: boolean }): JSX.Element => {
  if (isLoading !== true) {
    return <></>;
  }

  return (
    <p>
      <small>
        &nbsp;<i>is being updated</i>
      </small>
    </p>
  );
};

const ListWrapper = ({ children }: ListWrapperProps) => (
  <ul className="list-disc pl-5">{children}</ul>
);

const ListUnitUI = ({ isChecked, label, isLoading, onChange }: UnitUIProps) => (
  <li className="flex items-center">
    <Checkbox value={isChecked} onChange={onChange} />
    <span className="ml-2">{label}</span>
    <Loader isLoading={isLoading} />
  </li>
);

export default ListAssign(ListWrapper, ListUnitUI);
