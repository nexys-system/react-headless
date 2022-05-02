import React from 'react';
import { Redirect } from 'react-router-dom';

import * as T from './type';
import BodyHeadless from './body';

const Layout = ({
  Card,
  Tabs,
  Navs,
  Header,
  Col,
  Row,
  BackBtn = () => <></>
}: T.LayoutOuterProps) => {
  return <A,>({
      cards,
      title,
      description,
      backRedirect,
      pathPrefix = ''
    }: T.Layout<A>) =>
    ({ data: dataIn }: { data: A }): JSX.Element => {
      // picks either nav or tabs. At least one of the two must be chosen

      const Body = BodyHeadless<A>({ Card, Col, Row, Tabs, Navs });

      const [redirect, setRedirect] = React.useState<string | undefined>();
      const [data, setData] = React.useState<A>(dataIn);

      if (redirect) {
        return <Redirect to={redirect} />;
      }

      return (
        <>
          <Header title={title} description={description} />

          <Body
            pathPrefix={pathPrefix}
            cards={cards}
            data={data}
            setData={setData}
          />

          {backRedirect && (
            <BackBtn onClick={() => setRedirect(backRedirect)} />
          )}
        </>
      );
    };
};

export default Layout;
