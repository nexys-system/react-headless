import React from 'react';
import { CardProps, ColProps, RowProps } from '../card';

import * as T from './type';

export interface CardsProps<A> {
  cards: T.Card<A>[];
  data: A;
  setData: (a: A) => void;
}

const CardsHeadless =
  (
    Card: (p: CardProps) => JSX.Element,
    Col: (p: ColProps) => JSX.Element,
    Row: (p: RowProps) => JSX.Element
  ) =>
  <A,>({ cards, data, setData }: CardsProps<A>) =>
    (
      <Row>
        {cards.map(({ width = 6, title, subtitle, Component }, i) => (
          <Col key={i} width={width}>
            <Card title={title} subtitle={subtitle}>
              <Component data={data} setData={setData} />
            </Card>
          </Col>
        ))}
      </Row>
    );

export default CardsHeadless;
