import React from 'react';

import { FormWrapperProps } from '../lib/form/form-wrapper';
import { ViewStructureUnit } from '../lib/view';
import ViewGeneric, { RowProps } from '../lib/view';
import ToggleHeadless, { LayoutProps } from '../lib/toggle';

const Row = (p: RowProps) => (
  <li>
    {p.label}: {p.value}
  </li>
);

const View = ViewGeneric(Row);

const LayoutView = ({ setIsForm, children }: LayoutProps) => (
  <>
    {children}
    <button
      className="btn btn-sm btn-secondary"
      onClick={() => setIsForm(true)}
    >
      edit
    </button>
  </>
);

const LayoutForm = ({ setIsForm, children }: LayoutProps) => (
  <>
    {children}
    <button
      className="btn btn-sm btn-secondary"
      onClick={() => setIsForm(false)}
    >
      back
    </button>
  </>
);

const PreToggle = <A, Out>(
  structure: ViewStructureUnit<A>[],
  Form: (p: FormWrapperProps<A, Out>) => JSX.Element
) => ToggleHeadless(structure, Form, View, LayoutView, LayoutForm);

export default PreToggle;
