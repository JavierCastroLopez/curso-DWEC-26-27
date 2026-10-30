

const phones = new Map<string, string>();

phones.set("Ana", "111111111");
phones.set("Pedro", "222222222");
phones.set("Maria", "333333333");
phones.set("Marco", "444444444");

console.log(phones.size) // 4
console.log(phones.get("Maria")) // 64

//console.log(phones.get("Isaias")) // -> undefines (hay que validas si el dato existe)

console.log(phones.get(Isaias)) ?? console.log("No hay numero para este contacto")


const grades = new Map<string, number>([
  ["Ana", 9],
  ["Mario", 5],
  ["Andres", 4]
])

export function addAlumn(name: string, note: number): Map<string, number> {
  return grades.has(name) ? grades : grades.set(name, note)
}

//funcion para obtener la nota de un alumno siempre que este exista
export function getNote(name: string) {
  return grades.has(name) ? `Nota: ${grades.get(name)}` : console.log("No existe ese nombre")
}

export function countVotes(votes: string[]): Map<string, number> {
  const salida = new Map<string, number>()
  for (const vote of votes) {
    const numVotes = salida.get(vote) ?? 0
    salida.set(vote, numVotes + 1);
  }
  return salida;
}


//agrupar alumnos por clase

export interface Student {
  name: string;
  group: string;
}

const students = [
  { name: "Ana", group: "2A" },
  { name: "Pepe", group: "2B" },
  { name: "Isaias", group: "2B" },
  { name: "Manuel", group: "2A" },
  { name: "Andrea", group: "2B" },

]

export function namesGroup(studens: Student[]): Map<string, string[]> {
  const salida = new Map<string, string[]>
  for (const student of studens) {
    const actualStudent = salida.get(student.group) ?? []
    salida.set(student.group, [...actualStudent, student.name])
  }
  return salida;
}

for (const [group, name] of namesGroup(students)) {
  console.log(`Grupo: ${group}. Estudiantes: ${name}`)
}


//closures
function hello(name: string): string {
  return `Hola ${name}`
}

const fHello = hello;
console.log(fHello("Ana"));
