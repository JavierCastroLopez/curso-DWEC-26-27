// Enunciado: Se puede comprar
// Autor: Javier Castro Lopez
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

/**
 *  Funcion a la que se le pasa como parametro un array de Products, un number id, y un number llamada quantity. Devuelve verdadero si el Product con el id insertado tiene un stock menor o igual al stock pasado como parametro y a su vez el stock es mayor a 0
 * @param list Lista de productos
 * @param id Id del producto a comprar
 * @param quantity Cantidad de veces que se va a comprar el producto
 * @returns boolean que dictamina si la compra se puede realizar o no
 */
export function canBuy(list: Product[], id: number, quantity: number): boolean {

  const product: Product | undefined = list.find(p => p.id === id);

  return product !== undefined && quantity > 0 && quantity <= product.stock;
}
