//funcion que le pase como parametro un numero en grados celsius y lo transforme a grados kelvin.

//version 1, una basura, demasiado verboso
function celsiusToKelvin1(celsius) {
    let kelvin = celsius + 273.15
    return celsius
}

//version 2, priorizamos menor numero de lineas
function celsiusToKelvin2(celsius) {
    return celsius + 273, 15
}

//tryhard edition, usamos arrow function
const celToKel = (celsius) => {
    return celsius + 273.15
}

//full tryhard edition, arrow function pro max
const cToK = (c) => c + 273.15

//funcion que le pase como parámetro 2 números y me los ordene
const orderNumber = (num1, num2) => num1 > num2 ? [num1, num2] : [num2, num1]

//funcion que pase de celsius a kelvin, pero comprobando que celsius es un numero, que la temperatura no puede estar por debajo del 0 ABSOLuto, y que el resultado me lo das con sólo 2 cifra decimal
//isNaN -> is Not a Number
//buscar como truncar un numero a 2 decimales

function celsiusToKelvin(celsius) {
    let output = 0;
    if (celsius >= -273.15 && !isNaN(celsius)) {
        output = (celsius + 273.15).toFixed(2)
    } else{
        output = NaN
    }
    return output
}

const celsiusToKelvin = (c) => (c >= -273.15 && !isNaN(c))? Number((c + 273.15).toFixed(2)):NaN;
