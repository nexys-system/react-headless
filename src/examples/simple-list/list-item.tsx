import React from "react";

const ListItem = ({
  title,
  children,
  right,
}: {
  title: string;
  children?: JSX.Element;
  right?: JSX.Element;
}) => {
  return (
    <li className="flex justify-between items-center py-2">
      <div className="ml-2 mr-auto">
        <div className="font-semibold">{title}</div>
        {children}
      </div>
      {right}
    </li>
  );
};

export default ListItem;
