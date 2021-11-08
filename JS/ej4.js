// Ejercicio Nº4

// Crear dos funciones una que convierta los grados Cº a Fº y viceversa
// ºF = (ºC · 1.8) + 32
// ºC = (ºF -32) / 1.8

const CaF = celsius =>(celsius* 9 / 5 + 32);
const FaC = far =>((far- 32) * 5 / 9);

console.log(CaF(5));
console.log(FaC(41));


