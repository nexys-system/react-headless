import React from "react";

import * as T from "../../lib/form/type";

export const getClassName = (
  errors?: string[],
  mainClass = "form-control"
): string => {
  const isInvalid: boolean = !!errors;

  const classes = [mainClass]; //

  if (isInvalid) {
    classes.push("is-invalid");
  }

  return classes.join(" ");
};

export const InputWrapper = ({
  label,
  children,
  errors,
}: T.InputWrapperProps) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    {children}
    {errors && (
      <div id="validationServer03Feedback" className="invalid-feedback">
        {errors[0]}
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
    className={getClassName(errors)}
    value={value}
    onChange={(v) => onChange(v.target.value)}
    disabled={disabled}
  />
);

export const Select = <A extends number | string>({
  onChange,
  options,
  value,
  errors,
  disabled,
}: T.InputProps<A>) => (
  <select
    className={getClassName(errors, "form-select")}
    // handle select null again
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
    defaultValue={value}
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

export const SelectObject = <A extends number | string>(
  props: Omit<T.InputProps<A>, "value" | "onChange"> &
    Pick<T.InputProps<{ id: A; name: string }>, "value" | "onChange">
) => {
  const onChange = (id: A) => {
    const option = props.options?.find((x) => x.id === id);

    if (option) {
      props.onChange(option);
    }
  };

  const value: A | undefined = props.value?.id;

  return Select<A>({ ...props, onChange, value });
};

export const Checkbox = ({ value, onChange }: T.InputProps<boolean>) => (
  <input
    checked={value}
    type="checkbox"
    onChange={(v) => onChange(Boolean(v.target.value))}
  />
);

export const InputGeneric = (uiType: T.FormUIType) => {
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
