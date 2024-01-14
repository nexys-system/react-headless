import React from "react";
import { Link } from "react-router-dom";
import { menus } from "../links";
import { title } from "../config";

export default () => (
  <header className="bg-white border-b shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/" className="text-xl font-semibold text-gray-900">
            {title}
          </Link>
        </div>
        <nav className="hidden md:flex space-x-10">
          {menus.map((menu, i) => (
            <Link
              key={i}
              to={menu.link}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  </header>
);
