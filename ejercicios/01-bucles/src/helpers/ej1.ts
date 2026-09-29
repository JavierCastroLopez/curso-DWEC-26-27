
//Crea una funcion que dada un array de numeros, los separaloe en un array de positivos 
//y un array de negativos, y sumalos de forma independiente

//@autor: JavierCL
//declaracion de variables

//creo funcion
function clasificarNumeros(numeros:number[]){
  const positivos:number[] = []
  const negativos:number[] = []
  let sumaPos:number = 0
  let sumaNeg:number = 0

  //para añadir algo a un array, uso el metodo .push
  for (const numero of numeros){
    if (numero>0){
    positivos.push(numero)
    sumaPos+=numero
    }else{
    negativos.push(numero)
    sumaNeg+=numero
    }

  }
  //antes de salir de la funcion, retornamos los valores pedidios
  return{
    positivos,
    negativos,
    sumaPos,
    sumaNeg
  }
}

//--------------- inicio de la aplicacion ---------------

const datos:number[] = [1,-10,25,11,9,5,-6,8,-5,9,12,-10]

const resultados = clasificarNumeros(datos)

console.log("El array de positivos es: ",resultados.positivos)
console.log("Suma del array positivo: "+resultados.sumaPos)
console.log("================================================================")
console.log(`El array de numeros negativos es ${resultados.negativos}`)
console.log("Suma del array negativo: ",resultados.sumaNeg)
