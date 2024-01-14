import React, { useState, useEffect } from "react";

export interface LoadDataAsyncProps<A> {
  Component: ({ data }: { data: A }) => JSX.Element;
  ComponentOnFail?: ({ error }: { error: any }) => JSX.Element;
  getData: () => Promise<A>;
}

export const LoadDataAsync =
  (Spinner: () => JSX.Element) =>
  <A,>({ Component, getData, ComponentOnFail }: LoadDataAsyncProps<A>) => {
    const [data, setData] = useState<A | undefined>(undefined);
    const [error, setError] = useState<any | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getData()
        .then((fetchedData) => {
          setData(fetchedData);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
      // Empty dependency array ensures this effect runs only once after the initial render
    }, []);

    if (isLoading || data === undefined) {
      return <Spinner />;
    }

    if (error) {
      console.error("Data load failed", error);

      if (ComponentOnFail) {
        return <ComponentOnFail error={error} />;
      }

      throw new Error(error);
    }

    return <Component data={data} />;
  };
