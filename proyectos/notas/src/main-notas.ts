import { students } from "./services/students";
import { average, isPassed } from "./utils/grades";

//const averageTest = document.getElementById("average")
const averageTest = document.querySelector("#average");
const listU = document.querySelector("#student-list");

//input de busquedad
const inputSearch = document.createElement("input");
inputSearch.placeholder = "Escriba el nombre para buscar"
inputSearch.style.backgroundColor = "gray"
inputSearch.type = "text"

//boton de enviar la busquedad
const ButtonSearch = document.createElement("button")
ButtonSearch.textContent = "🔎 Buscar"
if (!(averageTest instanceof HTMLParagraphElement)) {
  throw new Error("Falta el parrafo con id average")
}

if (!(listU instanceof HTMLUListElement)) {
  throw new Error("falta la etiqueta <ul>")
}


averageTest.textContent = `media = ${average(students).toFixed(2)}`

averageTest.append(inputSearch)
averageTest.append(ButtonSearch)

for (const student of students) {
  const item = document.createElement("li");
  item.textContent = `Estudiante: ${student.name} --- Nota : ${student.grade}`
  item.style.color = isPassed(student) ? "green" : "red"
  listU.appendChild(item)
}

//crear un input que busque el nomnbre del alumno y me devueva su nota
