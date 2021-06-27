import React from 'react';

import Form from './form';
import * as T from './type';
import * as V from '@nexys/validation';
import * as Ctx from '../notifications/context';
import { NotificationType } from '../notifications/type';

interface Data {
  firstName: string;
  age: number;
}

const formDef: T.FormDef<Data>[] = [
  {
    name: 'firstName',
    label: 'FirstName',
    uiType: T.FormType.Text,
    optional: false
  },
  { name: 'age', label: 'Age', uiType: T.FormType.Number, optional: false }
];

const Toast = () => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{ position: 'relative', minHeight: '200px' }}
    >
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="mr-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body">See? Just like this.</div>
        </div>

        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="mr-auto">Bootstrap</strong>
            <small className="text-muted">2 seconds ago</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body">
            Heads up, toasts will stack automatically
          </div>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<V.Type.ErrorOut | V.Type.Error>();
  const { setNotification } = Ctx.useToastContext();

  const handleSubmit = async () => {
    setLoading(true);

    setTimeout(() => {
      console.log('ds');
      setLoading(false);
      setErrors({
        firstName: ['sdf']
      });
      setNotification({ text: 'hello2', type: NotificationType.banner });
      //setToast({ text: 'my content', type: NotificationType.banner });
    }, 2000);

    //Promise.resolve();
    //
  };

  return (
    <>
      <h1>Form</h1>
      <Form
        formDef={formDef}
        isLoading={isLoading}
        onSuccess={handleSubmit}
        errors={errors}
      />
      <Toast />
    </>
  );
};
