import type { Book } from "../../../types/book";

/**
 *  Funcion que devuelve cuantas veces se repite un string en el array pasado como parametro
 * @param goals array de strings
 * @returns Map con cada string del array y su numero de repeticiones
 */
export function goalsByPlayer(goals: string[]): Map<string, number> {
  const salida = new Map<string, number>
  for (const player of goals) {
    salida.set(player, (salida.get(player) ?? 0) + 1);
  }
  return salida
}

/**
 *  Funcion que recibe una lista de goleadores y te devuelve al que tenga mas goles
 * @param count lista de goleadores y sus goles
 * @returns jugador con mas goles 
 */
export function topScorer(count: ReadonlyMap<string, number>): string | undefined {
  let bestPlayer: string | undefined;
  let moreGoals: number = 0;
  for (const [player, goals] of count) {
    if (goals > moreGoals) {
      bestPlayer = player
      moreGoals = goals
    }
  }
  return bestPlayer
}

/**
 *  Funcion que recibe una lista de libros y autor, y devuelve un map del autor con un array de sus libros
 * @param books Descripción
 * @returns Descripción
 */
export function titlesByAuthor(books: Book[]): Map<string, string[]> {
  const salida = new Map<string, string[]>;
  for (const book of books) {
    salida.has(book.author) ? salida.get(book.author).push(book.title) : salida.set(book.author, book.title)
  }
  return salida;
}


