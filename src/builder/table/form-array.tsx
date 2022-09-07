import React from "react";

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
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormArray;
