import React from 'react';

import { Statement } from '../components/code';

export default () => {
  return (
    <>
      <h1>Code</h1>
      <p>Formatted code extract</p>

      <Statement code={'yarn add @nexys/tailwind-react-ui'} />

      <p>with copy</p>
      <Statement
        code={'yarn add @nexys/tailwind-react-ui'}
        copyToClipboard={true}
      />
      <br />
    </>
  );
};
