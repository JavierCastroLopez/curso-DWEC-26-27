// Enunciado: Descripción del ejercicio
// Autor: Nombre y apellidos
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

/**
 *  Recibe una lista de Products y un id. Devuelve un number con el precio del Product con ese id, o devuele null si no encuentra ningun Product
 * @param list Lista de Products
 * @param id id del Product que se busca
 * @returns Precio del producto que se encuentra
 */
export function priceOf(list: Product[], id: number): number | null {
  const product: Product | undefined = list.find(p => p.id === id)
  if (typeof product === 'undefined') {
    return null;
  }

  return product.price
}

//Pregunta: ¿Porque no es buena idea devolver 0 cuando el producto no exise?
//Respuesta: No, ya que se podria interpretar como que el precio es 0
