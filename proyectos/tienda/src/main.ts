// Enunciado: Proyecto creación de una Tienda
// Autor: Javier Castro López
// Investigación: 

// ----- Importaciones -----
import type { Tablegame } from "./types/product";
import { products } from "./data/products"

//mostrar todos los productos
console.log("Catalogo de productos TechStore", products)

//mostrar el primer producto
const first: Tablegame | undefined = products[0]
console.log("Primer producto: ", first)

// mostrar el precio del primer producto
//console.log("Precio del primer producto", first.price)
