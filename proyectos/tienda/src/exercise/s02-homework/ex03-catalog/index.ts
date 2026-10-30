// Enunciado: Ordenar por categoria y precio e imprimir por pantalla
// Autor: Javier Castro López
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function catalog(list: Product[]): string[] {
  return list
    .toSorted((a, b) => a.category.localeCompare(b.category) | a.price - b.price)
    .map(p => `${p.category} · ${p.name} · ${p.price}`);
}
