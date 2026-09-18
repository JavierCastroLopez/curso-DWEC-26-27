// Ejercicio 1 JavaScript
//


console.log("Hola Mundo")
//tipos de datos de JavaScript
//
// String y Number
// 'hola' "mundo" `las comillas francesas son tryhards`
console.log(`Hola a todos`)
//Para crear variables, podemos usar var, let y const 
let nombre = "Javier"
let apellidos = "CL"
let aniosTrabajados = 10
console.log(`Hola a todos, me llamo ${nombre} ${apellidos}, llevo trabajando ${aniosTrabajados}`)
//console.log(typeoff(String(aniosTrabajados)))
//console.log(typeoff(Number(apellidos)))

//== -> valor izquierda igual a valor derecha

'a' == 'b' //false 

'5' == 5 //true (durisimo esto)
'5' === 5 //false: === --> valor y tipo del de la izquierda igual al de la derecha

// ternarias
// evaluacion_expresion ? verdadero : false
// 
const edad = "23"
edad>18? console.log("Eres mayor de edad"):console.log("Eres menor de edad")
