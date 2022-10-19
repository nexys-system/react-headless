import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

import { LoadDataAsyncProps } from "../../components/index";

export interface ListProps<A, Id> {
  data: A[];
  onDelete?: (id: Id) => Promise<void>;
}

export interface AddProps<A> {
  onSuccess: (data: Omit<A, "id">) => void;
}

type OnSuccessEdit<A, Id> = (data: Omit<A, "id">, id: Id) => void;

export interface EditProps<A, Id> {
  data: Omit<A, "id">;
  id: Id;
  onSuccess: OnSuccessEdit<A, Id>;
}

export interface AsyncCalls<A, Id> {
  insert: (data: Omit<A, "id">) => Promise<{ id: Id }>;
  update: (data: Omit<A, "id">, id: Id) => Promise<boolean>;
  delete: (id: Id) => Promise<void>;
}

interface RouterCrudProps<A, Id> {
  List: ({ data, onDelete }: ListProps<A, Id>) => JSX.Element;
  Edit: ({ data, id }: EditProps<A, Id>) => JSX.Element;
  Add: ({ onSuccess }: AddProps<A>) => JSX.Element;
  asyncCalls: AsyncCalls<A, Id>;
}

const EditWrap =
  <A extends { id: Id }, Id>(
    Edit: ({ data, id, onSuccess }: EditProps<A, Id>) => JSX.Element
  ) =>
  ({
    data,
    onSuccess,
  }: {
    data: A[];
    onSuccess: OnSuccessEdit<A, Id>;
  }): JSX.Element => {
    const { id } = useParams<{ id?: string }>();

    if (!id) {
      throw Error("could not read id");
    }

    const item = data.find((x) => String(x.id) === id);

    if (!item) {
      return <p>Not found</p>;
    }

    const { id: iid, ...itemWoId } = item;

    return <Edit data={itemWoId} id={iid} onSuccess={onSuccess} />;
  };

const RouterCrud =
  <A extends { id: Id }, Id = string>({
    List,
    Add,
    Edit,
    asyncCalls,
  }: RouterCrudProps<A, Id>) =>
  ({ data: dataIn }: { data: A[] }) => {
    // instantiate Edit
    const EditWithWrap = EditWrap(Edit);

    const navigate = useNavigate();
    const [data, setData] = React.useState<A[]>(dataIn);

    const handleInsert = async (newItem: Omit<A, "id">) => {
      const { id } = await asyncCalls.insert(newItem);
      const item: A = { ...newItem, id } as A;
      setData([...data, item]);
      navigate("");
    };

    const handleDelete = async (id: Id) => {
      if (!confirm("Are you sure you would like to delete that entry?")) {
        return;
      }

      await asyncCalls.delete(id);
      const dataFiltered = data.filter((x) => x.id !== id);
      setData([...dataFiltered]);
      navigate("");
    };

    const handleEdit = async (item: Omit<A, "id">, id: Id) => {
      await asyncCalls.update(item, id);

      const updatedData: A[] = data.map((d) => {
        if (d.id === id) {
          return { ...item, id } as A;
        }

        return d;
      });

      setData([...updatedData]);
      navigate("");
    };

    return (
      <Routes>
        <Route
          path={""}
          element={<List data={data} onDelete={handleDelete} />}
        />
        <Route
          path={":id/edit"}
          element={<EditWithWrap data={data} onSuccess={handleEdit} />}
        />
        <Route path={"add"} element={<Add onSuccess={handleInsert} />} />
      </Routes>
    );
  };

export const RouterCrudWithLoader = <A extends { id: Id }, Id = string>({
  LoadDataAsync,
  getList,
  ...props
}: {
  LoadDataAsync: (props: LoadDataAsyncProps<A[]>) => JSX.Element;
  getList: () => Promise<A[]>;
} & RouterCrudProps<A, Id>) =>
  LoadDataAsync({ Component: RouterCrud(props), getData: getList });

export default RouterCrud;
