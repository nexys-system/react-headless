import React from 'react';

import * as Form from '../lib/form';
import FormUnit from './unit';

import * as T from './type';

import * as V from '@nexys/validation';
import * as U from './utils';

import Loader from '../lib/loader';

const FormGenerator = <A, B>({
  formDef,
  onSuccess,
  isLoading = false,
  valueDefault = {},
  errors: errorsDefault,
  submit = { label: 'Submit' }
}: {
  formDef: T.FormDef<A>[];
  onSuccess: (v: A) => void;
  isLoading?: boolean;
  valueDefault?: Partial<A>;
  errors?: V.Type.ErrorOut | V.Type.Error;
  submit?: { label: string };
}) => {
  const [data, setData] = React.useState<Partial<A>>(valueDefault);
  const [errors, setErrors] =
    React.useState<V.Type.ErrorOut | V.Type.Error>(errorsDefault);

  React.useEffect(() => {
    setErrors(errorsDefault);
  }, [errorsDefault]);

  const validator = U.generateValidatorFromDef(formDef);

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    const v = V.Main.checkObject(data, validator);
    setErrors(v);

    // no errors found
    if (Object.values(v).length === 0) {
      //
      //alert(JSON.stringify(v));

      onSuccess(data as A);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formDef.map((fd, i) => {
        const name = fd.name;
        const errorUnit = errors && errors[name as string];
        return (
          <Form.Wrapper errors={errorUnit} key={i} label={fd.label}>
            <FormUnit
              fd={fd}
              errors={errorUnit}
              value={data[fd.name]}
              onChange={v => setData({ ...data, [fd.name]: v })}
              disabled={isLoading}
            />
          </Form.Wrapper>
        );
      })}

      <button disabled={isLoading} type="submit" className={'btn btn-primary'}>
        {isLoading && (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="sr-only">...Loading</span>
          </>
        )}

        {!isLoading && <>{submit.label}</>}
      </button>
    </form>
  );
};

export default FormGenerator;
