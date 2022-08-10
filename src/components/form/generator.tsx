import React from "react";

import FormGenerated from "../../lib/form/generator/form";
import { FormUIGeneratorProps } from "../../lib/form/generator/ui";

import * as UI from "../../components/form/inputs";

const p: FormUIGeneratorProps = {
  InputWrapper: UI.InputWrapper,
  InputGeneric: UI.InputGeneric,
  Button: () => (
    <button className="btn btn-primary" type="submit">
      Send
    </button>
  ),
};

export default FormGenerated(p);
