import React from 'react';
import Icon from '../../../components/icon';

import ListItem from '../list-item';

const List = ({
  data,
  onMove
}: {
  data: { id: number; title: string }[];
  onMove: (id: number, position: 1 | -1) => void;
}) => {
  const l = data.length;

  if (l === 0) {
    return (
      <p>
        <i>Nothing was found</i>
      </p>
    );
  }

  return (
    <ul className="list-group list-group">
      {data.map((d, i) => (
        <ListItem
          key={i}
          title={d.title}
          right={
            <>
              {i > 0 && (
                <span
                  onClick={() => onMove(d.id, -1)}
                  style={{ cursor: 'pointer' }}
                  className="badge bg-success rounded-pill"
                >
                  <Icon name="arrow-up" />
                </span>
              )}
              &nbsp;
              {i < l - 1 && (
                <span
                  onClick={() => onMove(d.id, 1)}
                  style={{ cursor: 'pointer' }}
                  className="badge bg-success rounded-pill"
                >
                  <Icon name="arrow-down" />
                </span>
              )}
            </>
          }
        />
      ))}
    </ul>
  );
};

export default List;
