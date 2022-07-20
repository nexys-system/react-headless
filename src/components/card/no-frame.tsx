import React from "react";

import { CardProps } from "../../lib/card";

const Card = ({ title, subtitle, children }: CardProps) => (
  <div>
    {title && <h5 className="card-title">{title}</h5>}
    {subtitle && (
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    )}
    {children}
  </div>
);

export default Card;
