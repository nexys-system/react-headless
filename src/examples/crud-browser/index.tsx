import { Link, Routes, Route, useParams } from "react-router-dom";

import PreList from "./list";

import { Definition, DefinitionItem } from "../../lib/types";
import { delay } from "../../lib/utils";
import { FormUIType, FormViewDef } from "../../lib/form/type";
import PreDetail from "../../components/detail";
import links from "../../links";
import React from "react";
import { Textarea } from "../../components/form/inputs";

interface Field {
  name: string;
  type: string;
  optional: boolean;
  column?: string;
}

interface Entity {
  name: string;
  table: string;
  fields: Field[];
  uuid: boolean;
}

const Entities = ({
  model,
  selectedEntity,
}: {
  model: Entity[];
  selectedEntity?: string;
}) => (
  <>
    {model.map((entity, i) => (
      <Link
        to={`${links.crudBrowser.link}/${encodeURIComponent(entity.name)}`}
        key={i}
      >
        <span
          className={`badge rounded-pill bg-${
            selectedEntity === entity.name ? "primary" : "secondary"
          }`}
        >
          {entity.name}
        </span>
      </Link>
    ))}
  </>
);

const getEntity = (model: Entity[], entity: string): Entity | undefined =>
  model.find((x) => x.name === entity);

const entityToListDef = <A,>(entity: Entity): Definition<A> => {
  const def: Definition<any> = entity.fields.map(({ name }) => ({
    name,
    label: name,
  }));

  const ViewButton: DefinitionItem<any> = {
    name: "uuid",
    label: "",
    render: (x) => <Link to={`${x.uuid || x.id}/detail`}>Edit</Link>,
  };

  return [...def, ViewButton];
};

//
const entityTodefToggle = (entity: Entity): FormViewDef<any>[] =>
  entity.fields.map((field) => ({
    label: field.name,
    name: field.name,
    uiType: FormUIType.Text,
    optional: field.optional,
  }));

const EntitiesWrapper = ({ model }: { model: Entity[] }) => {
  const { entity: entityName } = useParams<{ entity?: string }>();

  return <Entities model={model} selectedEntity={entityName} />;
};

const DisplayEntity = ({ model }: { model: Entity[] }) => {
  const { entity: entityName } = useParams<{ entity?: string }>();

  if (!entityName) {
    return (
      <p>
        <i>Something went wrong, can't read the entity</i>
      </p>
    );
  }

  const entity = getEntity(model, entityName);

  if (!entity) {
    return (
      <p>
        <i>Something went wrong, can't find the entity</i>
      </p>
    );
  }

  const List = PreList(entityToListDef(entity), () => getList(entity));

  return (
    <>
      <Entities model={model} selectedEntity={entityName} />
      <p>
        Entity: <code>{entity.name}</code>
      </p>

      <Routes>
        <Route path={"/"} element={<List />} />
        <Route
          path={"/:uuid/detail"}
          element={<Detail id={2} entity={entity} />}
        />
      </Routes>
    </>
  );
};

//
const getData = async (entity: Entity, id: string | number): Promise<any> => {
  const l = await getList(entity);
  return l[0];
};

const updateData = async (): Promise<any> => {
  await delay();

  return { id: 2 };
};

const Detail = ({ entity, id }: { entity: Entity; id: number }) => (
  <PreDetail<any, any>
    //   title="My Layout"
    description={
      <span>
        Record: <code>{id}</code>
      </span>
    }
    backRedirect={`/crud-browser/${encodeURIComponent(entity.name)}`}
    defToggle={entityTodefToggle(entity)}
    asyncCalls={{ getData: () => getData(entity, id), updateData }}
  />
);

const getList = async (entity: Entity) => {
  console.log("getting dat for: " + entity.name);
  await delay(500);
  const d = [
    { uuid: "sdf", value: "jhe", datetime: "sdf", category: "sdf", name: "sd" },
  ];

  return Promise.resolve(d);
};

const isModel = (s: any): s is Entity[] => true;

const CrudBrowser = () => {
  const [modelString, setModelString] = React.useState<string | undefined>();
  const [model, setModel] = React.useState<Entity[] | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!modelString) {
      return;
    }

    const m = JSON.parse(modelString);

    if (!isModel(m)) {
      return;
    }

    setModel(m);
  };

  if (model) {
    return (
      <>
        <h2>Crud Browser</h2>

        <p>List of all available entities</p>
        <Routes>
          <Route path={"/"} element={<EntitiesWrapper model={model} />} />
          <Route
            path={"/:entity/*"}
            element={<DisplayEntity model={model} />}
          />
        </Routes>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        placeholder="paste your model"
        onChange={setModelString}
        value={modelString}
      />
      <button className="btn btn-primary" type="submit">
        Add Model
      </button>
    </form>
  );
};

export default CrudBrowser;
