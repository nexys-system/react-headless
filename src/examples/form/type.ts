export interface FormDataShape {
  firstName: string;
  lastName?: string;
  continent: { id: number; name: string };
}

export interface Out {
  id: number;
}
