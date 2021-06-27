import * as T from './type';
import * as V from '@nexys/validation';

export const uiTypeToVType = (t: T.FormType): V.Type.FieldType => {
  switch (t) {
    case T.FormType.Number:
      return 'number';
    case T.FormType.Text:
      return 'string';
  }
};

export const generateValidatorFromDef = <A>(df: T.FormDef<A>[]) => {
  const v: V.Type.Shape = {};

  df.forEach(f => {
    v[f.name as string] = {
      optional: f.optional,
      type: uiTypeToVType(f.uiType)
    };
  });

  return v;
};
