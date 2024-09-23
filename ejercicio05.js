console.log("Programa que calcula el promedio del curso de JavaScript");
console.log("Nota de 0 a 100");
console.log("Prácticas con valor de 30%");
console.log("Entregables con valor de 30%");
console.log("Exámen final con valor de 40%");

// Obtener notas de prácticas
let p1 = parseFloat(prompt("Ingresar nota de práctica 1: "));
let p2 = parseFloat(prompt("Ingresar nota de práctica 2: "));
let p3 = parseFloat(prompt("Ingresar nota de práctica 3: "));
let p4 = parseFloat(prompt("Ingresar nota de práctica 4: "));
let sumap = p1 + p2 + p3 + p4;
let prompract = sumap / 4;

console.log("La suma de las prácticas es " + sumap + " y su promedio es " + prompract);
console.log(prompract >= 60 ? "Aprobaste las prácticas" : "Desaprobaste las prácticas");

// Obtener notas de entregables
let e1 = parseFloat(prompt("Ingresar nota de entregable 1: "));
let e2 = parseFloat(prompt("Ingresar nota de entregable 2: "));
let e3 = parseFloat(prompt("Ingresar nota de entregable 3: "));
let e4 = parseFloat(prompt("Ingresar nota de entregable 4: "));
let sumae = e1 + e2 + e3 + e4; // Corrección: sumar las notas de los entregables
let promentreg = sumae / 4;

console.log("La suma de los entregables es " + sumae + " y su promedio es " + promentreg);
console.log(promentreg >= 60 ? "Aprobaste los entregables" : "Desaprobaste los entregables");

// Obtener nota del examen final
let examenf = parseFloat(prompt("Ingresar nota del examen final: "));
console.log("Nota del examen final es: " + examenf);
console.log(examenf >= 60 ? "Aprobaste el examen final" : "Desaprobaste el examen final");

// Calcular promedio final
let promfpract = prompract * 0.3;
let promfentreg = promentreg * 0.3;
let promfexamen = examenf * 0.4;
let promediofinal = promfpract + promfentreg + promfexamen;

console.log(promediofinal >= 60 ? "Aprobaste el curso con un promedio de " + promediofinal + ", obtienes tu certificado" : "Desaprobaste el curso con un promedio de " + promediofinal + ", no obtienes tu certificado");
