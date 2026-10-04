// Enunciado; Ejercicios repaso de metodos de array
// Autor: Javier Castro López

const notas: number[] = [6, 8, 4, 9, 7]

//
//

//funcion que muestre todas las notas.

/**
  * 
  */

function muestraNotas(notes: number[]): void {
  for (const note of notes) {
    console.log(note);
  }
}
//opcion B: notes.forEach((note:number)=> console.log(note))
//console.log(...notes)

//funcion que calcule la media de las notas

function mediaNotas(notes: number[]): number {
  let contador: number = 0;
  for (const note of notes) {
    contador += note
  }
  return contador / notas.length;
}
//opcion B
// const calculateAverage=(notes:number[]) => {
// let suma:number=0;
// notes.forEach(( note: number) => suma+=note)
// console.log("La media es: ", suma/notes.length)
// }

//funcion que muestra la mayor nota y su posicion
function notaMayor(notes: number[]) {
  let contador: number = 0;
  let posicion: number = 0;
  let mayor: number = 0;
  for (const note of notes) {
    if (note > mayor) {
      mayor = note;
      posicion = contador;
    }
    contador++
  }
  console.log(`Nota mayor: ${mayor}, posicion: ${posicion}`)
}
//funcion que calcule la Mediana de las notas
function mediana(notes: number[]) {
  const copiaNotes = [...notes]
  copiaNotes.sort()
  console.log(copiaNotes[Math.round((copiaNotes.length / 2) - 1)])
}

//funcion que devuelva un array con notas junto con la nota pasada como parametro
//
function addNote(notes: number[], note: number): number[] {
  return [...notes, note]
}


//funcion que elimina una nota, recibe el array de notas y como segundo parametro 1 o -1.
//Si es 1, elimina la primera posicion del array y devuelve una copia
//Si es -1, elimina la ultima posicion del array y devuelve una copia
//No mutamos el array del parametro. Lo demostramos haciendo un clg del array para asegurarnos

function deleteGrade(notes: number[], t: (1 | -1)): void {
  const copyNotes = [...notes]
  if (t === 1) {
    copyNotes.shift()
  } else if (t === -1) {
    copyNotes.pop()
  }

  console.log("CopyNotes: ", copyNotes)
  console.log(notes)
}



// ----- funcion de ejecucion -----
export function ejercicio2(): void {

  console.log("showNotes");
  muestraNotas(notas);

  console.log("media de las notas")
  console.log(mediaNotas(notas))

  console.log("nota mayor")
  notaMayor(notas)

  console.log("Mediana")
  mediana(notas)

  console.log("DeleteGrade")
  deleteGrade(notas, -1)
  deleteGrade(notas, 1)
};
