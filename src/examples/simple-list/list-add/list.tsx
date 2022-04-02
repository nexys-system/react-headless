import React from 'react';
import Icon from '../../../components/icon';

const ListItem = ({
  title,
  children,
  right
}: {
  title: string;
  children?: JSX.Element;
  right?: JSX.Element;
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        {children}
      </div>
      {right}
    </li>
  );
};

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
