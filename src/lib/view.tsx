import React from 'react';

export interface ViewStructureUnit<A> {
  label?: string;
  value: ((a: A) => string | JSX.Element) | keyof A;
}

export interface ViewProps<A> {
  data: A;
  structure: ViewStructureUnit<A>[];
  title?: string;
  description?: string;
}

export interface LayoutProps {
  children: JSX.Element[];
  title?: string;
  description?: string;
}

export interface RowProps {
  label?: string;
  value: string | JSX.Element;
}

const View =
  (
    Layout: (p: LayoutProps) => JSX.Element,
    Row: (p: RowProps) => JSX.Element
  ) =>
  <A,>({ data, structure, title, description }: ViewProps<A>) =>
    (
      <Layout title={title} description={description}>
        {structure.map((s, i) => {
          const value =
            typeof s.value === 'function'
              ? s.value(data)
              : String(data[s.value]);

          return <Row key={i} label={s.label} value={value} />;
        })}
      </Layout>
    );

export default View;
