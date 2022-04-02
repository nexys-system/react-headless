import React from 'react';
import Icon from '../../../components/icon';
import ListItem from '../list-item';

const List = ({
  data,
  onRemove
}: {
  data: { id: number; title: string }[];
  onRemove: (id: number) => void;
}) => {
  if (data.length === 0) {
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
            <span
              onClick={() => onRemove(d.id)}
              style={{ cursor: 'pointer' }}
              className="badge bg-danger rounded-pill"
            >
              <Icon name="trash" />
            </span>
          }
        ></ListItem>
      ))}
    </ul>
  );
};

export default List;
