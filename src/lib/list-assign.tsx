import React from 'react';
import { ListWrapperProps } from './table/ui-type';

export interface UnitUIProps {
  isChecked: boolean;
  label: string;
  isLoading: boolean;
  onChange: () => void;
}

export interface Item<SId> {
  id: SId;
  assigned: boolean;
  name: string;
}

export type UpdatePromise<StatusId> = (
  id: StatusId,
  assigned: boolean
) => Promise<boolean | void>;

// id1 is a placeholder, else does not compile
const ListUnit =
  (UnitUI: (p: UnitUIProps) => JSX.Element) =>
  <StatusId,>({
    i,
    value,
    updatePromise
  }: {
    i: number;
    value: Item<StatusId>;
    updatePromise: UpdatePromise<StatusId>;
  }): JSX.Element => {
    const [isChecked, setChecked] = React.useState<boolean>(!!value.assigned);
    const [isLoading, setLoading] = React.useState(false);
    const [assigned, setAssigned] = React.useState(value.assigned);

    const handleClick = (): void => {
      if (isLoading === true) {
        console.warn(
          'this action is blocked since the promise is still working'
        );
      }

      setLoading(true);

      updatePromise(value.id, assigned).then(x => {
        setChecked(!isChecked);
        setLoading(false);
        // we check if the answer (this is a hack because Koa does not return `null`)
        setAssigned(Boolean(x));
      });
    };

    return (
      <UnitUI
        isChecked={isChecked}
        onChange={handleClick}
        isLoading={isLoading}
        label={value.name}
      />
    );
  };

const ListAssign = (
  ListWrapperUI: (p: ListWrapperProps) => JSX.Element,
  UnitUI: (p: UnitUIProps) => JSX.Element
) => {
  const ListUnitUI = ListUnit(UnitUI);

  return <StatusId,>({
    data,
    updatePromise
  }: {
    data: Item<StatusId>[];
    updatePromise: UpdatePromise<StatusId>;
  }): JSX.Element => {
    return (
      <ListWrapperUI>
        {data.map((value, i) => (
          <ListUnitUI
            key={i}
            i={i}
            value={value}
            updatePromise={updatePromise}
          />
        ))}
      </ListWrapperUI>
    );
  };
};

export default ListAssign;
