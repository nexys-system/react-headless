import {
  InputOptionProps,
  InputProps,
  OptionUnit,
  UXType,
  WrapperProps,
} from "../type";

export const Wrapper = ({ label, info, error, children }: WrapperProps) => (
  <div className="p-2 ">
    <h3 className="text-sm font-medium text-gray-800 mb-1">{label}</h3>
    <span className="text-xs text-gray-500 mb-2 block">{info}</span>
    {children}
    <span className="text-xs text-red-600 mt-2 block">{error}</span>
  </div>
);

export const Input = ({
  value,
  onChange,
  disabled,
  placeholder,
}: InputProps<string>) => (
  <input
    type={"text"}
    placeholder={placeholder}
    disabled={disabled}
    value={value || ""}
    onChange={(e) => onChange(e.target.value)}
    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-100 disabled:cursor-not-allowed"
  />
);

export const InputNumber = ({
  value,
  onChange,
  disabled,
}: InputProps<number>) => (
  <input
    type={"number"}
    disabled={disabled}
    value={value || ""}
    onChange={(e) => {
      const v = e.target.value;

      const n = Number(v);

      if (isNaN(n)) {
        return;
      }

      onChange(n);
    }}
  />
);

export const InputCheckbox = ({
  value,
  onChange,
  disabled,
}: InputProps<boolean>) => (
  <input
    type={"checkbox"}
    checked={value || false}
    disabled={disabled}
    onChange={(e) => onChange(e.target.checked)}
  />
);

export const InputOptions = <Id,>({
  value,
  onChange,
  options,
}: InputOptionProps<OptionUnit<Id>, Id>) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;

    const optionSelected = options.find(
      ({ id }) => (id as number).toString() === v
    );
    if (optionSelected) {
      onChange(optionSelected);
    }

    console.log(optionSelected);
  };

  return (
    <select
      value={value?.id as string | number}
      onChange={handleChange}
      className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
    >
      <option />
      {options.map(({ id, name }, key) => (
        <option key={key} value={id as string | number}>
          {name}
        </option>
      ))}
    </select>
  );
};

export const InputOptionsScalar = <Id,>({
  value,
  onChange,
  options,
}: InputOptionProps<Id, Id>) => {
  const f = options.find((x) => x.id === value);
  return (
    <InputOptions
      options={options}
      value={f}
      onChange={(v) => onChange(v.id)}
    />
  );
};

export const InputGeneric = (
  uxType: UXType
): ((props: InputProps<any>) => JSX.Element) => {
  switch (uxType) {
    case UXType.checkbox:
      return InputCheckbox;
    case UXType.number:
      return InputNumber;
    default:
      return Input;
  }
};
