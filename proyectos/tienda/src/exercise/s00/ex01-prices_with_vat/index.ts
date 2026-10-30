import type { Product } from "../../../types/product";
/** 
  * Recibe una lista de productos y promete devolver una lista de productos con el precio incluyendo el IVA
  * */

const IVA = 0.21;
export function pricesWithVat(ps: Product[]): number[] {

  return ps.map(p => Math.round(p.price * (1 + IVA)))
}

