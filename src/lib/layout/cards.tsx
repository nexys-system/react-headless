import React from 'react';

import * as T from './type';

const Cards = <A,>({
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

export default Cards;
