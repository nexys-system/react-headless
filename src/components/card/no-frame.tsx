import React from "react";

import { CardProps } from "../../lib/card";

const Card = ({ title, subtitle, children }: CardProps) => (
  <div className="bg-white shadow-lg rounded-lg p-4">
    {title && <h5 className="text-xl font-semibold mb-2">{title}</h5>}
    {subtitle && <h6 className="text-md text-gray-500 mb-4">{subtitle}</h6>}
    {children}
  </div>
);

export default Card;
