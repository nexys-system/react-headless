import React from "react";

import * as T from "../../lib/form/type";

export const getClassName = (
  errors?: string,
  mainClass = "border p-2 rounded"
): string => {
  const isInvalid: boolean = !!errors;

  const classes = [mainClass]; //

  if (isInvalid) {
    classes.push("border-red-500");
  } else {
    classes.push("border-gray-300");
  }

  return classes.join(" ");
};

export const InputWrapper = ({
  label,
  children,
  error,
}: T.InputWrapperProps) => (
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {children}
    {error && (
      <div
        id="validationServer03Feedback"
        className="text-red-500 text-xs italic mt-1"
      >
        {error}
      </div>
    )}
  </div>
);

// see https://www.w3schools.com/html/html_form_input_types.asp
type HtmlInputType = "text" | "date" | "time" | "datetime-local";

const InputTextGeneric =
  (type: HtmlInputType = "text") =>
  ({ onChange, errors, disabled, value, placeholder }: T.InputProps<string>) =>
    (
      <input
        className={getClassName(errors)}
        type={type}
        value={value || ""}
        onChange={(v) => onChange(v.target.value)}
        disabled={disabled}
        placeholder={placeholder}
      />
    );

export const Input = InputTextGeneric("text");

export const Datepicker = InputTextGeneric("date");

export const DateTimepicker = InputTextGeneric("datetime-local");

export const Timepicker = InputTextGeneric("time");

export const Textarea = ({
  onChange,
  errors,
  disabled,
  value,
}: T.InputProps<string>) => (
  <textarea
    className={getClassName(errors, "border p-2 rounded resize-y")}
    value={value}
    onChange={(v) => onChange(v.target.value)}
    disabled={disabled}
  />
);

export const Select = <A, Id extends number | string>({
  onChange,
  options,
  value,
  errors,
  disabled,
}: T.InputProps<A, Id>) => (
  <select
    className={getClassName(errors, "border p-2 rounded bg-white")}
    onChange={(v) => {
      const { value } = v.target;

      if (!value) {
        onChange(undefined as any);
        return;
      }

      const valueInt = Number(value);

      if (!isNaN(valueInt)) {
        onChange(valueInt as any as A);
        return;
      }

      onChange(value as any as A);
    }}
    disabled={disabled}
    defaultValue={value as any}
  >
    <option></option>
    {options &&
      options.map(({ id, name }, i) => (
        <option key={i} value={id}>
          {name}
        </option>
      ))}
  </select>
);

export const SelectEnum = Select;

export const SelectObject = <A, Id extends number | string>(
  props: Omit<
    T.InputProps<{ id: Id; name: string }, Id>,
    "value" | "onChange"
  > &
    Pick<T.InputProps<{ id: Id; name: string }, Id>, "value" | "onChange">
) => {
  const onChange = (id?: Id) => {
    const option = props.options?.find((x) => x.id === id);

    if (option) {
      props.onChange(option);
    }
  };

  const options = props.options;

  const value: Id | undefined = props.value?.id;

  return Select<Id, Id>({ ...props, onChange, value });
};

export const Checkbox = ({ value, onChange }: T.InputProps<boolean>) => (
  <input
    className="form-checkbox h-4 w-4 text-blue-600"
    checked={value}
    type="checkbox"
    onChange={(v) => onChange(Boolean(v.target.value))}
  />
);

export const InputGeneric = (
  uiType: T.FormUIType
): ((props: T.InputProps<any, any>) => JSX.Element) => {
  switch (uiType) {
    case T.FormUIType.Switch:
      return Checkbox;
    case T.FormUIType.Textarea:
      return Textarea;
    case T.FormUIType.Select:
    case T.FormUIType.SelectNumber:
      return Select;
    case T.FormUIType.SelectObject:
    case T.FormUIType.SelectObjectNumber:
      return SelectObject;
    case T.FormUIType.Date:
      return Datepicker;
    case T.FormUIType.DateTime:
      return DateTimepicker;
    case T.FormUIType.Time:
      return Timepicker;
    default:
      return Input;
  }
};
