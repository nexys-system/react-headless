import React from 'react';

export const LoadComponentAsync =
  (Spinner: () => JSX.Element) =>
  <A,>({
    Component,
    getData
  }: {
    Component: ({ data }: { data: A }) => JSX.Element;
    getData: () => Promise<A>;
  }) => {
    const [data, setData] = React.useState<A | undefined>(undefined);

    if (data === undefined) {
      getData().then(data => setData(data));

      return <Spinner />;
    }

    return <Component data={data} />;
  };
