// Enunciado: Funcion que comprueba si todos los productos tienen stock
// Autor: Javier Castro López
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export const allInStock = (list: Product[]): boolean => list.every((p) => p.stock > 0);

//Pregunta1 ¿Que devuelve allInStock([])?
//Resultado: true
//Pregunta2 ¿Es una respuesta razonable para una tienda sin productos?¿Por que?
//Respuesta:
//Pregunta3 ¿Como cambiarias la funcion para una tienda vacia devuelva false?
//Respuesta: = (list: Product[]): boolean => list.length > 0 && list.every((p)=>p.stock>0);
