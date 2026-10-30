// Enunciado: Etiquetas
// Autor: Javier Castro López
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function tags(list: Product[]): string[] {
  return list.map((product) => `#${product.id} ${product.name} - ${product.price}€`)
}
