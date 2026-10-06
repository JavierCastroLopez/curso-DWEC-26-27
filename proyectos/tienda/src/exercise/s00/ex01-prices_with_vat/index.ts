
import type { Tablegame } from "../../../types/product";
/** 
  * Recibe una lista de productos y promete devolver una lista de productos con el precio incluyendo el IVA
  * */

const IVA = 0.21;
export function pricesWithVat(tablegames: Tablegame[]): number[] {

  return tablegames.map(tablegame => Math.round(tablegame.price * (1 + IVA)))
}

