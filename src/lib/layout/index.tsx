import React from 'react';
import { Redirect } from 'react-router-dom';

import * as T from './type';
import CardsWithTabs from './cards-w-tabs';

const Layout =
  <A,>({ cards, title, description, backRedirect }: T.Layout<A>) =>
  ({ data: dataIn }: { data: A }): JSX.Element => {
    const [redirect, setRedirect] = React.useState<string | undefined>();
    const [data, setData] = React.useState<A>(dataIn);

    if (redirect) {
      return <Redirect to={redirect} />;
    }

    return (
      <>
        <h1>{title}</h1>
        <p>{description}</p>

        <CardsWithTabs cards={cards} data={data} setData={setData} />

        {backRedirect && (
          <div className="float-right">
            <button
              onClick={() => setRedirect(backRedirect)}
              type="button"
              className=" btn-sm btn btn-secondary"
            >
              Back
            </button>
          </div>
        )}
      </>
    );
  };

export default Layout;
