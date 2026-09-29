const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function analizarMatriz(matriz: number[][]): {
  suma: number
  maximo: number | null
} {
  let suma = 0
  let maximo: number | null = null

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const valor = matriz[i][j]
      suma += valor
      if (maximo === null || valor > maximo) {
        maximo = valor
      }
    }
  }

  return { suma, maximo }
}

export function ejercicio06(): void {
  console.log(analizarMatriz(matriz))
}