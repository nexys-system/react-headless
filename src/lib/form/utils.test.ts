import { test, expect } from 'vitest';
import { FormDef, FormUIType } from './type';
import * as U from './utils';

interface Data {
  firstName: string;
  lastName?: string;
}

const def: FormDef<Data>[] = [
  { name: 'firstName', uiType: FormUIType.Text, optional: false },
  { name: 'lastName', uiType: FormUIType.Text, optional: true }
];

const shape = { firstName: { optional: false }, lastName: { optional: true } };

test('def to shape object', () => {
  expect(U.defToShape(def)).toEqual(shape);
});
