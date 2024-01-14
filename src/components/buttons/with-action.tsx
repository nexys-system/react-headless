import React from "react";

import BtnWithActionGeneric, { BtnProps } from "../../lib/buttons/with-action";

const Btn = ({ children, disabled, onClick }: BtnProps) => {
  return (
    <button
      className={`border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition ease-in-out duration-150 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const BtnWithAction = BtnWithActionGeneric(Btn);

export default BtnWithAction;
