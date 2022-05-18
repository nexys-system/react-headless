import BadgeWithAction from "../../components/badge/with-action";

const B = BadgeWithAction("sd", (d: number) => Promise.resolve("sdf"));

export default () => {
  return (
    <>
      <h3>With Action</h3>
      <B id={2} />
    </>
  );
};
