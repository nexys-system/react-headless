import StatusChange from "../../../../components/status-change";

const status = [
  { id: 1, label: "active" },
  { id: 2, label: "pending" },
  { id: 3, label: "inactive" },
];

const statusChange = (uuid: string, statusId: number) => {
  return Promise.resolve();
};

export default ({ uuid, statusId }: { uuid: string; statusId: number }) => {
  return (
    <>
      <StatusChange
        selected={statusId}
        status={status}
        onChange={(s) => statusChange(uuid, s)}
      />
    </>
  );
};
