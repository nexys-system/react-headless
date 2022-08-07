import React from 'react';

const ListTree =
  <A extends { children: A[] }>(
    UL: (props: { children: JSX.Element[] }) => JSX.Element,
    Line: (props: A) => JSX.Element
  ) =>
  ({ items }: { items: A[] }): JSX.Element => {
    const LI = ListTree(UL, Line);

    return (
      <UL>
        {items.map((x, i) => {
          return (
            <React.Fragment key={i}>
              <Line {...x} />
              {x.children && x.children.length > 0 && <LI items={x.children} />}
            </React.Fragment>
          );
        })}
      </UL>
    );
  };
  
  export default ListTree;
