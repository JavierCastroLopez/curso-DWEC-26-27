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

function rebajar(catalogo: Producto[], id: number): Producto[] {
  return catalogo.map((prod) => {
    if (prod.id === id) {
      const nuevoPrecio = Number((prod.precio * 0.9).toFixed(2))
      return {
        ...prod,
        precio: nuevoPrecio,
        rebajado: true
      }
    }
    return prod
  })
}

export function ejercicio09(): void {
  const catalogoRebajado = rebajar(productos, 3)
  console.log('Catálogo resultante (rebajado):', catalogoRebajado)
  console.log('Catálogo original (intacto):', productos)
}
/*
Se realiza una copia superficial del array con map.
Para el producto modificado (id === 3), se crea una
referencia a un objeto totalmente nuevo en memoria
gracias a la sintaxis destructuring ({ ...prod }).
Los demás productos que no sufrieron cambios siguen
compartiendo exactamente la misma referencia en
memoria entre el array original y el nuevo.
*/