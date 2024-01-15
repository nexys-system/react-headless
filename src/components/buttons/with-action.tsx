import React from "react";
import Spinner from "../spinner";
import BtnWithActionGeneric, { BtnProps } from "../../lib/buttons/with-action";
import { SubmitButtonProps } from "../../lib/form/type";

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

const getButtonClassName = (context?: "primary") => {
  const classBase = "m-2 px-4 py-2 border rounded-md text-sm font-medium ";

  if (context === "primary") {
    return (
      classBase +
      "border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
    );
  }
  return classBase + "hover:bg-gray-100 px-4 py-2";
};

export const Button = ({
  onClick,
  context,
  disabled,
  type,
  children,
}: {
  type?: "submit";
  disabled?: boolean;
  context?: "primary";
  onClick?: () => void;
  children: string | JSX.Element;
}) => {
  const className = getButtonClassName(context);

  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SubmitButton = ({ disabled, loading }: SubmitButtonProps) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <Button type="submit" disabled={disabled} context="primary">
      Submit
    </Button>
  );
};

export const BackButton = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick}>Back</Button>
);
