import React from "react";

import { ViewProps, ViewStructureUnit } from "../view";
import { FormWrapperOnActionProps } from "../form/type";

export interface LayoutProps {
  isForm?: boolean;
  setIsForm: (b: boolean) => void;
  children: JSX.Element;
}

const ToggleHeadless =
  <A,>(
    structure: ViewStructureUnit<A>[],
    Form: (p: FormWrapperOnActionProps<A, any>) => JSX.Element,
    View: (p: ViewProps<A>) => JSX.Element,
    LayoutView: (p: LayoutProps) => JSX.Element,
    LayoutForm: (p: LayoutProps) => JSX.Element
  ) =>
  ({
    data: dataIn,
    options,
  }: {
    data: A;
    options?: {
      [k in keyof A]?: {
        id: string | number;
        name: string;
      }[];
    };
  }) => {
    const [data, setData] = React.useState<A>(dataIn);
    const [isForm, setIsForm] = React.useState<boolean>(false);

    if (isForm) {
      return (
        <LayoutForm setIsForm={setIsForm}>
          <Form
            onSuccess={(d) => {
              setData(d);
              setIsForm(false);
            }}
          />
        </LayoutForm>
      );
    }

    return (
      <LayoutView setIsForm={setIsForm}>
        <View data={data} structure={structure} />
      </LayoutView>
    );
  };

export default ToggleHeadless;
