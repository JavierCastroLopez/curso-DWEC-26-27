// Enunciado: Por categoria
// Autor: Javier Castro Lopez
// Investigación: Fuentes consultadas
//

import { type Category, type Product } from "../../../types/product";

/**
 *  Recive 2 parametros, una lista de Product y una Category. Y devuelve una lista de Product con todos los Product que tienen esa Category
 * @param list Una lista de productos
 * @param category Categoria a filtrar
 * @returns Lista que contiene los productos de la lista anterior que sean de la categoria Category
 */
export function byCategory(list: Product[], category: Category): Product[] {
  return list
    .filter(p => p.category === category)
}

//Pregunta: ¿Qué devuelve byCategory([], 'audio')?
//Resulado: []
//¿Da error o devuelve algo con sentido?¿Porque?
//Devuelve un array de tipo Product[] vacio, ya que este va a filtrar independientemente de lo que contenga, pero al no contener nada, se quedara vacio
