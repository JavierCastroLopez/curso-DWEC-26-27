//EJERCICIOS 1). Crear un tipo llamado CartLine que tenga el id del producto y la cantidad a comprar. Recuerda exportarlo
//crear funciones para ->
//añadir elementos al carrito
//borrar elementos del carrito
//obtener el total del carrito

export interface CartLine {
  productId: number;
  quantity: number;
}

export type Cart = CartLine[]
