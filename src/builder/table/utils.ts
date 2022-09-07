import * as Type from "../../lib/types/definition";
export type AttributeType = "string" | "number" | "boolean";

export const generateTSInterface = (
  name: string,
  structure: (Type.DefinitionItem<any> & {
    isOptional: boolean;
    type?: AttributeType;
  })[]
): string => {
  return [
    "interface " + name + " {",
    ...structure.map(
      (s) =>
        `  ${String(s.name)}${s.isOptional ? "?" : ""}: ${s.type || "string"}`
    ),
    "}",
  ].join("\n");
};

export const getType = (v: any): AttributeType => {
  if (typeof v === "number") {
    return "number";
  }

  if (typeof v === "boolean") {
    return "boolean";
  }

  return "string";
};

export const analyzeArray = (
  arr: any[]
): (Type.DefinitionItem<any> & {
  isOptional: boolean;
})[] => {
  const structureObject: {
    [k: string]: Omit<Type.DefinitionItem<any>, "name"> & {
      isOptional: boolean;
      type?: AttributeType;
    };
  } = {};

  arr.forEach((a, i) => {
    Object.entries(a).forEach(([k, v]) => {
      const type = getType(v);

      let isOptional: boolean = typeof v === "undefined";

      if (!structureObject[k]) {
        if (i > 0) {
          isOptional = true;
        }

        //const align: "right" | undefined =
        type === "number" ? "right" : undefined;

        structureObject[k] = { isOptional, type }; // type , align
      }
    });

    const mandatoryAttributes: string[] = Object.entries(structureObject)
      .filter(([_k, v]) => !v.isOptional)
      .map(([k]) => k);

    const mandatoryAttributesObservedRow: string[] = Object.entries(a)
      .filter(([_k, v]) => typeof v !== "undefined")
      .map(([k]) => k);

    // compare two arrays
    mandatoryAttributes.forEach((attr) => {
      if (!mandatoryAttributesObservedRow.includes(attr)) {
        structureObject[attr] = { ...structureObject[attr], isOptional: true };
      }
    });
  });

  return Object.entries(structureObject).map(([name, v]) => ({
    name,
    label: name,
    ...v,
  }));
};
