import React from "react";

import * as T from "../../lib/form/type";

import { FormWrapper, generateFormUI } from "../../lib/form/generator2";
import { InputGeneric, InputWrapper } from "../../components/form/inputs";

import { SubmitButton, BackButton } from "../../components/buttons/with-action";

const formDef2: T.FormDefUnit<any>[] = [
  {
    name: "name",
    label: "Name",
    uxType: T.FormUIType.Text,
    placeholder: "Add name",
    info: "Name of the attribute",
  },
  {
    name: "label",
    label: "Label",
    uxType: T.FormUIType.Text,
    placeholder: "Add label",
    info: "Label for the attribute",
  },
  {
    name: "placeholder",
    label: "Placeholder",
    uxType: T.FormUIType.Text,
    placeholder: "placeholder",
  },
  {
    name: "info",
    label: "Info",
    uxType: T.FormUIType.Text,
    placeholder: "info",
  },
  {
    name: "uxType",
    label: "UX Type",
    uxType: T.FormUIType.Switch,
  },
];

const FormDefs = () => {
  const [formDefs, setFormDefs] = React.useState<
    T.FormDefUnit<{ [k: string]: string }>[]
  >([]);
  const [addForm, setAddForm] = React.useState<boolean>(false);

  const handleAdd = (a: T.FormDefUnit<{ [k: string]: string }>) => {
    setFormDefs([...formDefs, a]);
    setAddForm(false);
  };

  const handleRemove = (idx: number) => {
    const f = formDefs.filter((_x, i) => i !== idx);
    setFormDefs(f);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-2 border-r">
        {addForm && (
          <>
            <FormWrapper
              FormUI={generateFormUI(
                InputGeneric,
                InputWrapper,
                SubmitButton
              )<T.FormDefUnit<{ [k: string]: string }>>(formDef2)}
              onSuccess={handleAdd}
            >
              <BackButton onClick={() => setAddForm(false)} />
            </FormWrapper>
          </>
        )}

        {!addForm && (
          <>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => setAddForm(true)}
            >
              Add Field
            </button>

            {formDefs.length === 0 && (
              <p>Click add to start buikding your form</p>
            )}
            {formDefs.length > 0 && (
              <>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Label</th>
                      <th>Placeholder</th>
                      <th>Info</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {formDefs.map((formDef, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {formDef.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formDef.label}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formDef.placeholder}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formDef.info}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleRemove(idx)}
                            className="text-red-600 hover:text-red-900"
                          >
                            x
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
      <div>
        <h2>Generated Form</h2>{" "}
        {formDefs.length > 0 && (
          <>
            <FormWrapper
              FormUI={generateFormUI(
                InputGeneric,
                InputWrapper,
                SubmitButton
              )(formDefs)}
              onSuccess={console.log}
            />
            <hr />
            <pre>{JSON.stringify(formDefs, null, 2)}</pre>
            <button
              onClick={() =>
                navigator.clipboard.writeText(JSON.stringify(formDefs))
              }
            >
              Copy
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FormDefs;
