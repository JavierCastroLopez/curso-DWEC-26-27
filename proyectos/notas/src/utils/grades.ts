// src/utils/grades.ts
import type { Student } from '../types/student';

export function average(list: readonly Student[]): number {
  if (list.length === 0) return 0;   // dividir entre 0 daría NaN
  const total = list.reduce((sum, s) => sum + s.grade, 0);
  return total / list.length;
}

export function isPassed(student: Student): boolean {
  return student.grade >= 5;
}

export function passedStudents(list: readonly Student[]): Student[] {
  return list.filter(isPassed);      // le damos la receta, sin paréntesis
}
