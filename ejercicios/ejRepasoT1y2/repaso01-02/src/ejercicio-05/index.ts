function precioFinal(precio: number, descuento: number): number | null {
  if (
    !Number.isFinite(precio) ||
    !Number.isFinite(descuento) ||
    precio < 0 ||
    descuento < 0 ||
    descuento > 100
  ) {
    return null
  }

  return precio - (precio * descuento) / 100
}

export function ejercicio05(): void {
  const casos: Array<[number, number]> = [
    [80, 25],
    [0, 20],
    [80, 100],
    [-1, 10],
    [80, 120],
    [NaN, 10],
    [50, 0]
  ]

  for (const [precio, descuento] of casos) {
    const res = precioFinal(precio, descuento)
    const mensaje = res !== null ? `Precio final: ${res}` : 'Datos inválidos'
    console.log(`[Precio: ${precio}, Dcto: ${descuento}%] -> ${mensaje}`)
  }
}