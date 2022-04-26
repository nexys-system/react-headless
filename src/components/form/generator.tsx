import React from 'react';

import FormGenerated from '../../lib/form/generator/form';
import * as UI from '../../components/form/inputs';

const p = {
  InputWrapper: UI.InputWrapper,
  InputGeneric: UI.InputGeneric,
  Button: () => (
    <button className="btn btn-primary" type="submit">
      Send
    </button>
  )
};

export default FormGenerated(p);
