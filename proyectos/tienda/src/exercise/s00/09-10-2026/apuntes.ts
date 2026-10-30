// Enunciado: Ejercicios de clase 09/10/2026
// Autor: Nombre y apellidos
// Investigación: Fuentes consultadas
//
//

// ---------- IMPORTS ----------
//import { products } from "../../../data/products";
import type { Product } from "../../../types/product";

//Crear una funcion que me permita añadir productos a mi data.
//Restricciones:


// ---------- DECLARACION VARIABLES ----------
const original = { name: "teclado", price: 80 }
//const copy = original // -> asi no debo crear una copia, porque esta 
//forma de hacerlo hace que apunten a la direccion de 
//memoria, haciendo que modificar uno, modifique el 
//otro

const copy = { ...original }
console.log(copy)
export type NewProduct = Omit<Product, "id">; // **** Es un utility type (tipo de utilidad)
//Crea un nuevo tipo igual que Product, pero sin id (lo OMITe)

// Crea una funcion que actualice el precio del producto, le paso el id, y el nuevo precio


/**
 *  Funcion que actualiza el precio de un producto de la lista pasada como parametro con el id pasado como parametro. estableciendole el precio pasado como parametro
 * @param list Lista de productos
 * @param id Id del producto a actualizar
 * @param price Nuevo precio
 * @returns Lista con el precio actualizadp
 */
export function updatePrice(list: Product[], id: number, price: number): Product[] {
  return list.map((p) => p.id === id ? { ...p, price } : p)// ESTO ES MUY TRYHARD

}

// actualizaciones parciales

export type ProductChanges = Partial<Omit<Product, 'id'>> // leer de dentro para fuera
//Quita el id de productos, y lo que queda, hazlo opcion. con esto me aseguro de no cambiar nunca el id

function updateProduct(list: Product[], id: number, changes: ProductChanges): Product[] {

  return list
    .map(p => {
      return p.id === id ? { ...p, ...changes } : p;
    })
}


//Delete 

function deleteProduct(list: Product[], id: number): Product[] {
  return list.filter(p => p.id !== id)
}


//EJERCICIOS 1). Crear un tipo llamado CartLine que tenga el id del producto y la cantidad a comprar. Recuerda exportarlo
//crear funciones para ->
  //añadir elementos al carrito
  //borrar elementos del carrito
  //obtener el total del carrito
// ---------- INICIO DE LA APP ----------


