import React from 'react';
import Icon from '../../../components/icon';
import ListItem from '../list-item';

const List = ({
  data,
  onRemove,
  onEdit
}: {
  data: { id: number; title: string; subtitle: string }[];
  onRemove: (id: number) => void;
  onEdit: (d: { id: number; title: string; subtitle: string }) => void;
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
            <>
              <span
                onClick={() => onEdit(d)}
                style={{ cursor: 'pointer' }}
                className="badge bg-warning rounded-pill"
              >
                <Icon name="pen" />
              </span>
              &nbsp;
              <span
                onClick={() => onRemove(d.id)}
                style={{ cursor: 'pointer' }}
                className="badge bg-danger rounded-pill"
              >
                <Icon name="trash" />
              </span>
            </>
          }
        >
          <>{d.subtitle}</>
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
