const ListItem = ({
  title,
  children,
  right,
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

export default ListItem;
