import React from "react";

import Spinner from "../spinner";

import FileUploadHeadless, {
  FileComponentProps,
} from "../../lib/form/file-upload";

const FileComponent = ({ onChange }: FileComponentProps) => (
  <label className="block cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
    <span className="mr-2">Select a file</span>
    <input type="file" className="hidden" onChange={onChange} />
  </label>
);

export default FileUploadHeadless(FileComponent, Spinner);
