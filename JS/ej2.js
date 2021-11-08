// Ejercicio Nº2
// Crear una función que tome como parametro 2 numeros y retorne true si alguno es 100 o si la suma de ambos es 100

  let n1 = prompt("N1");
  let n2 = prompt("N2");

function esCien(n1,n2){

  if (n1 == 100 || n2 == 100){
    console.log("Alguno de los dos es 100");
    return true;
  }else{
    if (n1 + n2 == 100){
      console.log(`La suma de ${n1} y ${n2} es 100`);
      return true;
    }
  }

}

console.log(esCien());
