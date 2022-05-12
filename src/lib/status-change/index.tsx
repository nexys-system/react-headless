import React from "react";

export interface LayoutProps {
  children: JSX.Element[];
}

export interface ButtonProps {
  selected?: number;
  id: number;
  label: string;
  handleChange: (s: number) => void;
}

export interface StatusChangeProps {
  selected?: number;
  onChange: (s: number) => void;
  status: { id: number; label: string }[];
}

const StatusChange =
  (
    Layout: (l: LayoutProps) => JSX.Element,
    Button: (l: ButtonProps) => JSX.Element
  ) =>
  ({ selected: selectedIn, onChange, status }: StatusChangeProps) => {
    const [selected, setSelected] = React.useState<number | undefined>(
      selectedIn
    );

    const handleChange = (id: number) => {
      onChange(id);
      setSelected(id);
    };

    return (
      <Layout>
        {status.map(({ id, label }, i) => (
          <Button
            key={i}
            handleChange={handleChange}
            selected={selected}
            id={id}
            label={label}
          />
        ))}
      </Layout>
    );
  };

export default StatusChange;
