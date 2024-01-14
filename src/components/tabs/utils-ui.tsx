import React from "react";
import { Link } from "react-router-dom";
import { getClassName } from "./utils";
import * as T from "../../lib/tabs/type";

export const Li = ({ label, onClick, isSelected }: T.LiProps) => (
  <li className="nav-item">
    <a
      className={`${getClassName(isSelected)} ${
        isSelected
          ? "text-blue-500 border-b-2 border-blue-500"
          : "text-gray-600 hover:text-blue-500"
      } cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </a>
  </li>
);

export const LiNav = ({ label, path, isSelected }: T.LiNavigation) => (
  <li className="nav-item">
    <Link
      to={path}
      className={`${getClassName(isSelected)} ${
        isSelected
          ? "text-blue-500 border-b-2 border-blue-500"
          : "text-gray-600 hover:text-blue-500"
      }`}
    >
      {label}
    </Link>
  </li>
);

export const Ul = ({ children }: T.UlProps) => (
  <ul className="flex space-x-4">{children}</ul>
);
