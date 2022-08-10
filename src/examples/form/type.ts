export interface FormDataShape {
  firstName: string;
  lastName?: string;
  continent: { id: number; name: string };
  age: number;
  method: "GET" | "POST";
}

export interface Out {
  id: number;
}
