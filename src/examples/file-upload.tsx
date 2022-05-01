import React from 'react';

import FileUpload from '../components/form/file-upload';
import { delay } from '../lib/utils';

const onSuccess = async (f: File) => {
  await delay(500);
  const t = await f.text();
  console.log(t);
  return Promise.resolve();
};

export default () => <FileUpload onSuccess={onSuccess} />;
