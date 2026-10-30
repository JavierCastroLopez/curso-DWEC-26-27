import { products } from "../../data/products";


products.map(p => p.category) >// -> me mostrara todas las categorias, pero seguramente tendra categorias repetidas

// solucion, usar un Set para tener valores unicos
// Set NO usa posiciones.
//
// como se declara: new Set<tipo>();
const tags = new Set<string>();
// como se añade
tags.add('Ciencia Ficcion');
tags.add('Terror');

//como ver el tamaño del set
tags.size; // -> 2 

// como saber si un elemento esta dentro del set
tags.has('Terror') // -> true. ESTO ES EXCESIVAMENTE RAPIDO Y PRODUCTIVO. MOLA CANTIDUBI

//como se borra:
tags.delete('Terrrrrror') // -> DEVUELVE TRUE SI LO BORRA, Y FALSE SI NO LO BORRA

const categoriasNoRepetidas = new Set<string>(...products.map(p => p.category))

console.log(categoriasNoRepetidas)


//EJERCICIOS
//Crear una funcion que le pase como parametro un array de numeros, y devuelve true/false si hay repetidos.
//
export function hasDuplicates(list: number[]): boolean {
  return new Set(list).size !== list.length
}

hasDuplicates([3, 4, 2, 1, 3, 4, 5]) // -> true

//EJEMPLIFICAMOS CON UN SET UNA LISTA DE PELICULAS YA VISTAS
//Crear una funcion que llamemos  firstView  que reciba un array de id's de peliculas ya vistas y que devuelva un number o undefined con la primera pelicula repetida o que he visto mas de una vez


export function firstView(list: number[]): number | undefined {
  const see = new Set<number>()
  for (const id of list) {
    //if (see.has(id)) return list
    //see.add(id)

    see.has(id) ? list : see.add(id)
  }
  return undefined;
}

firstView([4, 3, 2, 6, 2, 7]) // ->


