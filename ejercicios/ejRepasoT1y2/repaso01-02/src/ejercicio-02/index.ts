const numeros = [7, 12, 0, -3, 8, 15, 4]

function contarPorParidad(numeros: number[]): {
  pares: number
  impares: number
} {
  let pares = 0
  let impares = 0

  for (const num of numeros) {
    num % 2 === 0 ? pares++ : impares++
  }

  return { pares, impares }
}

export function ejercicio02(): void {
  console.log(contarPorParidad(numeros))
}