import React from "react";

import FormGenerated from "../../lib/form/generator/form";

import * as UI from "./inputs";
import { FormUIGeneratorProps } from "../../lib/form/type";

const p: FormUIGeneratorProps = {
  InputWrapper: UI.InputWrapper,
  InputGeneric: UI.InputGeneric,
  Button: () => (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="submit"
    >
      Send
    </button>
  ),
};

export default FormGenerated(p);
