import React from "react";
import { ColProps, HeaderProps, RowProps } from "../../lib/card";
import { ButtonProps } from "../../lib/layout/type";

export const Header = ({ title, description }: HeaderProps) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
);

export const Row = ({ children }: RowProps) => (
  <div className={`grid grid-cols-12 gap-4`}>{children}</div>
);

export const Col = ({ children, width }: ColProps) => {
  const widthClass = `col-span-${width}`;
  return <div className={widthClass}>{children}</div>;
};

export const BackBtn = ({ onClick }: ButtonProps) => (
  <div className="float-right">
    <button
      onClick={onClick}
      type="button"
      className="text-xs px-2 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded"
    >
      Back
    </button>
  </div>
);
