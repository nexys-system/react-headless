export type FiltersType<A> = { [k in keyof A | "globalSearch"]?: any };

export interface FilterOptionUnit {
  key: any;
  value: string;
}

export interface Filter<T> {
  type: "string" | "category" | "select";
  func: (dataRow: T, value: any, filtersObj?: FiltersType<T>) => boolean;
  options?:
    | ((filtersObj: FiltersType<T>) => FilterOptionUnit[])
    | FilterOptionUnit[];
}
