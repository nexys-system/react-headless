import React from 'react';

export const LoadDataAsync =
  (Spinner: () => JSX.Element) =>
  <A,>({
    Component,
    getData,
    ComponentOnFail
  }: {
    Component: ({ data }: { data: A }) => JSX.Element;
    ComponentOnFail?: ({ error }: { error: any }) => JSX.Element;
    getData: () => Promise<A>;
  }) => {
    const [data, setData] = React.useState<A | undefined>(undefined);
    const [error, setError] = React.useState<any | undefined>();

    if (error) {
      console.error('Data load failed', error);

      if (ComponentOnFail) {
        return <ComponentOnFail error={error} />;
      }
    }

    if (data === undefined) {
      getData()
        .then(data => setData(data))
        .catch(err => setError(err));

      return <Spinner />;
    }

    return <Component data={data} />;
  };
