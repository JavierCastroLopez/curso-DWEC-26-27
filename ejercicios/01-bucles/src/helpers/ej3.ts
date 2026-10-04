//Ejercicio: Uso de filter map y otros en Typescript
//Crea un programa que me muestre el nombre de todos los alumnos, calcule la nota media de cada alumno,
//muestre al alumno con la nota media mas alta, calcule la nota media global de la clase, usando estos datos:
//
// {nombre: "Luis", edad: 22, notas: [5,4,6,3]}
// {nombre: "Sara", edad: 24, notas: [8,6,9,3]}
// {nombre: "Marta", edad: 22, notas: [4,4,2,3]}
// {nombre: "Antonio", edad: 21, notas: [8,2,6,3]}
// {nombre: "Lucas", edad: 21, notas: [4,6,8,8]}
// {nombre: "Maria", edad: 21, notas: [8,5,7,7]}

//Para declarar tipos de objetos en Typescript, uso type.
//El nombre del objeto tiene que ir siempre en mayusculas

// ----- declaracion de tipos (objetos)----- 

type Alumno = {
  nombre: string;
  edad: number;
  notas: number[];
};

// ----- declaracion de variables -----

const alumnado : Alumno[] = [
  {nombre: "Luis", edad: 22, notas: [5,4,6,3]},
  {nombre: "Sara", edad: 24, notas: [8,6,9,3]},
  {nombre: "Marta", edad: 22, notas: [4,4,2,3]},
  {nombre: "Antonio", edad: 21, notas: [8,2,6,3]},
  {nombre: "Lucas", edad: 21, notas: [4,6,8,8]},
  {nombre: "Maria", edad: 21, notas: [8,5,7,7]},
]

//Obten UNICAMENTE los nombres de todos los alumnos

function getNombreAlumnos(alumnos : Alumno[]){
  return alumnos.map( (alumno) => alumno.nombre)
}

const obtenerNombres= (alumnos: Alumno[]) => alumnos.map((alumno)=>alumno.nombre);

//Obten la nota media de cada alumno
function getMediaAlumnos(alumnos : Alumno[]){
  const medias : number[] = [];
  for(const alumno of alumnos){
    let notaMedia : number = 0;
    for(const nota of alumno.notas){
      notaMedia += nota;
    }
    medias.push(notaMedia / alumno.notas.length);
  }
  return medias;
}

//Obten la media global de la clase
function getMediaGlobal(alumnos : Alumno[]){
  let mediaGlobal = 0;
  for(const alumno of alumnos){
    for(const nota of alumno.notas){
      mediaGlobal += nota;
    }
  }
  return mediaGlobal / alumnado.length;
}

// ----- inicializar el ejercicio -----

console.log("El nombre de los alumnos es:")
console.log(obtenerNombres(alumnado))

console.log("La media de cada alumno es:")
console.log(getMediaAlumnos(alumnado))

console.log("La media global de la clase es:")
console.log(getMediaGlobal(alumnado))

