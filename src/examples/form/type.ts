export interface FormDataShape {
  firstName: string;
  lastName?: string;
  continent: { id: number; name: string };
  age: number;
  method: "GET" | "POST";
  birthdate: string;
  appointment: string;
  lunchTime: string;
}

export interface Out {
  id: number;
}
