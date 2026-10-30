

/**
 *  Funcion que filtra una tabla de strings ([][]) en un solo array de strings sin repetidos
 * @param posts Tabla de strings
 * @returns Tabla convertida en una lista sin duplicados
 */
export function uniqueTags(posts: string[][]): string[] {
  return [...new Set<string>(...posts.flat())]
}

/** 
 * Funcion que te devuelve el primer repetido de la lista pasada como parametro
 * @param votes lista de Strigs pasada como parametro
 * @returns primer string repetido de la lista
 */
export function firstRepeated(votes: string[]): string | undefined {
  const noRepes = new Set<string>();
  for (const vote of votes) {
    if (noRepes.has(vote)) {
      return vote;
    }
    noRepes.add(vote);
  }
  return undefined
}

/**
 *  Funcion que recibe 2 listas de string y te devuelve los elementos comunes
 * @param a lista de string a
 * @param b lista de string b
 * @returns strings en comun de las 2 listas
 */
export function inBoth(a: string[], b: string[]): string[] {
  const noRepesA = new Set<string>(a);
  const salida = new Set<string>();

  for (const song of b) {
    if (noRepesA.has(song)) {
      salida.add(song)
    }
  }
  return [...salida];
}
