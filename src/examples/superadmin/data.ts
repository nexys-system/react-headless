import { delay } from "../../lib/utils";

export const getPermissions = (uuid: string) => {
  const dataIn = [
    { id: 1, assigned: false, name: "App" },
    { id: 2, assigned: true, name: "Admin" },
    { id: 2, assigned: true, name: "Superadmin" },
  ];

  return Promise.resolve(dataIn);
};

export const updatePermission = async (id: number) => {
  await delay(1000);
  return { uuid: id };
};
