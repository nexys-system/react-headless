import React from 'react';

import Spinner from '../spinner';

import FileUploadHeadless, {
  FileComponentProps
} from '../../lib/form/file-upload';

const FileComponent = ({ onChange }: FileComponentProps) => (
  <label>
    <span>Select a file</span>
    <input type="file" className="hidden" onChange={onChange} />
  </label>
);

export default FileUploadHeadless(FileComponent, Spinner);
