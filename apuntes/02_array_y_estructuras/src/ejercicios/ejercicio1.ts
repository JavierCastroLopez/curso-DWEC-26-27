// Enunciado: Ejercicio uso de arrays y tipado
// Autor: Javier Castro López
// Investigacion:

// como tipar array

const activos : boolean[] = [true,false,true,true]
const nombres : string[] = {"pepe","luis,"}

const edades: Array<number> = [12,22,18]

const valores:(string|number)[] = ["Ana",25,"Luis",56]


//comodo, pero no recomendado
const persona: [string,number] = ["Ana",45]

// leer elementos de un array
console.log(nombres[0]); //devuelve Pepe
nombres[0] = "Don Pepe" //insertar en la posicion indicada
nombres.push("Sara") //Este metodo puede mutar el array, algo que esta prohibido en react
nombres.pop() //borra el ultimmo elemento del array. Tambien lo muta y devuelve el nuevo array modificado
nombres.unshift() //añade un elemento al principio del array. Devuelve la nueva longitud del array
nombres.shift() //Elimina el primer elemento del array. Devuelve el array modificado

//Metodos que mutan el array:

//push(),pop(),shift(),unshift(),splice(),sort(),reverse()

//metodo slice() -> Devuelve una parte del array sin mutar el array. 5 estrellas

const numeros = [10,20,30,40,50]
const parte Array<number> = numeros.slice(1,4)// devolvera [20,30,40]
//                        // devuelve de la posicion 1, a la 3 (= 4-1)


//metodo splice() -> este permite eliminar, añadir o sustituir elementos del array
numeros.splice (1,2) // devolvera [20,30]. El array se quedata asi:[10,40,50]


//Copias con Sreed Operator
//Segun Isaias, esto es una locura, esta rotisimo, es perfecto
const number:Number[] = [1,2,3]
const copia=[0,...number,4,5]
const copia2=[...copia]



//Recorrer un array:
//for(let i=0; i<num.length;i++) -> Isaias lo odia aunque sea el mas eficiente

//for of -> Cuando solo queremos el valor
//

for (const precio of precios) {
  console.log(precio)
}

//for each -> se usa mucho en react. Este se usara siempre que queramos hacer algo con cada uno de los elementos de un array
//Es similar al map, pero map es mas potente en muchos casos
precios.forEach(( precio, indice) -> {
  console.log(`precio al cuadrado: ${precio**2} - Posicion: ${indice}`)
})

//metodos con funciones CallBack -> forEach(), map(), filter() ***** 5 estrellas, es importante
//un CallBack es una funcion, por lo que estos metodos reciben como parametro una funcion

