import { FormUIType, FormViewDef } from "../../lib/form/type";
import * as T from "../../lib/layout/type";
import { delay } from "../../lib/utils";

// no frame
//import { DetailNoFrame as Detail } from "../../components/detail";
import { Detail } from "../../components/detail";

//import links from "../../links";

interface Profile {
  firstName: string;
  lastName: string;
}

interface Out {
  id: number;
}

const getData = async (): Promise<Profile> => {
  const profile: Profile = { firstName: "John", lastName: "Doe" };
  await delay(1000);
  return Promise.resolve(profile);
};

const updateData = async (): Promise<Out> => {
  await delay();

  return { id: 2 };
};

const asyncCalls = { getData, updateData };

//
const defToggle: FormViewDef<Profile>[] = [
  {
    label: "First Name",
    name: "firstName",
    uiType: FormUIType.Text,
    optional: false,
  },
  {
    label: "Last Name",
    name: "lastName",
    uiType: FormUIType.Text,
    optional: true,
  },
];

const cards: T.Card<Profile>[] = [
  { title: "second", Component: ({ data }) => <p>{data.firstName}</p> },
  {
    title: "third",
    width: 6,
    Component: ({ data }) => {
      return <p>{data.firstName} hered </p>;
    },
  },
];

//

export default () => (
  <Detail<Profile, Out>
    title="My Layout"
    description={"A description here"}
    backRedirect={"/"}
    cards={cards}
    defToggle={defToggle}
    asyncCalls={asyncCalls}
  />
);
