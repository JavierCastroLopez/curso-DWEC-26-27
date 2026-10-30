// Enunciado: Opcion mas economica a comprar ahora mismo
// Autor: Javier Castro López
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function cheapestAvailable(list: Product[]): Product | undefined {
  return list
    .filter(product => product.stock > 0)
    .toSorted((a, b) => a.price - b.price)[0]
}
