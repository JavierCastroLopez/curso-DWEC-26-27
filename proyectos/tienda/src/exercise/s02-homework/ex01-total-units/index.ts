// Enunciado: Total de unidades del array
// Autor: Javier Castro López
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";


export function totalUnits(list: Product[]): number {
  return list.reduce((total, product) => total + product.stock, 0)
}
