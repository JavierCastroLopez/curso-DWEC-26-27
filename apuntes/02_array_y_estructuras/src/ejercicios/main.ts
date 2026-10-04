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
nombres.push()

