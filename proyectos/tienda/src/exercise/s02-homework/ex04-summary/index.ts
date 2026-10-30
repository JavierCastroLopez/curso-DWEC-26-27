// Enunciado: Resumen numérico
// Autor: Javier Castro López
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export interface Summary {
  products: number; // cuántos productos distintos hay
  units: number; // suma del stock de todos
  value: number; // suma de price × stock de cada producto
}

export function summary(list: Product[]): Summary {
  return list.reduce(
    (acumulador, product) => ({
      products: acumulador.products + 1,
      units: acumulador.units + product.stock,
      value: acumulador.value + product.price * product.stock
    }),
    { products: 0, units: 0, value: 0 }
  );
}
