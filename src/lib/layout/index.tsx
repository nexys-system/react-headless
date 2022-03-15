import React from 'react';
import { Redirect } from 'react-router-dom';

import * as T from './type';

const LayoutCards = <A,>({
  cards,
  data,
  setData
}: {
  cards: T.Card<A>[];
  data: A;
  setData: (a: A) => void;
}) => (
  <div className="row">
    {cards.map(({ width = 6, title, subtitle, Component }, i) => (
      <div key={i} className={'col-md-' + width}>
        <div className="card">
          <div className="card-body">
            {title && <h5 className="card-title">{title}</h5>}
            {subtitle && (
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            )}
            <Component data={data} setData={setData} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Layout =
  <A,>(layout: T.Layout<A>) =>
  ({ data: dataIn }: { data: A }): JSX.Element => {
    const [redirect, setRedirect] = React.useState<string | undefined>();
    const [data, setData] = React.useState<A>(dataIn);

    if (redirect) {
      return <Redirect to={redirect} />;
    }

    const { cards } = layout;

    if (Array.isArray(cards)) {
      return (
        <>
          <h1>{layout.title}</h1>
          <p>{layout.description}</p>

          <LayoutCards cards={cards} data={data} setData={setData} />

          {layout.backRedirect && (
            <div className="float-right">
              <button
                onClick={() => setRedirect(layout.backRedirect)}
                type="button"
                className=" btn-sm btn btn-secondary"
              >
                Back
              </button>
            </div>
          )}
        </>
      );
    }

    const [tabIndex, setTabIndex] = React.useState<number>(0);

    const arr: [string, T.Card<A>[]][] = Object.entries(cards);
    const tabs: { label: string }[] = arr.map(([label]) => ({ label }));
    const cards2 = arr[tabIndex][1];

    return (
      <>
        <Tabs tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />

        <LayoutCards cards={cards2} data={data} setData={setData} />
      </>
    );
  };

const Tabs = ({
  tabs,
  tabIndex = 0,
  setTabIndex
}: {
  tabIndex?: number;
  tabs: { label: string }[];
  setTabIndex: (d: number) => void;
}) => {
  return (
    <ul className="nav nav-pills">
      {tabs.map((tab, i) => {
        const classNames = ['nav-link'];

        if (i === tabIndex) {
          classNames.push('active');
        }

        return (
          <li className="nav-item" key={i}>
            <a
              className={classNames.join(' ')}
              onClick={() => setTabIndex(i)}
              style={{ cursor: 'pointer' }}
            >
              {tab.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Layout;
