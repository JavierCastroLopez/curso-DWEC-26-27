
/*
crea una funcion que se le pase un numero como parametro un numero
y devuelve verdadero o falso si el numero es mayor o igual que 10
*/

//const greatherThan10 = (n:number) : boolean => n>=10;
//const greatherThan20 = (n:number) : boolean => n>=10;


//Aprendamos a fabricar funciones que generen funciones

//Primero, typemos una funcion: 
//type nombre_funcion = (parametros typados) => Tipo_Valor_devuelto

//tipo de la funcion
type NumberCheck = (n: number) => boolean;


function greatherThan(limit: number): NumberCheck {
  function ckeck(n: number): boolean {
    return n >= limit
  }
  return ckeck
}

const greatherThan10 = greatherThan(10)
const greatherThan20 = greatherThan(20)
const greatherThan30 = greatherThan(30)

console.log(greatherThan10(20));
console.log(greatherThan20(20));
console.log(greatherThan30(20));


//Por cada elemento del array, devuelve los que son mayores de 3
const nums = [-2, 3, 4, -5, 6];

const greatherThan3 = greatherThan(3);
//for (const n of nums) {
//  console.log(`${n} es mayor que 3: ${greatherThan3(n)}`)
//}
console.log(nums.filter(greatherThan3)); // [3,4,6]
//greatherThan devuelve mayor o igual, por eso devuelve el 3

//-------------------------------------------------------------------

// crear una funcion fabrica que le pase 2 valores y genere verdadero o falso si eñ valor pedido esta entre esos 2 valores sin incluir

//between 10and20 -> createBetween(zzz,xxx)

function createBetween(low: number, max: number): NumberCheck {
  return (n: number): boolean => (n > low && n < max)
}

const between10and20 = createBetween(10, 20)
//const between5and25 = createBetween(5,25)
//const between10and15 = createBetween(10,15)

console.log(between10and20(5))    //false
console.log(between10and20(15))   //true
console.log(between10and20(25))   //false

//--------------------------------------------------------------------


