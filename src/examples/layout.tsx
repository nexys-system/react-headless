import React from 'react';

import * as T from '../lib/layout/type';
import PreLayout from '../components/layout';

interface Data {
  firstName: string;
}

const layout: T.Layout<Data> = {
  title: 'my layout',
  description: 'a description here',
  backRedirect: '/',
  cards: {
    tab1: [
      { title: 'first', Component: () => <p>Hello</p> },
      { title: 'second', Component: ({ data }) => <p>{data.firstName}</p> },
      {
        title: 'third',
        Component: ({ data, setData }) => {
          return (
            <p>
              {data.firstName} here{' '}
              <button
                className="btn btn-sm btn-primary"
                onClick={() => setData({ firstName: 'Michael' })}
              >
                Change
              </button>
            </p>
          );
        }
      }
    ],
    'Tab with space': [
      { title: 'fourth', Component: () => <p>Hello</p> },
      {
        title: 'third',
        Component: ({ data, setData }) => {
          return (
            <p>
              {data.firstName} here2{' '}
              <button
                className="btn btn-sm btn-primary"
                onClick={() => setData({ firstName: 'John' })}
              >
                Change
              </button>
            </p>
          );
        }
      }
    ]
  }
};

const Layout = PreLayout(layout);

export default () => {
  const data: Data = { firstName: 'Maria' };

  return <Layout data={data} />;
};
