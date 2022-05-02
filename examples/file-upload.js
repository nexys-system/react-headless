import React from "../_snowpack/pkg/react.js";
import FileUpload from "../components/form/file-upload.js";
import {delay} from "../lib/utils.js";
const onSuccess = async (f) => {
  await delay(500);
  const t = await f.text();
  console.log(t);
  return Promise.resolve();
};
export default () => /* @__PURE__ */ React.createElement(FileUpload, {
  onSuccess
});
