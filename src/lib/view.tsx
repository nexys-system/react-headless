import React from 'react';

export type Render<A> = (a: A) => string | JSX.Element;

export interface ViewStructureUnit<A> {
  label?: string;
  value: Render<A> | keyof A;
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

const LayoutMinimal = (p: LayoutProps) => <>{p.children}</>;

const View =
  (
    Row: (p: RowProps) => JSX.Element,
    Layout: (p: LayoutProps) => JSX.Element = LayoutMinimal
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
