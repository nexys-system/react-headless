import React from "react";

import * as Type from "../../lib/types/definition";
import GenericTable from "../../components/table";
import * as U from "./utils";

const sampleArray = [{ name: "john", lastName: "Doe" }, { name: "daniel" }];

const FormArray = ({ onSuccess }: { onSuccess: (array: any[]) => void }) => {
  const [input, setInput] = React.useState<string | undefined>(
    JSON.stringify(sampleArray, null, 2)
  );
  const [errors, setErrors] = React.useState<string | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || input === "") {
      setErrors("nothing was input");
      return;
    }

    try {
      const jInput = JSON.parse(input);

      if (!Array.isArray(jInput)) {
        setErrors("is not a JSON array");
        return;
      }

      if (jInput.length === 0) {
        setErrors("empty array");
        return;
      }

      const isObjectArray: boolean = jInput
        .map((x) => typeof x === "object")
        .reduce((a, b) => {
          return a && b;
        });

      if (!isObjectArray) {
        setErrors("is not an array of objects");
        return;
      }

      setErrors(undefined);
      onSuccess(jInput);
    } catch (err) {
      setErrors("could not be parsed as JSON");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors && <p className="text-red-500">{errors}</p>}
      <textarea
        value={input || ""}
        placeholder="paste a JSON table"
        onChange={(v) => setInput(v.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

const ShowStructure = ({
  structure,
  onChange,
}: {
  structure: Type.DefinitionItem<any>[];
  onChange: (s: Type.DefinitionItem<any>[]) => void;
}) => {
  const [innerStructure, setInnerStructure] =
    React.useState<Type.DefinitionItem<any>[]>(structure);

  Function();
  return (
    <ul>
      {structure.map((s, i) => {
        const f = innerStructure.findIndex((x) => x.name === s.name);
        const isChecked = f > -1;
        return (
          <li key={i}>
            <>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                  const innerStructureKeys = innerStructure.map((x) => x.name);

                  const newStruc = isChecked
                    ? innerStructure.filter((x) => x.name !== s.name)
                    : structure.filter(
                        (x) =>
                          innerStructureKeys.includes(x.name) ||
                          x.name === s.name
                      );
                  setInnerStructure(newStruc);
                  onChange(newStruc);
                }}
              />{" "}
              {s.name}
              <input
                placeholder="insert custom render function, e.g. 'return x.name;'"
                type="text"
                value={s.render ? JSON.stringify(s.render) : undefined}
                onChange={(v) => {
                  try {
                    const render = (x: any) => {
                      try {
                        const w = Function("x", v.target.value)(x);

                        return String(w);
                      } catch (err) {
                        return "could not display custom";
                      }
                    };
                    console.log({ render }, render({ name: "a" }));
                    const newStruc = innerStructure.map((x) => {
                      if (x.name === s.name) {
                        return { ...x, render };
                      }

                      return x;
                    });

                    console.log(newStruc);
                    setInnerStructure(newStruc);
                    onChange(newStruc);
                  } catch (err) {}
                }}
              />
            </>
          </li>
        );
      })}
    </ul>
  );
};

const Show = ({ data }: { data: any[] }) => {
  const structure = U.analyzeArray(data);

  const [innerStructure, setInnerStructure] =
    React.useState<Type.DefinitionItem<any>[]>(structure);

  return (
    <>
      <pre>{JSON.stringify(structure)}</pre>
      <ShowStructure
        structure={structure}
        onChange={(s) => setInnerStructure([...s])}
      />
      <pre>{U.generateTSInterface("myname", structure)}</pre>
      {/*} <pre>{JSON.stringify(data)}</pre>*/}
      <Table data={data} structure={innerStructure} />
    </>
  );
};

const Table = <A,>({
  data,
  structure,
}: {
  data: A[];
  structure: Type.DefinitionItem<A>[];
}) => {
  return <GenericTable def={structure} data={data} />;
};

export default () => {
  const [value, setValue] = React.useState<any[] | undefined>();

  return (
    <>
      <FormArray onSuccess={setValue} />
      {value && <Show data={value} />}
    </>
  );
};
