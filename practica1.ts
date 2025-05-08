const num1: number = 10;
const num2: number = 20;
const num3: number = 30;
const num4: number = 40;

// Corrección en los console.log() para mostrar los valores originales
console.log(`El valor del num1 es: ${num1}`);
console.log(`El valor del num2 es: ${num2}`);
console.log(`El valor del num3 es: ${num3}`);
console.log(`El valor del num4 es: ${num4}`);

// Crear un array con los números
const numeros = [num1, num2, num3, num4];

// Ordenar de mayor a menor
numeros.sort((a, b) => b - a);

// Imprimir los números ordenados
for (let i = 0; i < numeros.length; i++) {
  console.log(`El valor del número ${i + 1} después de ordenar es: ${numeros[i]}`);
}