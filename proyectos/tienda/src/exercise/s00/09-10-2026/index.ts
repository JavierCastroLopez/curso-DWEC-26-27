import type { Cart, CartLine } from "../../../types/cartLine";

// Enunciado: Ejemplo para los carritos
// Autor: Javier Castro López
// Investigación: Fuentes consultadas
//


//EJERCICIOS 1). Crear un tipo llamado CartLine que tenga el id del producto y la cantidad a comprar. Recuerda exportarlo
//crear funciones para ->
//añadir elementos al carrito
//borrar elementos del carrito
//obtener el total del carrito

/**
 *  Funcion que añade un producto al carrito, o suma su cantidad a +1 si ya estaba añadido
 * @param cart Carrito al que se añade el producto
 * @param productId Id del producto a añadir
 * @returns Carrito con el producto añadido
 */
export function addToCart(cart: Cart, productId: number) {
  if (cart.some(p => p.productId === productId)) {
    return cart
      .map(p => {
        return p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p;
      })
  }
  return [...cart, { productId, quantity: 1 }]
}

/**
 * Función que decrementa la cantidad de un producto en el carrito, 
 * o lo elimina por completo si su cantidad llega a 0.
 * @param cart Carrito del que se modificará el producto
 * @param productId Id del producto a decrementar/eliminar
 * @returns Carrito actualizado
 */
export function removeFromCart(cart: Cart, productId: number): Cart {
  return cart
    .map(p => {
      if (p.productId === productId) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    })
    .filter(p => p.quantity > 0);
}

/**
 * Función que obtiene el número total de unidades en el carrito
 * @param cart Carrito a evaluar
 * @returns Cantidad total de productos en el carrito
 */
export function cartTotal(cart: Cart): number {
  return cart.reduce((total, line) => total + line.quantity, 0);
}

// ---------- INICIO DE LA APP ----------


