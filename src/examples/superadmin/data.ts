import { delay } from "../../lib/utils";
import { Instance } from "./instance/type";
import { User } from "./user/type";

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

export const InstanceData = {
  getDetail: (uuid: string): Promise<Instance> =>
    Promise.resolve({ uuid, name: "my instance " + uuid }),
  getList: () => {
    const d: Instance[] = [
      { uuid: "u1", name: "Instance #1" },
      { uuid: "u2", name: "Instance #2" },
    ];
    return Promise.resolve(d);
  },

  update: (data: Instance) => {
    return Promise.resolve();
  },
};

export const UserData = {
  getList: () => {
    const d: User[] = [
      { uuid: "u1", firstName: "John", lastName: "Doe" },
      { uuid: "u2", firstName: "Jane", lastName: "Doe" },
    ];
    return Promise.resolve(d);
  },
  getDetail: (uuid: string) => {
    return Promise.resolve({
      uuid,
      firstName: "my fn " + uuid,
      lastName: "my ln ",
    });
  },
  update: (data: User) => {
    return Promise.resolve({ uuid: "i2" });
  },
};
