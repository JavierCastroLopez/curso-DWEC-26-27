// createTask, toggleDone, rename, removeDone, editTask, pendingByPriority

import type { Priority, Task } from "../../../types/task";


/**
 *  Función que crea una nueva tarea en la lista seleccionada
 * @param listTask Array de Tareas
 * @param title Titulo de la tarea
 * @param priority :Prioridad de la tarea
 * @returns La lista pasada como parametro con una nueva tarea
 */
export function createTask(listTask: Task[], title: string, priority: Priority,): Task[] {
  const id = listTask.reduce((max, t) => Math.max(max, t.id), 0) + 1
  return [...listTask, { id, title, priority, done: false }]
}

/**
 *  Función que devuelve la lista eliminando la tarea con el id pasado como parametro solo si esta esta hecha (done=true)
 * @param list Lista de tareas
 * @param id Id de la tarea a eliminar
 * @returns La lista completa sin la tarea pasada en el caso de que este hecha
 */
export const toggleDone = (list: Task[], id: number): Task[] => {
  return list.map(t => {
    return t.id === id ? { ...t, done: !t.done } : t
  })
}

/**
 *  Funcion que cambia el nombre de una tarea
 * @param list Lista de tareas a modificar
 * @param id Id de la tarea a modificar
 * @param title Nuevo titulo de la tarea
 * @returns Lista de tareas con los cambios hechos
 */
export function rename(list: Task[], id: number, title: string): Task[] {
  const clean = title.trim()
  if (clean === "") return list;
  return list.map(t => t.id === id ? { ...t, title: clean } : t)
}

/**
 *  Elimina una tarea si su id existe y esta hecha
 * @param list Lista de tareas a modificar
 * @param id Id de la tarea a eliminar
 * @returns Lista de tareas con la tarea eliminada si se cumplen las condiciones para ello
 */
export const removeDone = (list: Task[], id: number): Task[] => {
  return list.filter(t => !(t.id === id && t.done));
}

/**
 *  Funcion que edita una tarea de la lista pasada como parametro
 * @param list Lista de tareas
 * @param id Id de la tarea a editar
 * @param changes Cambios
 * @returns Lista de tareas con los cambios hechos
 */
export function editTask(list: Task[], id: number, changes: Partial<Omit<Task, 'id'>>): Task[] {
  return list.map(t => (t.id === id ? { ...t, ...changes } : t))
}


//const order : Record <tipo, valor_igual_para_todos>
const order: Record<Priority, number> = { high: 2, medium: 1, low: 1 }

/**
 *  Ordena la lista por prioridad ignorando las que ya esten hechas (done:true)
 * @param list Lista de tareas
 * @returns Array con los titulo de las tareas ordenados
 */
export const pendingByPriority = (list: Task[]): string[] => {
  return list
    .filter(t => !t.done)
    .toSorted((a, b) => order[b.priority] - order[a.priority])
    .map(t => t.title)
}
