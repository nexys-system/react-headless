import React from 'react';
import { Redirect } from 'react-router-dom';

import * as T from './type';
import CardsWithTabsHeadless from './cards-w-tabs';
import CardsWithNavsHeadless from './cards-w-nav';
import { CardProps, ColProps, HeaderProps, RowProps } from '../card';
import { TabProps, NavigationProps } from '../tabs/type';

const Layout = ({
  Card,
  Tabs,
  Navs,
  Header,
  Col,
  Row,
  BackBtn
}: {
  Card: (p: CardProps) => JSX.Element;
  Tabs?: (p: TabProps) => JSX.Element;
  Navs?: (p: NavigationProps) => JSX.Element;
  Header: (p: HeaderProps) => JSX.Element;
  Col: (p: ColProps) => JSX.Element;
  Row: (p: RowProps) => JSX.Element;
  BackBtn: (p: T.ButtonProps) => JSX.Element;
}) => {
  return <A,>({
      cards,
      title,
      description,
      backRedirect,
      pathPrefix = ''
    }: T.Layout<A>) =>
    ({ data: dataIn }: { data: A }): JSX.Element => {
      // picks either nav or tabs. At least one of the two must be chosen
      const CardsWithTabs = Navs
        ? CardsWithNavsHeadless({ Card, Navs, Col, Row, pathPrefix })
        : Tabs
        ? CardsWithTabsHeadless({ Card, Tabs, Col, Row })
        : null;

      if (CardsWithTabs === null) {
        throw Error('either nav or tab must be defined');
      }

      const [redirect, setRedirect] = React.useState<string | undefined>();
      const [data, setData] = React.useState<A>(dataIn);

      if (redirect) {
        return <Redirect to={redirect} />;
      }

      if (Array.isArray(cards)) {
        throw Error('not supported yet');
      }

      return (
        <>
          <Header title={title} description={description} />

          <CardsWithTabs cards={cards} data={data} setData={setData} />

          {backRedirect && (
            <BackBtn onClick={() => setRedirect(backRedirect)} />
          )}
        </>
      );
    };
};

export default Layout;
