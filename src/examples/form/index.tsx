import React from "react";

import { FormWrapperLegacy } from "../../lib/form/form-wrapper";

import { FormDataShape, Out } from "./type";
import FormUI from "./ui";
import FormGenerated from "./generated";

import { apiCall, onSuccess, cartoonCharacters, shape } from "./utils";
import FreeUI from "./free-ui";
import GeneratedForm from "./generated-form";
import FormDefs from "./ui-generate";

const Form = FormWrapperLegacy<FormDataShape, Out>(FormUI, shape, apiCall);

export default () => (
  <>
    <h1 className="font-bold text-2xl py-2">Form</h1>
    <h3 className="font-bold text-xl py-2">Form Simple</h3>

    <p>
      Form demo.&nbsp;
      <small>
        To simulate a form rejection insert one of the following first names:{" "}
        <code>{JSON.stringify(cartoonCharacters)}</code>
      </small>
    </p>

    <Form onSuccess={onSuccess} onErrors={(errors) => ({ errors })} />

    <hr className="my-3" />

    <h3 className="font-bold text-xl py-2">Form Generated</h3>

    <FormGenerated onSuccess={onSuccess} onErrors={(errors) => ({ errors })} />
    <hr className="my-3" />

    <h3 className="font-bold text-xl py-2">Form Free UI</h3>

    <FreeUI />

    <hr className="my-3" />

    <h3 className="font-bold text-xl py-2">Generated Form</h3>

    <GeneratedForm />

    <hr className="my-3" />

    <h3 className="font-bold text-xl py-2">UI for Form Generation</h3>

    <FormDefs />
  </>
);
