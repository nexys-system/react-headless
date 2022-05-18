import React from "react";

export interface LayoutProps {
  children: JSX.Element[];
}

export interface ButtonProps {
  disabled?: boolean;
  selected?: number;
  id: number;
  label: string;
  handleChange: (s: number) => Promise<void>;
}

export interface StatusChangeProps {
  selected?: number;
  onChange: (s: number) => Promise<void>;
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

    const [loading, setLoading] = React.useState<boolean>(false);

    const handleChange = async (id: number) => {
      setLoading(true);
      await onChange(id);
      setSelected(id);
      setLoading(false);
    };

    return (
      <Layout>
        {status.map(({ id, label }, i) => (
          <Button
            disabled={loading}
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
