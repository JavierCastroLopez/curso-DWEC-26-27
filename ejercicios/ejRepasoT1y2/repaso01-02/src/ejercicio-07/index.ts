type Producto = {
  id: number
  nombre: string
  precio: number
  rebajado: boolean
}

const productos: Producto[] = [
  { id: 1, nombre: 'Teclado', precio: 25, rebajado: false },
  { id: 2, nombre: 'Ratón', precio: 15, rebajado: true },
  { id: 3, nombre: 'Monitor', precio: 180, rebajado: false },
  { id: 4, nombre: 'Altavoces', precio: 45, rebajado: true },
  { id: 5, nombre: 'Webcam', precio: 60, rebajado: false }
]

function etiquetasDisponibles(catalogo: Producto[]): string[] {
  return catalogo
    .filter((producto) => !producto.rebajado)
    .map((producto) => `${producto.id} · ${producto.nombre} · ${producto.precio} €`)
}

export function ejercicio07(): void {
  console.log(etiquetasDisponibles(productos))
}
/*
map transforma elementos uno a uno manteniendo siempre la misma longitud del array original.
Si intentáramos filtrar con map, tendríamos que devolver algo (como undefined o null)
ara los elementos descartados, lo que resultaría en un array dela misma longitud pero 
con huecos o valores nulos, en lugar de un array más corto con solo los elementos deseados.
*/