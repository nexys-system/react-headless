import React from 'react';

import BtnWithActionGeneric, { BtnProps } from '../../lib/buttons/with-action';

const Btn = ({ children, disabled, onClick }: BtnProps) => {
  return (
    <button
      className="btn btn-outline-primary"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const BtnWithAction = BtnWithActionGeneric(Btn);

export default BtnWithAction;
