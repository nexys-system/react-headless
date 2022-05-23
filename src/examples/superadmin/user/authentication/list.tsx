import Icon from "../../../../components/icon";
import { yesOrNo } from "../../../../lib/utils";
import ListItem from "./list-item";
import { UserAuthentication, UserAuthenticationType } from "./type";

const List = ({
  data,
  onRemove,
  onEdit,
}: {
  data: UserAuthentication[];
  onRemove: (uuid: string) => void;
  onEdit: (d: UserAuthentication) => void;
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
          title={d.value}
          right={
            <>
              <span
                onClick={() => onEdit(d)}
                style={{ cursor: "pointer" }}
                className="badge bg-warning rounded-pill"
              >
                <Icon name="pen" />
              </span>
              &nbsp;
              <span
                onClick={() => onRemove(d.uuid)}
                style={{ cursor: "pointer" }}
                className="badge bg-danger rounded-pill"
              >
                <Icon name="trash" />
              </span>
            </>
          }
        >
          <>
            {UserAuthenticationType[d.type]} {yesOrNo(d.isEnabled)}
          </>
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
