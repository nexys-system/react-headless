import React from "react";

import * as T from "../../lib/form/type";

import {
  Input,
  Checkbox as InputCheckbox,
  SelectObject as InputOptions,
  Select as InputOptionsScalar,
  InputWrapper as Wrapper,
} from "../../components/form/inputs";
import { FormWrapper } from "../../lib/form/generator2";
import { SubmitButton } from "../../components/buttons/with-action";

enum UIStyle {
  card = 1,
  list = 2,
}

interface FormData {
  name: string;
  isUuid: boolean;
  country: { id: number; name: string };
  lang: { id: string; name: string };
  uiStyle: UIStyle;
}

const countries: T.OptionUnit<number>[] = [
  { id: 1, name: "Switzerland" },
  { id: 2, name: "Australia" },
];

const langs: T.OptionUnit[] = [
  { id: "en", name: "English" },
  { id: "fr", name: "French" },
];

const uiStyles: T.OptionUnit<UIStyle>[] = Object.keys(UIStyle)
  .filter((x) => !isNaN(x as any))
  .map((id) => ({
    id: id as any as UIStyle,
    name: UIStyle[id as any as UIStyle],
  }));

const FormUI = ({
  onSubmit,
  errors,
  form,
  setForm,
  loading,
}: T.FormUIProps<FormData>) => {
  console.log(errors);
  return (
    <form onSubmit={onSubmit}>
      <Wrapper label="Name" error={errors["name"]}>
        <Input
          value={form["name"]}
          onChange={(name) => setForm({ ...form, name })}
        />
      </Wrapper>
      <Wrapper label={"is uuid"} error={errors["isUuid"]}>
        <InputCheckbox
          value={form["isUuid"]}
          onChange={(isUuid) => setForm({ ...form, isUuid })}
        />
      </Wrapper>
      <Wrapper
        label="Country"
        info={"Pick a country from the list"}
        error={errors["country"]}
      >
        <InputOptions<number, number>
          options={countries}
          value={form["country"]}
          onChange={(country) => setForm({ ...form, country })}
        />
      </Wrapper>
      <Wrapper
        label="Language"
        info={"Pick a language from the list"}
        error={errors["lang"]}
      >
        <InputOptions<string, string>
          options={langs}
          value={form["lang"]}
          onChange={(lang) => setForm({ ...form, lang })}
        />
      </Wrapper>

      <Wrapper
        label="UI Style"
        info={"Pick a UI style from the list"}
        error={errors["uiStyle"]}
      >
        <InputOptionsScalar<UIStyle, UIStyle>
          options={uiStyles}
          value={form["uiStyle"]}
          onChange={(uiStyle) => setForm({ ...form, uiStyle })}
        />
      </Wrapper>

      <SubmitButton loading={loading} />
    </form>
  );
};

const clientValidationFunction = (
  v: Partial<FormData>
): T.FormErrors<FormData> => {
  console.log(v);

  const e: T.FormErrors<FormData> = {};

  if (!("name" in v) || v["name"] === "") {
    e.name = "wth dude";
  }

  if (!("isUuid" in v) || v.isUuid === false) {
    e.isUuid = "wth dude";
  }

  return e;
};

const asyncCall = () =>
  new Promise((r, f) => {
    setTimeout(() => {
      console.log("sdf");
      f({ country: "sdf" });
    }, 2000);
  });

const FreeUI = () => {
  return (
    <FormWrapper
      FormUI={FormUI}
      onSuccess={console.log}
      clientValidationFunction={clientValidationFunction}
      asyncCall={asyncCall}
    />
  );
};
export default FreeUI;
