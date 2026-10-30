import { products } from "./data/products";
//import type { Product } from "./types/product";

const prices = [10, 20, 30]
const doubles = prices.map((precio) => precio * 2);

console.log(doubles)


//repaso

//function donde(products: Product[]): number {
//  return products
//    .filter(product => product.stock > 3)
//    .map(p => p.name)
//    .indexOf(n => n === 'Auriculares')
//}

products
  .find(p => p.category === 'peripherals') //-> Me devuelve todo el objeto que cumple esa condicion, pero solo la primera ocurrencia


//console.log(products[0]?.vat) // -> Si la clave no existe, devuelve un undefined

// si esto de la izquierda es null o undefined ?? entonces devuelve esto

//console.log(products[0]?.vat ?? "No existe la clave") // CINE

//Calcula el valor de total de todos mis productos (suma de precio por stock)


//function allPriceForStock (Product[]): number{
//let total:number = 0
//for(const p of products){
//total+=p.price*p.stock;
//}
//return total
//}

//Godmode -> Usamos [].reduce((Acumulador, Elemento_que_itera, posicion, Array_de_partida) => ,)

//function allPriceForStock(Product[]): number =>

products.reduce((totalProductsValue, product) => totalProductsValue += product.price * product.stock, 0)

//sort() -> Ordena. Muta el array, a si que es malo, muy malo
//[...products].sort() //-> Tryhardeada para usar el sort

//toSorted() // No muta, chico bueno. Ordena de forma ascendente

//slice() -> Bueno, no muta
//splice() -> Malo, muta
