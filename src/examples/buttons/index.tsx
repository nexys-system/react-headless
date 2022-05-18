import React from 'react';

import BtnWithAction from '../../components/buttons/with-action';
import Spinner from '../../components/spinner';

import { delay } from '../../lib/utils';

interface ExpectedResult {
  message: string;
}

const SuccessContent = ({ data }: { data?: ExpectedResult }) => (
  <span>
    Success, <code>{data?.message}</code>
  </span>
);
const FailedContent = () => <span>Success</span>;
const LoadingContent = () => <Spinner />;

const applyAction = async () => {
  await delay(1500);

  return Promise.resolve({ message: 'action executed' });
};

export default () => {
  return (
    <>
      <h1>Button with action</h1>
      <BtnWithAction
        asyncAction={applyAction}
        label={'Click me'}
        SuccessContent={SuccessContent}
        LoadingContent={LoadingContent}
        FailedContent={FailedContent}
      />
    </>
  );
};
