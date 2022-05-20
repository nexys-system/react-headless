import { Shape } from "@nexys/validation/dist/type";

export enum UserAuthenticationType {
  password = 1,
}

export interface UserAuthentication {
  uuid: string;
  value: string;
  type: UserAuthenticationType;
  isEnabled: boolean;
}

export const shape: Shape = {
  value: {},
  type: { type: "number" },
  isEnabled: { type: "boolean" },
};

export type FormDataShape = Omit<UserAuthentication, "uuid">;
