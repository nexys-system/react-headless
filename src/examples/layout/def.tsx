import * as T from "../../lib/layout/type";

import links from "../../links";

export interface Data {
  firstName: string;
}

const layout: T.Layout<Data> = {
  title: "My Layout",
  description: "A description here",
  backRedirect: "/",
  pathPrefix: links.layout.link + "/with-router",
  cards: {
    tab1: [
      { title: "first", Component: () => <p>Hello</p> },
      { title: "second", Component: ({ data }) => <p>{data.firstName}</p> },
      {
        title: "third",
        Component: ({ data, setData }) => {
          return (
            <p>
              {data.firstName} here{" "}
              <button
                className="btn btn-sm btn-primary"
                onClick={() => setData && setData({ firstName: "Michael" })}
              >
                Change
              </button>
            </p>
          );
        },
      },
    ],
    "Tab with space": [
      { title: "fourth", Component: () => <p>Hello</p> },
      {
        title: "third",
        Component: ({ data, setData }) => {
          return (
            <p>
              {data.firstName} here2{" "}
              <button
                className="btn btn-sm btn-primary"
                onClick={() => setData && setData({ firstName: "John" })}
              >
                Change
              </button>
            </p>
          );
        },
      },
    ],
  },
};

export default layout;
