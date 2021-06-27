import React from 'react';
import * as Form from '../lib/form';
import * as T from './type';

const FormUnit = <A,>({
  fd,
  errors,
  value,
  onChange,
  disabled
}: {
  fd: T.FormDef<A>;
  errors?: string[];
  value: any;
  disabled: boolean;
  onChange: (v: any) => void;
}) => {
  const commonProps = { errors, value, onChange, disabled };

  switch (fd.uiType) {
    case T.FormType.Text:
      return <Form.Input.Text {...commonProps} />;
    case T.FormType.Number:
      return <Form.Input.Number {...commonProps} />;
  }
};

export default FormUnit;
