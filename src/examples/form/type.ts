export interface FormDataShape {
  firstName: string;
  lastName?: string;
  continent: { id: number; name: string };
  age: number;
}

export interface Out {
  id: number;
}
