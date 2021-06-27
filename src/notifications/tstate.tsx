import React from 'react';

import * as Ctx from './context';
import { ToastProp } from './type';

const toast1 = {
  title: 'Nexys',
  content: ' Heads up, ',
  timestring: '10 seconds ago'
};

const _ts: ToastProp[] = [
  { title: 'Nexys', content: 'See? Just like this.', timestring: 'just now' },
  {
    title: 'Nexys',
    content: ' Heads up, toasts will stack automatically',
    timestring: '2 seconds ago'
  },
  toast1
];
/*
export const TState = () => {
  const addToast = Ctx.useToastContext();

  return (
    <>
      <button onClick={() => addToast.setToast(toast1)}>add toast</button>
    </>
  );
};*/

export const TState2 = () => {
  const state = Ctx.useToastContext();

  return <>{JSON.stringify(state)}</>;
};
