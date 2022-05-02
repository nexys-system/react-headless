import React, {useState} from "../../_snowpack/pkg/react.js";
const FileUpload = (FileComponent, Spinner) => ({onSuccess}) => {
  const [loading, setLoading] = useState(false);
  const handleChange = async ({
    target
  }) => {
    console.log("here");
    setLoading(true);
    const {files} = target;
    if (!files) {
      throw Error("file is undefined");
    }
    const fileArray = Array.from(files);
    if (fileArray.length === 0) {
      throw Error("file array is empty");
    }
    const [file] = fileArray;
    try {
      await onSuccess(file);
    } catch (err) {
    }
    setLoading(false);
  };
  if (loading) {
    return /* @__PURE__ */ React.createElement(Spinner, null);
  }
  return /* @__PURE__ */ React.createElement(FileComponent, {
    onChange: handleChange
  });
};
export default FileUpload;
