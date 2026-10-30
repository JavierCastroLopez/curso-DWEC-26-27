/*
  * Dom -> Arbol de objetos contruidos con HTML
  * 
  *<html>
  *<body>
  * <h1>Tienda</h1>
  * <div id= caregory>
  *   <input id="search" type="search" /> //formulario basico
  *   <ul id=list></ul> //lista desordenada
  *</div>
  *</body>
  *</html>
  *
  *document
  *   body
  *         h1
  *         div#category
  *         input#search //TODOS LOS ELEMENTOS DEL dom SE DENOMINAN NODOS (Node)
  *           ul#list      //
  *                        //
  *                        //
  *               //Node     -> Todos los elementos del dom que se denominan Nodos
  *                 //Element     -> Cualquier etiqueta
  *                     //HTMLElement     ->textContent, classList, dataset, etc
  *                       //HTMLInputElement    -> value, -checked, etc
  *                       //HTMLButtonElement   -> .disabled
  *                       ...
  *
  *
  * ¿Como se seleccionan los elementos del DOM?
  * document.querySelecor("#category") -> metodo para seleccionar por id o class. PUEDE DEVOLVER null | Element
  * 
  * ¿Como se tipa en typescript?
  * ordenado de peor forma a meojr dorma
  *
  * 1-
  * const search = document.querySelector("#search")! as HTMLInputElement
  * //  ! -> la exclamacion dice: "Te juro por mi rasa que eso de ahi no es un null"
  * // dicho de forma seria, la expresion "!" quita el null de los posibles valores, y garamtiza que existe
  * 
  * 2-
  * const search = document.querySelector<HTMLInputElement>("#search")
  * // Es un poco mejor, pero seguimos sin comprobar si es null o HTMLInputElement
  *
  * 3- Forma perfecta
  * const search = document.querySelector("#search")
  * if(!(search instanceOf HTMLElement)){
  *   throw new Error("No se encuentra la etiqueta search, o no es un input") //Lanzamiendo de errores
  * }
  * console.log(searchInput.value) //muestro por pantalla lo que ha escrito en el input
*/

console.log("Estoy en index.ts")

//CREAR VARIABLES QUE APUNTEN A CADA UNO DE LOS ELEMENETOS DEL DOM QUE TENGO DISEÑADOS AHORA MISMO
//

// 1. El elemento body completo (<body>)
const bodyElement = document.querySelector("body");

// 2. La sección contenedora de los controles (<section class=controls)
const controlsSection = document.querySelector<HTMLElement>(".controls");

// 3. El input de búsqueda (<input id="search">)
const searchInput = document.querySelector<HTMLInputElement>("#search");

// 4. La etiqueta <label> que envuelve el checkbox
const labelElement = document.querySelector<HTMLLabelElement>("label");

// 5. El input tipo checkbox ("solo en stock") (<input id="only-in-stock">)
const onlyInStockCheckbox = document.querySelector<HTMLInputElement>("#only-in-stock");

// 6. El botón de clicks (<button id=btn-clicks>)
const btnClicks = document.querySelector<HTMLButtonElement>("#btn-clicks");

// 7. La lista desordenada (<ul>) donde se mostrarán los elementos (<ul id="list">)
const listElement = document.querySelector<HTMLUListElement>("#list");
