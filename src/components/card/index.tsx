import React from "react";

import { CardProps } from "../../lib/card";

const Card = ({ title, subtitle, children }: CardProps) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-4">
      {title && <h5 className="text-lg font-bold">{title}</h5>}
      {subtitle && (
        <h6 className="text-sm text-gray-500 mb-2">Card subtitle</h6>
      )}
      {children}
    </div>
  </div>
);

export default Card;
