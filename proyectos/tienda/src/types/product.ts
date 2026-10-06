// un tipo describe la forma de un dato
export type Category = "coperative" | "deckbuilding" | "investagation" | "eurogame";

// una interfaz es como un contrato con los valores que debes tener y el tipo. Typescript firma el contrato y se rompe si se queja.
// Los elementos de una interface van separados por ; o por un enter
// Dicho en cristiano, una interfaz es el molde de un objeto, El objeto debe de tener lo que marca la interfaz
export interface Tablegame {
  id: number
  name: string;
  price: number; //precio en euros sin IVA
  category: Category;
  stock: number;
}
